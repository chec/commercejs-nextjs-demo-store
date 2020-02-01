import React, { Component } from "react";
import Link from "next/link";

import UnderlineInput from "./UnderlineInput";

export default class Step2 extends Component {
  render() {
    return (
      <>
        <p className="font-size-heading font-weight-medium mb-4">
          Where should we send you order?
        </p>
        <form className="pb-5">
          <div className="row">
            <div className="col-6">
              <UnderlineInput placeholder="First Name" className="mb-3" />
            </div>
            <div className="col-6">
              <UnderlineInput placeholder="Last Name" className="mb-3" />
            </div>
            <div className="col-12">
              <UnderlineInput placeholder="Street Address" className="mb-3" />
            </div>
            <div className="col-12">
              <UnderlineInput
                placeholder="Appartment / suite (optional)"
                className="mb-3"
              />
            </div>
            <div className="col-12">
              <UnderlineInput placeholder="City" className="mb-3" />
            </div>
            <div className="col-6">
              <UnderlineInput placeholder="State" className="mb-3" />
            </div>
            <div className="col-6">
              <UnderlineInput placeholder="Zip Code" className="mb-3" />
            </div>
            <div className="col-12">
              <UnderlineInput
                placeholder="Phone (delivery contact)"
                className="mb-3"
              />
            </div>
          </div>
        </form>

        <Link href="/checkout2/3">
          <button
            type="submit"
            className="bg-black font-color-white w-100 border-none h-56 font-weight-medium"
          >
            Continue to delivery
          </button>
        </Link>
      </>
    );
  }
}
