import React, { Component } from "react";
import Link from "next/link";

import ProductRow from "../products/ProductRow";

export default class ProductsBanner extends Component {
  render() {
    return (
      <div className="custom-container py-5 my-5">
        <div className="d-flex flex-column align-items-center mb-5 pb-4">
          <p className="font-color-medium mb-4">
            Introducing Popular products
          </p>
          <p
            className="text-center font-size-display1 mb-3 font-weight-medium"
            style={{ maxWidth: "32rem" }}
          >
            Limited reservations on upcoming products and restocks.
          </p>
          <Link href="/collection">
            <a className="d-flex py-3 align-items-center font-color-black borderbottom border-color-black">
              <p className="mr-3">See more products</p>
              <img src="/icon/arrow-long-right.svg" />
            </a>
          </Link>
        </div>
        <ProductRow />
      </div>
    );
  }
}
