import React, { Component } from "react";
import Link from "next/link";

import UnderlineInput from "./UnderlineInput";
import Radiobox from "../common/atoms/Radiobox";

const options = [
  {
    heading: "Fast Shipping",
    description: "Estimated arrival: January 29 - January 31"
  },
  {
    heading: "Standard Shipping",
    description: "Estimated arrival: February 6 - February 10"
  }
];

export default class Step3 extends Component {
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
              <label
                onClick={() => this.setState({ selectedValue: item.heading })}
                className={`p-3 border border-color-${
                  isSelected ? "black" : "gray400"
                } d-flex align-items-start cursor-pointer mb-3`}
              >
                <Radiobox
                  checked={isSelected}
                  onClick={() => this.setState({ selectedValue: item.heading })}
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
            );
          })}
        </div>

        <Link href="/checkout2/4">
          <button
            type="submit"
            className="bg-black font-color-white w-100 border-none h-56 font-weight-medium"
          >
            Continue to billing
          </button>
        </Link>
      </>
    );
  }
}
