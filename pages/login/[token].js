import React, { Component } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Root from '../../components/common/Root';
import Footer from '../../components/common/Footer';
import commerce from '../../lib/commerce';
import Router, { withRouter } from 'next/router';
import LoginAnimation from '../../components/customer/LoginAnimation';
import { compose } from "redux";
import { connect } from "react-redux";
import { setCustomer } from "../../store/actions/authenticateActions";

class Token extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      isError: false,
      message: null,
    };
  }

  componentDidMount() {
    // Get the 'token' from route
    const { token } = this.props.router.query;
    if (!token) {
      return;
    }

    const { setCustomer } = this.props;

    commerce.customer.getToken(token)
      .then(() => {
        // Fetch customer details
        return setCustomer().then(() => Router.push('/account'));
      })
      .catch(() => {
        this.setState({
          loading: false,
          isError: true,
          message: 'The login link has expired. Please try again',
        });
      });
  }

  renderError() {
    const { message } = this.state;

    if (!message) {
      return null;
    }

    return (
      <div className="alert alert-danger">
        { message }
      </div>
    );
  }

  render() {
    const { loading } = this.state;

    if (loading) {
      return <LoginAnimation />;
    }

    return (
      <Root>
        <Head>
          <title>Login</title>
        </Head>
        <div className="login-container pt-1 pb-0 px-3 pt-sm-0 px-sm-0 mx-auto my-0 mw-1600">
          <div className="row mt-5 pt-5">
            <div className="col-12 col-md-6 col-lg-6 offset-lg-3 offset-md-3  row-content text-center">
              <div className="py-5 px-4 px-sm-5">
                <h2 className="font-size-header mb-4">
                  Login
                </h2>
                { this.renderError() }
                <p>
                  <Link href="/login">
                    <a>Click here to try again.</a>
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </Root>
    );
  }
}

export default compose(
  withRouter,
  connect(null, { setCustomer }) // function that returns wrapper
)(Token);
