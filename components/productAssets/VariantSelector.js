import React, { Component } from "react";
import PropTypes from 'prop-types';

class VariantSelector extends Component {
  render() {
  const { className, products, selected, toggle } = this.props;

  return (
    <div className={className}>
      {products.map(variant => (
        <>
        <span className="mr-3 font-weight-semibold">{variant.name}</span>
        {variant.options.map(option => (
            <span
            onClick={() => toggle(option)}
            className={`mr-3 cursor-pointer ${option === selected &&
              "text-decoration-underline"}`}
          >
            {option}
          </span>
        ))}
        </>
      ))}
    </div>
  );
  }
}

VariantSelector.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object),
};

VariantSelector.defaultProps = {
  products: [],
};

export default VariantSelector;
