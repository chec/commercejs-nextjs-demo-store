import React, { Component } from 'react';
import propTypes from 'prop-types';

class Dropdown extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false
    };
  }

  render() {
    const { isOpen } = this.state;
    const { children } = this.props;

    return (
      <div
        className="position-relative">
        <div
          className={`dropdown bg-white d-flex align-items-center justify-content-between ${isOpen &&
            'border-color-black'}`}
        >
          <p className="font-color-medium">{this.props.value || this.props.placeholder }</p>
          <img
            alt="Downward symbol indicating opening of a dropdown"
            src="/icon/arrow-bottom.svg"
            className="w-20"
          />
          <select
            name={this.props.name}
            required={this.props.required || undefined}
            disabled={this.props.disabled || undefined}
            value={this.props.value}
            className="position-absolute top-0 right-0 bottom-0 left-0 opacity-0 pointer w-100">
            <option value="" disabled>
              { this.props.disabledOptionText || 'Select an option' }
            </option>
            {children}
          </select>
        </div>

      </div>
    );
  }
}
Dropdown.propTypes = {
  name: propTypes.string,
  value: propTypes.string,
  placeholder: propTypes.string,
  disabled: propTypes.string,
  disabledOptionText: propTypes.string,
}
export default Dropdown;
