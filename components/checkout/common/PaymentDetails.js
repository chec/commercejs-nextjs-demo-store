import React, { Component } from 'react';
import { CardElement } from '@stripe/react-stripe-js';
import PropTypes from 'prop-types';
import Radiobox from '../../common/atoms/Radiobox';

export default class PaymentDetails extends Component {
  /**
   * Render a form for using the Chec test gateway.
   *
   * @returns {JSX.Element}
   */
  renderTestGateway() {
    const {
      gateways,
      onChangeGateway,
      selectedGateway,
      cardNumber,
      expMonth,
      expYear,
      cvc,
    } = this.props;

    if (!gateways || !gateways.available['test_gateway']) {
      return null;
    }

    return (
      <div className="borderbottom border-color-gray500">
        <label
          onClick={() => onChangeGateway('test_gateway')}
          className="p-3 d-flex align-items-center cursor-pointer"
        >
          <Radiobox
            checked={selectedGateway === 'test_gateway'}
            className="mr-3"
          />
          <p className="font-weight-medium">Credit/debit card</p>
        </label>

        { selectedGateway === 'test_gateway' && (
          <div className="pl-5 pr-3 pb-3 ml-2">
            <div className="row">
              <div className="col-sm-8">
                <label className="w-100 mb-3 mt-2 mb-sm-0">
                  <p className="mb-1 font-size-caption font-color-light">
                    Card Number
                  </p>
                  <input
                    name="cardNumber"
                    pattern="[0-9. ]+"
                    value={cardNumber}
                    maxLength="16"
                    className="rounded-0 w-100"
                  />
                </label>
              </div>
              <div className="col-sm-3">
                <label className="w-100 mb-3 mt-2 mb-sm-0">
                  <p className="mb-1 font-size-caption font-color-light">
                    CVC (CVV)
                  </p>
                  <input
                    name="cvc"
                    value={cvc}
                    maxLength="3"
                    type="number"
                    className="rounded-0 w-100"
                  />
                </label>
              </div>
              <div className="col-sm-3">
                <label className="w-100 mb-3 mt-2 mb-sm-0">
                  <p className="mb-1 font-size-caption font-color-light">
                    Exp. Month
                  </p>
                  <input
                    name="expMonth"
                    type="number"
                    value={expMonth}
                    className="rounded-0 w-100"
                    placeholder="MM"
                  />
                </label>
              </div>
              <div className="col-sm-3">
                <label className="w-100 mb-3 mt-2 mb-sm-0">
                  <p className="mb-1 font-size-caption font-color-light">
                    Exp. Year
                  </p>
                  <input
                    type="number"
                    name="expYear"
                    value={expYear}
                    className="rounded-0 w-100"
                    placeholder="YY"
                  />
                </label>
              </div>
            </div>
          </div>
        ) }
      </div>
    );
  }

  /**
   * Renders a Stripe Elements form for capturing payment information using Stripe as the gateway
   *
   * @returns {JSX.Element}
   */
  renderStripe() {
    const { gateways, onChangeGateway, selectedGateway } = this.props;

    if (!gateways || !gateways.available['stripe']) {
      return null;
    }

    const cardElementOptions = {
      style: {
        base: {
          fontSize: '16px',
          color: '#424770',
          '::placeholder': {
            color: '#aab7c4',
          },
        },
        invalid: {
          color: '#9e2146',
        },
      }
    }

    return (
      <div className="borderbottom border-color-gray500">
        <label
          onClick={() => onChangeGateway('stripe')}
          className="p-3 d-flex align-items-center cursor-pointer"
        >
          <Radiobox
            checked={selectedGateway === 'stripe'}
            className="mr-3"
          />
          <p className="font-weight-medium">Credit/debit card (via Stripe)</p>
        </label>

        { selectedGateway === 'stripe' && (
          <div className="pl-5 pr-3 pb-3 ml-2">
            <CardElement options={cardElementOptions} />
          </div>
        ) }
      </div>
    );
  }

  /**
   * Render the payment view, including payment options for each supported gateway
   *
   * @returns {JSX.Element}
   */
  render() {
    return (
      <>
        <p className="font-size-subheader font-weight-semibold mb-3">
          Payment Detail
        </p>
        <div className="border border-color-gray400 mb-5">
          { this.renderTestGateway() }
          { this.renderStripe() }
          { /* todo support other gateways here */ }
        </div>
      </>
    );
  }
}

PaymentDetails.propTypes = {
  gateways: PropTypes.object,
  onChangeGateway: PropTypes.func,
  selectedGateway: PropTypes.string,
}
