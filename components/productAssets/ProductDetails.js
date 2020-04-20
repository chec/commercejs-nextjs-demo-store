import React, { Component } from "react";
import ReviewStars from "./ReviewStars";
import { animateScroll as scroll } from "react-scroll";
import VariantSelector from "../productAssets/VariantSelector";
import { connect } from "react-redux";
import commerce from '../../lib/commerce';


class ProductDetails extends Component {
  constructor(props) {
    super(props)

    this.state = {
      selectedOption: null,
    }
  }

  /**
  * Handle click on review to scroll to review section
  */
  onReviewClick = () => {
    const section = document.querySelector("#reviews");

    if (section) {
      scroll.scrollTo(section.offsetTop - 130, {
        smooth: "easeInOutQuint"
      });
    }
  }

  /**
  * On selecting variant
  */
  onSelectOption = (variantId, optionId, action) => {
    const { selectedOption } = this.state;

    let newSelectedOption = selectedOption;
    newSelectedOption[variantId] = optionId;

    this.setState(
      { selectedOption: newSelectedOption },
      () => action && action()
    );
  }


  /**
  * Add to Cart
  */
  addToCart = () => {
    const { product, commerce, refreshCart } = this.props;

    const { selectedOption } = this.state;

    commerce.cart.add(product.id, 1, selectedOption)
      .then(resp => {
        refreshCart(() => {
          toggleCart(true);
        })
      })
  }

  render() {
    const { product } = this.props;
    const { name, description, formatted_with_symbol: price } = product;
    const { selectedOption } = this.state;
    const reg = /(<([^>]+)>)/ig;

    return (
      <div>

        {/* Product Summary */}
        <div onClick={this.onReviewClick} className="cursor-pointer">
          <ReviewStars count={4.5} />
        </div>
        <p className="font-size-display3 font-family-secondary mt-2 mb-2">
          {name}
        </p>
        <div className="mb-4 pb-3 font-size-subheader">{(description || '').replace(reg, "")}</div>

        {/* Product Variant */}
          <div className="d-none d-sm-block">
            <VariantSelector
              className="mb-3"
              product={product}
              onSelectOption={this.onSelectOption}
              selectedOption={selectedOption}
              addToCart={this.addToCart}
              // toggle={value =>
              //   this.setState({ selectedSize: value })
              // }
            />
          </div>

        {/* Add to Cart & Price */}
        <div className="d-flex py-4">
          <button onClick={this.addToCart} className="h-56 bg-black font-color-white pl-3 pr-4 d-flex align-items-center flex-grow-1">
            <span className="flex-grow-1 mr-3 text-center">
              Add to cart
            </span>
            <span className="border-left border-color-white pl-3">
            {price}
            </span>
          </button>
        </div>

      </div>
    );
  }
}

export default connect(state => state)(ProductDetails);
