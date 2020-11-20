import React, { Component } from 'react';
import Head from 'next/head';
import Root from '../../components/common/Root';
import Footer from '../../components/common/Footer';
import Link from 'next/link';
import commerce from '../../lib/commerce';
import moment from 'moment';
import { connect } from 'react-redux';
import Router, { withRouter } from 'next/router';


class customerAccountPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isError: false,
      message: null,
      orders: [],
    };
  }

  componentDidMount() {
    this.verifyAuth()
  }

  /**
   * Verify the user is logged in, if true retrieve orders
   */
  async verifyAuth() {
    const isLogged = await commerce.customer.isLoggedIn();
    if (!isLogged) {
      return Router.push('/');
    }
    this.getOrders()
  }

  /**
   * Check if date is valid and format
   */
  dateFormatter(dateTime, prepend) {
    const date = moment.unix(dateTime);

    if (date.isValid) {
      return date.format('MMM Do Y');
    }
    return null;
  }

  /**
   * Build customer since tag.
   */
  customerSince() {
    if (this.dateFormatter(this.props.customer.created) === null) {
      return null;
    }
    return (
      <small><strong>Customer since:</strong> { this.dateFormatter(this.props.customer.created) }</small>
    );
  }

  /**
   * Get the orders
   */
  getOrders() {
    return commerce.customer.getOrders(this.props.customer.id)
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
            'Opps, looks like an error occured!'
          ],
        });
      });
  }

  /**
   * Get the fulfillmeng status
   */
  getFulfillmentStatus(status) {
    if (!status) {
      return null;
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
  }

  /**
   * Get the payment status
   */
  getPaymentStatus(status) {
    if (!status) {
      return null;
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
  }
  /**
   * Get the last used shipping address
   */
  getLastUsedAddress() {
    if (this.state.orders.length === 0) {
      return (
        <div>
          You havent placed an order yet!
        </div>
      )
    }
    const { shipping } = this.state.orders.data[0];
    return (
      <div>
        <div>{ shipping.name }</div>
        <div>{ shipping.street }</div>
        <div>{ shipping.town_city}{(shipping.town_city && shipping.county_state) ? ',':'' } { shipping.county_state }</div>
        <div>{ shipping.country}{(shipping.country && shipping.postal_zip_code) ? ',':'' } { shipping.postal_zip_code }</div>
      </div>
    )
  }

  ordersTable() {
    if(this.state.orders.length === 0) {
      return (
        <div className="card text-center p-2">
          <p>You havent placed any orders yet!</p>
        </div>
      )
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
        {(this.state.orders.length !== 0 ? this.state.orders.data : []).map((order) => {
          return (
            <tr key={ order.id }>
              <td>
                <div>
                  <Link href={`account/${order.id}`}>
                    <a href={`account/${order.id}`}>#{ order.customer_reference }</a>
                  </Link>
                </div>
                <small className="text-muted">{ this.dateFormatter(order.created) }</small>
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
                  <a href={`account/${order.id}`} className="">View order</a>
                </Link>
              </td>
            </tr>
          )
        })}
      </tbody>
    </table>
    )
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
    // Displays message when the customer logs out.
    if (!this.props.customer) {
      return (
        <Root>
          <Head>
            <title>commerce</title>
          </Head>
          <div className="account-container">
            <div className="custom-container py-5 my-4 my-sm-5">
              <div className="row mt-4">
                <div className="col-12 text-center">
                  <h2 className="font-size-header mb-4 pt-5">
                    You have successfully logged out.
                  </h2>
                  <Link href="/">
                    <a href="/" className="mt-4">Continue shopping</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </Root>
      );
    }
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
                { this.ordersTable() }
              </div>
              <div className="col-12 col-md-4 col-lg-4 row-content">
                <div className="card p-2 mt-6">
                  <h5 className="mb-2">
                  { this.props.customer.firstname }
                  { this.props.customer.lastname }
                  </h5>
                  <a
                    href={`mailto:${this.props.customer.email}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mb-2"
                  >
                    { this.props.customer.email }
                  </a>
                  <h6>
                    Shipping address
                  </h6>
                  { this.getLastUsedAddress() }
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

const mapStateToProps = function(state) {
  return {
    customer: state.customer,
  }
}

export default withRouter(
  connect(
    mapStateToProps
  )(customerAccountPage),
);
