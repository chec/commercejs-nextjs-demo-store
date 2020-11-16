import React, { Component } from 'react';
import Head from 'next/head';
import Root from '../components/common/Root';
import Footer from '../components/common/Footer';
import commerce from '../lib/commerce';

class LoginPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      isError: false,
      message: null,
    };

    this.handleChange = this.handleChange.bind(this);
    this.loginCustomer = this.loginCustomer.bind(this);
  }

  handleChange(event) {
    this.setState({
      email: event.target.value
    });
  }

  /**
   * Send login email
   *
   * @param {Event} e
   */
  loginCustomer(e) {
    e.preventDefault();
    const urlParams = new URLSearchParams(window.location.search);
    const myParam = urlParams.get('token');
    console.log(myParam);

    const userEmail = this.state.email
    // Reset messaging.
    this.setState({
      isError: false,
      message: null
    });

    return commerce.customer.login(
      userEmail,
      `${window.location.origin}/login/callback?token={token}` //@TODO: verify this is correct with Auth handler.
    )
      .then(() => {
        this.setState({
          isError: false,
          message: [
            'If that email address exists in our system, we\'ve just sent you a link to continue logging in!'
          ]
        });
      })
      .catch((error)=>{
        this.setState({
          isError: true,
          message: error.data.error.errors.email
        });
      });
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
                <form>
                  <label className="w-100 mb-4">
                    <p className="mb-1 font-size-caption font-color-light text-left">
                      Email address
                    </p>
                    <input
                      name="email"
                      type="email"
                      onChange={this.handleChange}
                      value={this.state.email}
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
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </Root>
    );
  }
}

export default LoginPage;
