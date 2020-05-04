import React, { Component } from "react";
import Root from "../../components/common/Root";

import { connect } from "react-redux";
import commerce from '../../lib/commerce'

class PrintReceipt extends Component {

  constructor(props){
    super(props);

    this.state = {
      merchant: {}
    }
  }

  componentDidMount() {
    commerce.merchants.about().then(res => {
      this.merchant = res;
    }).catch(err => {
      console.error('error fetching merchant info', err)
    })
  }

  render() {

    const { orderReceipt } = this.props;
    const { merchant } = this.state;

    return (
      <Root>
        <div className="pt-5 mt-3 checkout-confirm">
          {/* Row */}
          <div className="row mt-4 align-items-center">
            <div className="col-12 col-lg-6">
            <div className="h-100 d-flex flex-column align-items-center justify-content-center py-5 px-4 px-sm-5">
                <h3 className="text-center font-size-header mb-3">
                  Thank you for your purchase from {merchant.business_name}</h3>
                <p className="text-center font-size-subheader mb-3">
                  Here is your order number for reference: {orderReceipt.id}
                </p>
              </div>
              <div className="bg-brand300 checkout-receipt print-receipt p-4 p-md-5 overflow-auto">
                <div className="p-sm-4">
                  <div className="border-bottom border-color-gray400 d-flex justify-content-between align-items-start pb-3 flex-column flex-sm-row">
                    <div>
                      <p className="font-color-light mb-2">Receipt Number: {orderReceipt.id}</p>
                      <p className="font-size-subheader">Order Details</p>
                    </div>
                  </div>
                  <div className="border-bottom border-color-gray400 d-flex align-items-start py-4 flex-column flex-sm-row">
                    <div>
                      <p className="font-color-light mr-4 mb-3 mb-sm-0">Ships to</p>
                    </div>
                    <div className="flex-grow-1">
                      <p className="mb-2">{orderReceipt.shipping.name}</p>
                      <p className="font-color-medium">{orderReceipt.shipping.street}</p>
                      <p className="font-color-medium">{orderReceipt.shipping.town_city}</p>
                      <p className="font-color-medium">{orderReceipt.shipping.postal_zip_code}, {order.shipping.country}</p>
                    </div>
                  </div>
                  <div className="py-4 borderbottom border-color-gray400">
                    {orderReceipt.order.line_items.map((item, index) => (
                      <div
                        className={`d-flex ${item.length - 1 !== index &&
                          "mb-3"}`}
                      >
                        <div className="w-56 h-64 bg-gray200 mr-4" />
                        <div className="d-flex flex-grow-1">
                          <div className="flex-grow-1">
                            <p className="mb-2 font-weight-medium">{item.quantity} x {item.name}</p>
                            <p className="font-color-light">{item.variant}</p>
                          </div>
                          <div className="text-right font-weight-semibold">{item.price}</div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="py-3 borderbottom border-color-black">
                      <div className="d-flex justify-content-between align-items-center mb-2">
                        <p>Subtotal</p>
                        <p className="text-right font-weight-medium">${orderReceipt.order.total_with_tax.formatted_with_code}</p>
                      </div>
                  </div>
                  <div className="d-flex justify-content-between align-items-center mb-2 pt-3">
                    <p className="font-size-title font-weight-semibold">
                      Grand total
                    </p>
                    <p className="text-right font-weight-semibold font-size-title">${orderReceipt.order.total.formatted_with_code}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Root>
    );
  }
}

export default connect(state => state)(PrintReceipt);
