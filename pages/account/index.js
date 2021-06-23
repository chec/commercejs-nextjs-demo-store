import React, { Component } from 'react';
import Head from 'next/head';
import Root from '../../components/common/Root';
import Footer from '../../components/common/Footer';
import TemplatePage from '../../components/common/TemplatePage';
import LoggedOut from '../loggedOut';
import Link from 'next/link';
import commerce from '../../lib/commerce';
import moment from 'moment';
import { connect } from 'react-redux';
import Router, { withRouter } from 'next/router';

class CustomerAccountPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isError: false,
      message: null,
      orders: [],
    };
  }

  componentDidMount() {
    this.verifyAuth();
  }

  /**
   * Verify the user is logged in, if true retrieve orders
   */
  verifyAuth() {
    const isLogged = commerce.customer.isLoggedIn();
    if (!isLogged) {
      return Router.push('/');
    }
    this.getOrders();
  }

  /**
   * Check if date is valid and format
   */
  formatDate(dateTime, prepend) {
    const date = moment.unix(dateTime);

    if (date.isValid()) {
      return date.format('MMM Do Y');
    }
    return null;
  }

  /**
   * Build customer since tag.
   */
  customerSince() {
    if (this.formatDate(this.props.customer.created) === null) {
      return null;
    }
    return (
      <small><strong>Customer since:</strong> { this.formatDate(this.props.customer.created) }</small>
    );
  }

  /**
   * Get the orders
   */
  getOrders() {
    return commerce.customer.getOrders()
      .then((response) => {
        this.setState({
          isError: false,
          orders: response.data,
        });
      })
      .catch((error)=>{
        this.setState({
          isError: true,
          message: [
            'Opps, looks like an error occurred!'
          ],
        });
      });
  }

  /**
   * Get the fulfillment status
   */
  getFulfillmentStatus(status) {
    if (!status) {
      return (
        <span className="badge badge-secondary">Processing</span>
      );
    }
    if (status === 'fulfilled') {
      return (
        <span className="badge badge-primary">Fullfilled</span>
      );
    }

    if (status === 'not_fulfilled') {
      return (
        <span className="badge badge-secondary">Processing</span>
      );
    }

    return (
      <span className="badge badge-secondary">Processing</span>
    );
  }

  /**
   * Get the payment status
   */
  getPaymentStatus(status) {
    if (!status) {
      return (
        <span className="badge badge-secondary">Pending</span>
      );
    }

    if (status === 'not-paid') {
      return (
        <span className="badge badge-warning">Not paid</span>
      );
    }

    if (status === 'paid') {
      return (
        <span className="badge badge-success">Paid</span>
      );
    }

    if (status === 'refunded') {
      return (
        <span className="badge badge-danger">Refunded</span>
      );
    }

    return (
      <span className="badge badge-secondary">Pending</span>
    );
  }

  /**
   * Get the customer's shipping address
   */
  renderShippingAddress() {
    const { orders } = this.state;

    if (!orders || !orders.length) {
      return (
        <div>
          You havent placed an order yet!
        </div>
      );
    }

    const { shipping } = this.state.orders[0];

    if (!shipping) {
      return null;
    }

    return (
      <div>
        <div>{ shipping.name }</div>
        <div>{ shipping.street }</div>
        { shipping.street_2 && <div>{ shipping.street_2 }</div> }
        <div>{ shipping.town_city}{(shipping.town_city && shipping.county_state) ? ',':'' } { shipping.county_state }</div>
        <div>{ shipping.country}{(shipping.country && shipping.postal_zip_code) ? ',':'' } { shipping.postal_zip_code }</div>
      </div>
    );
  }

  renderOrdersTable() {
    const { orders } = this.state;

    if (!orders || !orders.length) {
      return (
        <div className="card text-center p-2">
          <p>You haven't placed any orders yet!</p>
        </div>
      );
    }

    return (
      <table className="table table-bordered">
      <thead>
        <tr>
          <th>Order</th>
          <th>Payment</th>
          <th>Fulfillment</th>
          <th>Total</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {this.state.orders.map((order) => {
          return (
            <tr key={ order.id }>
              <td>
                <div>
                  <Link href={`account/${order.id}`}>
                    <a>#{ order.customer_reference }</a>
                  </Link>
                </div>
                <small className="text-muted">{ this.formatDate(order.created) }</small>
              </td>
              <td>
                { this.getPaymentStatus(order.status_payment) }
              </td>
              <td>
                { this.getFulfillmentStatus(order.status_fulfillment) }
              </td>
              <td>{ order.order_value.formatted_with_symbol }</td>
              <td>
                <Link href={`account/${order.id}`}>
                  <a>View order</a>
                </Link>
              </td>
            </tr>
          )
        })}
      </tbody>
    </table>
    );
  }

  renderAlert() {
    const { isError, message } = this.state;
    if (!message) {
      return null;
    }

    // Generate alert message as either list or single line.
    const alertMessage = message.length === 1
      ? message[0]
      : (
        <ul className="text-left m-0">
          { message.map((copy) => <li key={copy}>{copy}</li>) }
        </ul>
      );

    return (
      <div className={`alert ${isError ? 'alert-danger' : 'alert-success'}`}>
        { alertMessage }
      </div>
    );
  }

  render() {

    if (this.props.loading.customer) {
      return <TemplatePage page={  { message: 'Loading...' }  } />
    }

    // Displays message when the customer logs out.
    if (!this.props.customer) {
      return (
        <LoggedOut />
      );
    }

    const {
      firstname,
      lastname,
      email,
    } = this.props.customer;

    return (
      <Root>
        <Head>
          <title>Account</title>
        </Head>
        <div className="account-container">
          <div className="custom-container py-5 my-4 my-sm-5">
            <div className="row mt-4">
              <div className="col-12">
                <h2 className="font-size-header mb-4 pt-5 text-center">
                  My account
                </h2>
                { this.renderAlert() }
              </div>
            </div>
            <div className="row mt-5 pt-5">
              <div className="col-12 col-md-8 col-lg-8">
                <div className="d-flex flex-row justify-content-between">
                  <h5>Order history</h5>
                  { this.customerSince() }
                </div>
                { this.renderOrdersTable() }
              </div>
              <div className="col-12 col-md-4 col-lg-4 row-content">
                <div className="card p-2 mt-6">
                  <h5 className="mb-2">
                  { firstname } { lastname }
                  </h5>
                  <a
                    href={`mailto:${email}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mb-2"
                  >
                    { email }
                  </a>
                  <h6>
                    Shipping address
                  </h6>
                  { this.renderShippingAddress() }
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </Root>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    customer: state.customer,
    loading: state.loading,
  };
};

export default withRouter(
  connect(
    mapStateToProps,
  )(CustomerAccountPage),
);
