import React, { Component } from "react";
import Link from "next/link";

import UnderlineInput from "./UnderlineInput";
import Radiobox from "../common/atoms/Radiobox";
import Checkbox from "../common/atoms/Checkbox";

const options = [
  {
    heading: "Credit or debit card",
    description: "Secure and encrypted"
  },
  {
    heading: "Paypal",
    description: "Safe and easy way to pay"
  }
];

export default class Step4 extends Component {
  render() {
    return (
      <div className="d-flex flex-column flex-sm-row align-items-sm-start">
        <img src="/icon/success.svg" className="w-24 mt-1 mb-3" />
        <div className="flex-grow-1 pl-sm-3">
          <p className="font-size-heading font-weight-medium mb-1">
            Order Confirmed
          </p>
          <p className="font-color-light mb-4">Order Number is : 384245</p>
          <div className="row">
            <div className="col-6">
              <Link href="/">
                <button
                  type="submit"
                  className="bg-white border border-color-gray400 font-color-medium h-56 w-100 font-weight-medium"
                >
                  Go back home
                </button>
              </Link>
            </div>
            <div className="col-6">
              <Link href="/">
                <button
                  type="submit"
                  className="bg-black font-color-white border-none h-56 w-100 font-weight-medium"
                >
                  See order reciept
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
