import React, { Component } from "react";
import Link from "next/link";

import PaymentDetails from "../common/PaymentDetails";
import BillingDetails from "../common/BillingDetails";

export default class Step2 extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <div className="px-4 py-2 mb-5 border border-color-gray400">
          <div className="py-3 borderbottom border-color-gray400">
            <div className="row">
              <div className="col-12 col-sm-2 mb-2 mb-sm-0 font-color-light">
                Contact
              </div>
              <div className="col-9 col-sm-8">prokshh@gmail.com</div>
              <div className="col-3 col-sm-2 d-flex justify-content-end">
                <Link href="/checkout/1">
                  <p className="text-right text-decoration-underline cursor-pointer">
                    Change
                  </p>
                </Link>
              </div>
            </div>
          </div>
          <div className="py-3 borderbottom border-color-gray400">
            <div className="row">
              <div className="col-12 col-sm-2 mb-2 mb-sm-0 font-color-light">
                Ship To
              </div>
              <div className="col-9 col-sm-8">
                D-16/23-24 FF, Sec-7 Rohini, Delhi - 110085
              </div>
              <div className="col-3 col-sm-2 d-flex justify-content-end">
                <Link href="/checkout/1">
                  <p className="text-right text-decoration-underline cursor-pointer">
                    Change
                  </p>
                </Link>
              </div>
            </div>
          </div>
          <div className="py-3">
            <div className="row">
              <div className="col-12 col-sm-2 mb-2 mb-sm-0 font-color-light">
                Method
              </div>
              <div className="col-9 col-sm-8">Free Express Shipping</div>
              <div className="col-3 col-sm-2 d-flex justify-content-end">
                <Link href="/checkout/1">
                  <p className="text-right text-decoration-underline cursor-pointer">
                    Change
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <form>
          {/* Payment Methods */}
          <PaymentDetails />

          {/* Billing Address */}
          <BillingDetails />

          <Link href="/checkout/confirm">
            <button
              type="submit"
              className="bg-black font-color-white w-100 border-none h-56 font-weight-semibold"
            >
              Make Payment
            </button>
          </Link>
        </form>
      </>
    );
  }
}
