import React from "react";
import Link from "next/link";

import ProductRow from "../products/ProductRow";

export default function SuggestedProducts() {
  return (
    <div className="custom-container py-5 my-5">
      <div className="d-flex flex-column align-items-center mb-5 pb-4">
        <p className="font-color-medium mb-4">Suggested products</p>
        <p
          className="text-center font-size-display1 font-weight-medium"
          style={{ maxWidth: "30rem" }}
        >
          You may also like to checkout these products.
        </p>
      </div>
      <ProductRow />
    </div>
  );
}
