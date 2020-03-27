import React, { Component } from 'react';
import Link from 'next/link';
import withRouter from 'next/router';
import commerce from '../../lib/commerce';

export default class ProductRow extends Component {

  constructor(props) {
    super(props);

    this.state = {
      products: {
        data: [],
        // isLoading: true,
      }
    }
  }

  componentDidMount() {
    this.fetchProducts();
  }

  fetchProducts() {
    commerce.products.list(4).then(res => {
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

    if(products.isLoading) {
      return(
        <Div
        w="100vw"
        h="calc(100vh - 6rem)"
        d="flex"
        align="center"
        justify="center"
      >
        Loading...
        {/* <Icon /> */}
      </Div>
      );
    }

    return (
      <div className="row mb-5">
        {products.data.map(product => (
          <div className="col-6 col-sm-6 col-lg-3">
            {/* <Link href={item.link}> */}
              <a className="mb-5 d-block font-color-black cursor-pointer">
                <div
                  className="mb-3"
                  style={{
                    paddingBottom: "125%",
                    background: `url("${product.media.source}") center center/cover`
                  }}
                />
                <p className="font-size-subheader mb-2 font-weight-medium">
                  {product.name}
                </p>
                <p className="mb-2 font-color-medium">{product.description.replace(/(<([^>]+)>)/ig,"")}</p>
                <p className="font-size-subheader font-weight-medium pb-2 borderbottom border-color-black">
                  {product.price.formatted_with_symbol}
                </p>
              </a>
            {/* </Link> */}
          </div>
        ))}
      </div>
    );
  }
}
