import React, { Component } from "react";
import Head from "next/head";
import Root from "../../components/common/Root";
import Step2 from "../../components/checkout/multisteps/Step2";
import Link from "next/link";

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
  render() {
    return (
      <Root>
        <Head>
          <title>Home</title>
          <link rel="icon" href="/favicon.ico" />
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
            <Link href="/checkout/1">
              <div className="font-size-caption text-decoration-underline cursor-pointer">
                Shipping Details
              </div>
            </Link>
            <img src="/icon/arrow-right.svg" className="w-16 mx-1" />
            <div className="font-size-caption font-color-light">Payment</div>
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
                <Link href="/checkout/1">
                  <div className="font-size-caption text-decoration-underline cursor-pointer">
                    Shipping Details
                  </div>
                </Link>
                <img src="/icon/arrow-right.svg" className="w-16 mx-1" />
                <div className="font-size-caption font-color-light">
                  Payment
                </div>
              </div>
              <Step2 />
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
                    $270.00
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

export default CheckoutPage;
