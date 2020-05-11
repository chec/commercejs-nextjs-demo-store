import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import ShippingForm from '../common/ShippingForm';
import PaymentDetails from '../common/PaymentDetails';
import BillingDetails from '../common/BillingDetails';

export default class SingleStepForm extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { shippingOptions, gateways, selectedGateway, handleGatewayChange } = this.props;
    return (
      <form>

        {/* ShippingDetails */}
        <p className="font-size-subheader font-weight-semibold mb-4">
          Shipping Information
        </p>
        <div className="mb-5">
          <ShippingForm
            shippingOptions={shippingOptions}
          />
        </div>

        {/* Payment Methods */}
        <PaymentDetails
          gateways={gateways}
          handleGatewayChange={handleGatewayChange}
          selectedGateway={selectedGateway}
        />

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
    );
  }
}

SingleStepForm.propTypes = {
  shippingOptions: PropTypes.array,
  gateways: PropTypes.object,
  handleGatewayChange: PropTypes.object,
  selectedGateway: PropTypes.string,
}
