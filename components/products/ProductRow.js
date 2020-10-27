import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ProductCard from '../products/ProductCard';

class ProductRow extends Component {
  render() {
    const { products } = this.props;
    const reg = /(<([^>]+)>)/ig;

    return (
      <div className="row mb-5">
        {products.map(({ id, permalink, media, name, price, description }) => (
          <div key={id} className="col-6 col-sm-6 col-lg-3">
            <ProductCard
              id={id}
              permalink={permalink}
              image={media.source}
              name={name}
              price={price.formatted_with_symbol}
              description={description && description.replace(reg, '')}
            />
          </div>
        ))}
      </div>
    );
  }
}

ProductRow.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object),
};

ProductRow.defaultProps = {
  products: [],
};

export default ProductRow;
