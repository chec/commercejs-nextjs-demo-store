import React, { Component } from 'react';
import Head from 'next/head';
import Router, { withRouter } from 'next/router';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { setCustomer } from '../../store/actions/authenticateActions';
import commerce from '../../lib/commerce';
import Root from '../../components/common/Root';
import Footer from '../../components/common/Footer';
import LoginAnimation from '../../components/customer/LoginAnimation';

class LoginHandler extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      isError: false,
      message: null,
    };

    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.loginCustomer = this.loginCustomer.bind(this);
  }

  componentDidMount() {
    // Get the 'token' from route
    const { token } = this.props.router.query;
    if (!token) {
      return;
    }

    const { setCustomer } = this.props;

    this.setState({
      loading: true,
      isError: false,
      message: null,
    });

    commerce.customer.getToken(token)
      .then(() => {
        // Fetch customer details
        return setCustomer().then(() => Router.push('/account'));
      })
      .catch(() => {
        this.setState({
          loading: false,
          isError: true,
          message: ['The login link has expired. Please try again.'],
        });
      });
  }

  /**
   * Change handler for the email address field
   */
  handleChangeEmail(event) {
    this.setState({
      email: event.target.value
    });
  }

  /**
   * Perform a request to Commerce.js to log the user in by their email address. If the
   * user's email address exists, a login link will be emailed to them.
   *
   * @see https://commercejs.com/docs/api/#issue-and-send-login-token
   * @param {Event} e
   */
  loginCustomer(e) {
    e.preventDefault();

    const { email } = this.state;

    // Reset messaging.
    this.setState({
      isError: false,
      message: null,
    });

    return commerce.customer.login(
      email,
      `${window.location.origin}/login?token={token}`
    )
      .then(() => {
        this.setState({
          isError: false,
          email: '',
          message: [
            'If that email address exists in our system, we\'ve just sent you a link to continue logging in!'
          ]
        });
      })
      .catch((error)=>{
        this.setState({
          isError: true,
          message: error.data.error.errors.email,
        });
      });
  }

  /**
   * Render any errors or success messages
   */
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

  /**
   * Render the login form
   */
  renderForm() {
    const { email } = this.state;

    return (
      <form>
        <label className="w-100 mb-4">
          <p className="mb-1 font-size-caption font-color-light text-left">
            Email address
          </p>
          <input
            name="email"
            type="email"
            onChange={this.handleChangeEmail}
            value={email}
            className="rounded-0 w-100"
            required
          />
        </label>
        <button
          className="bg-black font-color-white w-100 border-none h-56 font-weight-semibold"
          type="submit"
          onClick={this.loginCustomer}
        >
          Get magic link
        </button>
      </form>
    );
  }

  render() {
    const { loading } = this.state;

    if (loading) {
      return (
        <Root>
          <Head>
            <title>Logging in...</title>
          </Head>
          <LoginAnimation />
        </Root>
      );
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
                { this.renderAlert() }
                { this.renderForm() }
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
)(LoginHandler);
