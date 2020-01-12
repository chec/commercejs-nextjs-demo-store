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

class Confirmation extends Component {
  render() {
    return (
      <Root>
        <div className="pt-5 mt-2 checkout-confirm">
          {/* Row */}
          <div className="row mt-4">
            <div className="col-12 col-md-10 col-lg-6 offset-md-1 offset-lg-0">
              <div className="h-100 d-flex flex-column align-items-center justify-content-center py-5 px-4 px-sm-5">
                <div className="bg-success700 h-64 w-64 d-flex rounded-circle align-items-center justify-content-center mb-4">
                  <img src="/icon/check.svg" className="w-40" />
                </div>
                <p className="text-center font-size-subheader mb-1">
                  Order Completed Successfully
                </p>
                <p className="text-center font-size-caption font-color-light mb-5">
                  Order Number is : 384245
                </p>
                <div className="d-flex w-100 justify-content-center flex-column flex-sm-row">
                  <Link href="/">
                    <button className="checkout-confirm-buttons h-48 px-3 flex-grow-1 border bg-white border-color-gray500 font-color-light mb-2 mb-sm-0 mr-sm-2">
                      Go back home
                    </button>
                  </Link>
                  <Link href="/">
                    <button className="checkout-confirm-buttons h-48 px-3 flex-grow-1 bg-black font-color-white">
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
                        Receipt Number: #5343
                      </p>
                      <p className="font-size-subheader">Order Details</p>
                    </div>
                    <div className="d-flex align-items-center text-decoration-underline cursor-pointer mt-3 mt-sm-0">
                      <img src="/icon/print.svg" className="mr-2 w-20" />
                      Print Reciept
                    </div>
                  </div>
                  <div className="border-bottom border-color-gray400 d-flex align-items-start py-4 flex-column flex-sm-row">
                    <div>
                      <p className="font-color-light mr-4 mb-3 mb-sm-0">
                        Ships to
                      </p>
                    </div>
                    <div className="flex-grow-1">
                      <p className="mb-2">Proksh Luthra</p>
                      <p className="font-color-medium">
                        D-16/23-24 FF, Sec-7 Rohini, Delhi - 110085
                      </p>
                    </div>
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
        </div>
        {/* <div className="h-1 bg-gray400 d-sm-none"></div> */}
      </Root>
    );
  }
}

export default Confirmation;
