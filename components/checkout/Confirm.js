import React, { Component } from 'react';
import Root from '../../components/common/Root';
import Link from 'next/link';
import { connect } from 'react-redux';
import { withRouter } from 'next/router';

class Confirm extends Component {
  constructor(props) {
    super(props);

    this.handlePrint = this.handlePrint.bind(this);
  }

  componentDidMount() {
    if (!this.props.orderReceipt) {
      this.props.router.push('/');
    }
  }

  /**
   * Print the window using the browser's native print functionality, if possible
   */
  handlePrint() {
    if (window && window.print) {
      window.print();
    }
  }

  renderPrintButton() {
    if (typeof window === 'undefined') {
      return null;
    }

    return (
      <button
        onClick={this.handlePrint}
        className="d-flex align-items-center text-decoration-underline cursor-pointer mt-3 mt-sm-0 no-print bg-transparent"
      >
        <img src="/icon/print.svg" className="mr-2 w-20 no-print" alt=""/>
        <div className="no-print">Print receipt</div>
      </button>
    );
  }

  renderSubtotal() {
    const { orderReceipt } = this.props;

    return (
      <div className="py-3">
        <div className="d-flex justify-content-between align-items-center mb-2">
          <p>Subtotal</p>
          <p className="text-right font-weight-medium">
            ${orderReceipt.order.subtotal.formatted_with_code}
          </p>
        </div>
      </div>
    );
  }

  renderShippingTotal() {
    const { orderReceipt } = this.props;
    if (!orderReceipt.order.shipping) {
      return;
    }

    return (
      <div className="pb-3">
        <div className="d-flex justify-content-between align-items-center mb-2">
          <p>Shipping</p>
          <p className="text-right font-weight-medium">
            ${orderReceipt.order.shipping.price.formatted_with_code}
          </p>
        </div>
      </div>
    );
  }

  renderTotal() {
    const { orderReceipt } = this.props;

    return (
      <div className="d-flex justify-content-between align-items-center mb-2 pt-3 border-top border-color-black">
        <p className="font-size-title font-weight-semibold">
          Order total
        </p>
        <p className="text-right font-weight-semibold font-size-title">
          ${orderReceipt.order.total.formatted_with_code}
        </p>
      </div>
    );
  }

  render() {
    const { orderReceipt } = this.props;

    if (!orderReceipt) {
      return '';
    }

    return (
      <Root>
        <div className="pt-5 mt-2 checkout-confirm receipt">
          {/* Row */}
          <div className="row mt-4">
            <div className="col-12 col-md-10 col-lg-6 offset-md-1 offset-lg-0">
              <div className="h-100 d-flex flex-column align-items-center justify-content-center py-5 px-4 px-sm-5">
                <div className="bg-success700 h-64 w-64 d-flex rounded-circle align-items-center justify-content-center mb-4">
                  <img src="/icon/check.svg" className="w-40" alt="" />
                </div>
                <h3 className="text-center font-family-secondary mb-3">
                  Thank you for your purchase!
                </h3>
                <h4 className="text-center font-size-subheader mb-3">
                Your order completed successfully
                </h4>
                <p className="text-center font-color-light mb-5">
                  Here is your order number for reference: {orderReceipt.customer_reference}
                </p>
                <div className="d-flex w-100 justify-content-center flex-column flex-sm-row">
                  <Link href="/">
                    <button className="checkout-confirm-buttons h-48 px-3 flex-grow-1 border bg-white border-color-gray500 font-color-light mb-2 mb-sm-0 mr-sm-2 no-print">
                      Go back home
                    </button>
                  </Link>
                  <Link href="/collection">
                    <button className="checkout-confirm-buttons h-48 px-3 flex-grow-1 bg-black font-color-white no-print">
                      Continue shopping
                    </button>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-12 col-lg-6">
              <div className="bg-brand300 checkout-receipt p-4 p-md-5 overflow-auto">
                <div className="p-sm-4">
                  <div className="border-bottom border-color-gray400 d-flex justify-content-between align-items-start pb-3 flex-column flex-sm-row">
                    <div>
                      <p className="font-color-light mb-2">
                        Receipt number: {orderReceipt.customer_reference}
                      </p>
                      <p className="font-size-subheader">Order details</p>
                    </div>
                    { this.renderPrintButton() }
                  </div>
                  <div className="border-bottom border-color-gray400 d-flex align-items-start py-4 flex-column flex-sm-row">
                    <div>
                      <p className="font-color-light mr-4 mb-3 mb-sm-0">
                        Ships to
                      </p>
                    </div>
                    <div className="flex-grow-1">
                      <p className="font-color-medium">{orderReceipt.shipping.street}</p>
                      {orderReceipt.shipping.street_2 && <p className="font-color-medium">{orderReceipt.shipping.street_2}</p>}
                      <p className="font-color-medium">{orderReceipt.shipping.town_city}, {orderReceipt.shipping.country_state}</p>
                      <p className="font-color-medium">{orderReceipt.shipping.postal_zip_code}, {orderReceipt.shipping.country}</p>
                    </div>
                  </div>
                  <div className="py-4 borderbottom border-color-gray400">
                    {orderReceipt.order.line_items.map((item) => (
                      <div key={item.id} className="d-flex flex-grow-1 mb-3">
                        <div className="flex-grow-1">
                          <p className="mb-2 font-weight-medium">
                            {item.quantity} x {item.product_name}
                          </p>
                          { item.selected_options && item.selected_options.length > 0 && (
                            /* todo support multiple variants here */
                            <p className="font-color-light">
                              {item.selected_options[0].group_name}: {item.selected_options[0].option_name}
                            </p>
                          ) }
                        </div>
                        <div className="text-right font-weight-semibold">
                          {item.line_total.formatted_with_symbol}
                        </div>
                      </div>
                    ))}
                  </div>

                  { this.renderSubtotal() }
                  { this.renderShippingTotal() }
                  { this.renderTotal() }
                </div>
              </div>
            </div>
          </div>
        </div>
      </Root>
    );
  }
}

export default withRouter(connect(state => state)(Confirm));
