import React, { Component } from "react";
import PropTypes from 'prop-types';
import Link from "next/link";
import UnderlineInput from "./UnderlineInput";
import Checkbox from "../common/atoms/Checkbox";

export default class Step1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recieveNewsletter: false
    };
  }

  toggleNewsletter = value => {
    this.setState({ recieveNewsletter: value });
  };
  render() {
    const { recieveNewsletter } = this.state;
    return (
      <>
        <p className="font-size-heading font-weight-medium mb-2">
          Hi there. Checkout as a guest.
        </p>
        <p className="font-color-light font-size-caption mb-4">
          <span className="mr-2">Have a Commerce account?</span>
          <a href="#" className="font-color-black">
            Sign In >
          </a>
        </p>
        <UnderlineInput placeholder="Email Address" className="mb-3" />
        <div
          onClick={() => this.toggleNewsletter(!recieveNewsletter)}
          className="d-flex mb-4 flex-nowrap cursor-pointer mb-5"
        >
          <Checkbox
            onClick={() => this.toggleNewsletter(!recieveNewsletter)}
            checked={recieveNewsletter}
            className="mr-3"
          />
          <p>
            Receive our news, restocking, good plans and news in your mailbox!
            Rest assured, you will not be flooded, we only send one newsletter
            per month approximately 🙂
          </p>
        </div>
        <Link href="/checkout2/2">
          <button
            type="submit"
            className="bg-black font-color-white w-100 border-none h-56 font-weight-medium"
          >
            Continue to Shipping
          </button>
        </Link>
      </>
    );
  }
}
