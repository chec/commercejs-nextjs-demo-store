import React from "react";
import ShippingForm from "./ShippingForm";
import Radiobox from "../../common/atoms/Radiobox";

const ShippingDetail = () => (
  <>
    <p className="font-size-subheader font-weight-semibold mb-4">
      Shipping Information
    </p>
    <div className="mb-5">
        <ShippingForm />
    </div>
  </>
);

export default ShippingDetail;

