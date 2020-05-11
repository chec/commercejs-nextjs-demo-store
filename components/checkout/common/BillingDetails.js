import React, { Component } from 'react';
import Radiobox from '../../common/atoms/Radiobox';
import ShippingForm from '../common/ShippingForm';

const options = ['Same as shipping Address', 'Use a different billing address'];

export default class BillingDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedValue: options[0]
    };
  }

  render() {
    const { selectedValue } = this.state;
    return (
      <>
        <p className="font-size-subheader font-weight-semibold mb-3">
          Billing Address
        </p>
        <div className="border border-color-gray400 mb-5">
          {options.map((value, index) => (
            <label
              key={index}
              onClick={() => this.setState({ selectedValue: value })}
              className={`p-3 d-flex align-items-center cursor-pointer ${index !==
                options.length - 1 && 'borderbottom border-color-gray500'}`}
            >
              <Radiobox
                checked={selectedValue === value}
                onClick={() => this.setState({ selectedValue: value })}
                className="mr-3"
              />
              <p className="font-weight-medium">{value}</p>
            </label>
          ))}
        </div>
        {selectedValue === 'Use a different billing address' && (
          <ShippingForm />
        )}
      </>
    );
  }
}
