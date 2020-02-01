import React, { Component } from "react";
import Link from "next/link";

import UnderlineInput from "./UnderlineInput";
import Radiobox from "../common/atoms/Radiobox";
import Checkbox from "../common/atoms/Checkbox";

const options = [
  {
    heading: "Credit or debit card",
    description: "Secure and encrypted"
  },
  {
    heading: "Paypal",
    description: "Safe and easy way to pay"
  }
];

export default class Step4 extends Component {
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
        <p className="font-size-heading font-weight-medium mb-4">
          How should we deliver to you?
        </p>

        <div className="pb-4">
          {options.map((item, index) => {
            const isSelected = selectedValue === item.heading;
            return (
              <>
                <label
                  onClick={() => this.setState({ selectedValue: item.heading })}
                  className={`p-3 border border-color-${
                    isSelected ? "black" : "gray400"
                  } d-flex align-items-start cursor-pointer mb-3`}
                >
                  <Radiobox
                    checked={isSelected}
                    onClick={() =>
                      this.setState({ selectedValue: item.heading })
                    }
                    className="mr-3"
                    color={isSelected ? "#000000" : "#A5A5A5"}
                  />
                  <div>
                    <p
                      className={`font-weight-medium font-color-${
                        isSelected ? "black" : "light"
                      } mb-1`}
                    >
                      {item.heading}
                    </p>
                    <p
                      className={`font-color-${
                        isSelected ? "medium" : "light"
                      } font-size-caption`}
                    >
                      {item.description}
                    </p>
                  </div>
                </label>
                {selectedValue === "Credit or debit card" && isSelected && (
                  <CardForm />
                )}
                {selectedValue === "Paypal" && isSelected && <PaypalForm />}
              </>
            );
          })}
        </div>
      </>
    );
  }
}

class CardForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isBillingSame: true
    };
  }

  toggleBillingAddressSame = value => {
    this.setState({ isBillingSame: value });
  };

  render() {
    const { isBillingSame } = this.state;
    return (
      <form className="pb-5">
        <div className="row">
          <div className="col-12">
            <UnderlineInput placeholder="Card Number" className="mb-3" />
          </div>
          <div className="col-6">
            <UnderlineInput placeholder="MM/YY" className="mb-3" />
          </div>
          <div className="col-6">
            <UnderlineInput placeholder="CVV" className="mb-3" />
          </div>
        </div>
        <div
          onClick={() => this.toggleBillingAddressSame(!isBillingSame)}
          className="d-flex align-items-start mb-4 flex-nowrap cursor-pointer mb-5"
        >
          <Checkbox
            onClick={() => this.toggleBillingAddressSame(!isBillingSame)}
            checked={isBillingSame}
            className="mr-2"
          />
          <p>Billing address is same as shipping address</p>
        </div>

        <div className="d-flex justify-content-end">
          <Link href="/checkout2/5">
            <button
              type="submit"
              className="bg-black font-color-white ml-auto border-none h-56 px-5 font-weight-medium"
            >
              Make Payment with card
            </button>
          </Link>
        </div>
      </form>
    );
  }
}

class PaypalForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isBillingSame: true
    };
  }

  toggleBillingAddressSame = value => {
    this.setState({ isBillingSame: value });
  };

  render() {
    const { isBillingSame } = this.state;
    return (
      <form className="pb-5">
        <div
          onClick={() => this.toggleBillingAddressSame(!isBillingSame)}
          className="d-flex align-items-start mb-4 flex-nowrap cursor-pointer mb-5"
        >
          <Checkbox
            onClick={() => this.toggleBillingAddressSame(!isBillingSame)}
            checked={isBillingSame}
            className="mr-2"
          />
          <p>Billing address is same as shipping address</p>
        </div>

        <div className="d-flex justify-content-end">
          <Link href="/checkout2/5">
            <button
              type="submit"
              className="bg-black font-color-white ml-auto border-none h-56 px-5 font-weight-medium"
            >
              Make Payment with Paypal
            </button>
          </Link>
        </div>
      </form>
    );
  }
}
