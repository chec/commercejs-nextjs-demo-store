import React, { Component } from "react";
import Radiobox from "../../common/atoms/Radiobox";

const paymentMethods = ["Paypal", "Credit card/ debit card"];

export default class PaymentDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedValue: null
    };
  }
  render() {
    const { selectedValue } = this.state;
    return (
      <>
        <p className="font-size-subheader font-weight-semibold mb-3">
          Payment Detail
        </p>
        <div className="border border-color-gray400 mb-5">
          {paymentMethods.map((value, index) => (
            <div
              className={
                index !== paymentMethods.length - 1 &&
                "borderbottom border-color-gray500"
              }
            >
              <label
                onClick={() => this.setState({ selectedValue: value })}
                className={`p-3 d-flex align-items-center cursor-pointer`}
              >
                <Radiobox
                  checked={selectedValue === value}
                  onClick={() => this.setState({ selectedValue: value })}
                  className="mr-3"
                />
                <p className="font-weight-medium">{value}</p>
              </label>
              {selectedValue === "Credit card/ debit card" &&
                value === selectedValue && (
                  <div className="pl-5 pr-3 pb-3 ml-2">
                    <div className="row">
                      <div className="col-sm-6">
                        <label className="w-100 mb-3 mb-sm-0">
                          <p className="mb-1 font-size-caption font-color-light">
                            Card Number
                          </p>
                          <input className="rounded-0 w-100" />
                        </label>
                      </div>
                      <div className="col-sm-3">
                        <label className="w-100 mb-3 mb-sm-0">
                          <p className="mb-1 font-size-caption font-color-light">
                            Exp. date
                          </p>
                          <input
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
                          <input className="rounded-0 w-100" />
                        </label>
                      </div>
                    </div>
                  </div>
                )}
            </div>
          ))}
        </div>
      </>
    );
  }
}
