import React, { Component } from "react";
import PropTypes from 'prop-types';
import Radiobox from "../../common/atoms/Radiobox";

export default class PaymentDetails extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {
      gateways,
      handleGatewayChange,
      selectedGateway,
      cardNumber,
      expMonth,
      expYear,
      cvc,
      billingPostalZipcode,
    } = this.props;
    return (
      <>
        <p className="font-size-subheader font-weight-semibold mb-3">
          Payment Detail
        </p>
        <div className="border border-color-gray400 mb-5">
          {(gateways && gateways.available['test_gateway']) ?
            (<div className="borderbottom border-color-gray500">
              <label
                onClick={() => handleGatewayChange('test_gateway')}
                className={`p-3 d-flex align-items-center cursor-pointer`}
              >
                <Radiobox
                  checked={selectedGateway === "test_gateway"}
                  className="mr-3"
                />
                <p className="font-weight-medium">Credit card / debit card</p>
              </label>

              <div className="pl-5 pr-3 pb-3 ml-2">
                <div className="row">
                  <div className="col-sm-6">
                    <label className="w-100 mb-3 mb-sm-0">
                      <p className="mb-1 font-size-caption font-color-light">
                        Card Number
                      </p>
                      <input
                        name="cardNumber"
                        value={cardNumber}
                        className="rounded-0 w-100"
                      />
                    </label>
                  </div>
                  <div className="col-sm-3">
                    <label className="w-100 mb-3 mb-sm-0">
                      <p className="mb-1 font-size-caption font-color-light">
                        Exp. date
                      </p>
                      <input
                        name="billingPostalZipcode"
                        value={billingPostalZipcode}
                        className="rounded-0 w-100"
                        placeholder="MM/YY"
                      />
                    </label>
                  </div>
                  <div className="col-sm-3">
                    <label className="w-100 mb-3 mb-sm-0">
                      <p className="mb-1 font-size-caption font-color-light">
                        CVV
                      </p>
                      <input
                        name="cvc"
                        value={cvc}
                        className="rounded-0 w-100"
                      />
                    </label>
                  </div>
                </div>
              </div>
            </div>)
            : ''
          }
          {(gateways && gateways.available['paypal']) ?
            (<div>
              <label
                onClick={() => handleGatewayChange('paypal')}
                className={`p-3 d-flex align-items-center cursor-pointer`}
              >
                <Radiobox
                  checked={selectedGateway === "paypal"}
                  className="mr-3"
                />
                <p className="font-weight-medium">Paypal</p>
              </label>
            </div>)
            : ''
          }
        </div>
      </>
    );
  }
}

PaymentDetails.propTypes = {
  gateways: PropTypes.object,
  handleGatewayChange: PropTypes.func,
  selectedGateway: PropTypes.string,
}
