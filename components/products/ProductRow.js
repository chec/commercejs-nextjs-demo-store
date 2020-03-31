import React, { Component } from 'react';
import Link from 'next/link';
import withRouter from 'next/router';
import commerce from '../../lib/commerce';

import ProductCard from "../products/ProductCard";

export default class ProductRow extends Component {

  constructor(props) {
    super(props);

    this.state = {
      products: {
        data: [],
        isLoading: true,
      }
    }
  }

  componentDidMount() {
    this.fetchProducts();
  }

  /**
  * Fetch products data from API
  */
  fetchProducts() {
    commerce.products.list({limit: 4}).then(res => {
      // Success
      this.setState({
        products: {
          data: res.data,
          isLoading: false
        }
      })
    }).catch(error => {
      // Error
      console.log(error);
    })
  }

  render() {
    const { products } = this.state;
    const reg = /(<([^>]+)>)/ig

    return (
      <div className="row mb-5">
        {products.data.map((product) => (
          <div className="col-6 col-sm-6 col-lg-3">
            <ProductCard
              permalink={product.permalink}
              key={product.id}
              image={product.media.source}
              name={product.name}
              price={product.price.formatted_with_symbol}
              description={product.description.replace(reg, "")}
            />
          </div>
        ))}
      </div>
    );
  }
}
