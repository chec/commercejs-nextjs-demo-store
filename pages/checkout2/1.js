import React, { Component } from "react";
import Root from "../../components/common/Root";
import ProgressSteps from "../../components/checkout2/ProgressSteps";
import Step1 from "../../components/checkout2/Step1";

class CheckoutPage extends Component {
  render() {
    return (
      <Root>
        <div className="checkout-2">
          <div className="d-none d-lg-flex position-fixed top-0 left-0 right-0">
            <div
              className="flex-grow-1 h-100vh"
              style={{
                background: "url('/images/checkout.png') center center/cover"
              }}
            ></div>
            <div className="flex-grow-1 h-100vh"></div>
          </div>
          <div className="small-container py-5 my-4 my-sm-5">
            <div className="row">
              <div className="col-lg-6 offset-lg-6">
                <div className="py-5 px-sm-5">
                  <ProgressSteps currentStep={1} />
                  <Step1 />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Root>
    );
  }
}

export default CheckoutPage;
