import React, { Component } from "react";

const steps = ["Email", "Shipping", "Delivery", "Billing"];

export default class ProgressSteps extends Component {
  findWidth = index => {
    const { currentStep } = this.props;

    if (currentStep - 1 === index) {
      return "w-16";
    } else if (currentStep > index) {
      return "w-100";
    } else {
      return "w-0";
    }
  };

  render() {
    return (
      <div className="progress-steps">
        <div className="d-flex">
          {steps.map((item, index) => (
            <div className="step">
              <div className="h-1 bg-gray400 mb-4">
                <div className={`${this.findWidth(index)} h-1 bg-black`}></div>
              </div>
              <p key={`step-count-${index}`} className="font-size-overline">
                {index + 1} - {item}
              </p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

ProgressSteps.defaultProps = {
  currentStep: 1
};
