import React, { Component } from "react";
import PropTypes from 'prop-types';
import Head from "next/head";
import { connect } from "react-redux";
import Root from "../../components/common/Root";
import Step1 from "../../components/checkout/multisteps/Step1";

// Checkout redux action creators
import {
  generateCheckoutTokenFromCart as dispatchGenerateCheckout,
  getShippingOptionsForCheckout as dispatchGetShippingOptions,
} from '../../store/actions/checkoutActions';

const products = [
  {
    image: "",
    name: "1 x Futuredew",
    detail: "300ml, Dry Skin",
    price: "$32.00"
  },
  {
    image: "",
    name: "1 x Futuredew",
    detail: "300ml, Dry Skin",
    price: "$32.00"
  },
  {
    image: "",
    name: "1 x Futuredew",
    detail: "300ml, Dry Skin",
    price: "$32.00"
  }
];

class CheckoutPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deliveryCountry: 'CA',
      deliveryRegion: 'NY',
    }
  }

  componentDidMount() {
    // on initial mount generate checkout token object from the cart,
    // and then subsequently below in componentDidUpdate if the props.cart.total_items has changed
    this.generateToken();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.cart && prevProps.cart.total_items !== this.props.cart.total_items) {
      // re-generate checkout token object since cart has been updated
      this.generateToken();
    }
  }

  generateToken = async () => {
    const { cart, dispatchGenerateCheckout, dispatchGetShippingOptions } = this.props;
    if (cart) {
      const { deliveryCountry: country, deliveryRegion: region } = this.state;
      try {
        const checkout = await dispatchGenerateCheckout(cart.id);
        // continue and dispatch getShippingOptionsForCheckout to get shipping options based on checkout.id
        dispatchGetShippingOptions(checkout.id, country, region);
      } catch (error) {
        console.log('error caught in Cart.js in generateToken', error);
      }
    }
  }

  render() {
    const { checkout } = this.props;
    return (
      <Root>
        <Head>
          <title>Checkout</title>
        </Head>
        <div className="custom-container py-5 my-4 my-sm-5">
          {/* Breadcrums Mobile */}
          <div
            className="d-flex d-sm-none px-4 py-3 borderbottom border-color-gray400 justify-content-center"
            style={{ margin: "0 -1.5rem" }}
          >
            <div className="font-size-caption text-decoration-underline cursor-pointer">
              Cart
            </div>
            <img src="/icon/arrow-right.svg" className="w-16 mx-1" />
            <div className="font-size-caption font-color-light">
              Shipping Details
            </div>
          </div>

          {/* Row */}
          <div className="row mt-4">
            <div className="col-12 col-md-10 col-lg-6 offset-md-1 offset-lg-0">
              {/* Breadcrums Desktop */}
              <div className="d-none d-sm-flex pb-4">
                <div className="font-size-caption text-decoration-underline cursor-pointer">
                  Cart
                </div>
                <img src="/icon/arrow-right.svg" className="w-16 mx-1" />
                <div className="font-size-caption font-color-light">
                  Shipping Details
                </div>
              </div>

              <Step1 />
            </div>

            <div className="col-12 col-md-5 offset-md-1 d-none d-lg-block">
              <div className="bg-brand200 p-5">
                <div className="borderbottom font-size-subheader border-color-gray400 pb-2 font-weight-medium">
                  Your order
                </div>
                <div className="py-4 borderbottom border-color-gray400">
                  {products.map((product, index) => (
                    <div
                      className={`d-flex ${products.length - 1 !== index &&
                        "mb-3"}`}
                    >
                      <div className="w-56 h-64 bg-gray200 mr-4" />
                      <div className="d-flex flex-grow-1">
                        <div className="flex-grow-1">
                          <p className="mb-2 font-weight-medium">
                            {product.name}
                          </p>
                          <p className="font-color-light">{product.detail}</p>
                        </div>
                        <div className="text-right font-weight-semibold">
                          {product.price}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <form className="d-flex py-3 borderbottom border-color-gray400">
                  <input
                    placeholder="Gift card or discount code"
                    className="mr-2 flex-grow-1"
                  />
                  <button
                    className="font-color-white border-none font-weight-medium px-4"
                    disabled
                  >
                    Apply
                  </button>
                </form>
                <div className="py-3 borderbottom border-color-black">
                  {[
                    {
                      name: "Subtotal",
                      amount: "$ 203.00"
                    },
                    {
                      name: "Tax",
                      amount: "$ 3.00"
                    },
                    {
                      name: "Shipping",
                      amount: "$ 30.00"
                    }
                  ].map(item => (
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <p>{item.name}</p>
                      <p className="text-right font-weight-medium">
                        {item.amount}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="d-flex justify-content-between align-items-center mb-2 pt-3">
                  <p className="font-size-title font-weight-semibold">
                    Total amount
                  </p>
                  <p className="text-right font-weight-semibold font-size-title">
                    $ { checkout.live ? checkout.live.total_due.formatted_with_code : '' }
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="h-1 bg-gray400 d-sm-none"></div> */}
      </Root>
    );
  }
}

CheckoutPage.propTypes = {
  checkout: PropTypes.object,
  cart: PropTypes.object,
  dispatchGenerateCheckout: PropTypes.func,
  dispatchGetShippingOptions: PropTypes.func,
}

export default connect(({ checkout: { checkoutTokenObject, shippingOptions }, cart }) => ({ checkout: checkoutTokenObject, shippingOptions, cart }), {
  dispatchGenerateCheckout,
  dispatchGetShippingOptions,
})(CheckoutPage);

