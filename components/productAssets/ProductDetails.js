import React, { Component } from "react";
import ReviewStars from "./ReviewStars";
import { animateScroll as scroll } from "react-scroll";
import VariantSelector from "../productAssets/VariantSelector";
import { connect } from "react-redux";


class ProductDetails extends Component {

  /**
  * Handle click on review starts to scroll to review section
  */
  onReviewClick = () => {
    const section = document.querySelector("#reviews");

    if (section) {
      scroll.scrollTo(section.offsetTop - 130, {
        smooth: "easeInOutQuint"
      });
    }
  }

  render() {

    const {name, description, product, selected, toggle, price} = this.props;
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
        <div className="mb-4 pb-3 font-size-subheader">{description.replace(reg, "")}</div>

        {/* Product Variants */}
        {/* <div className="d-none d-sm-block">
          {product.map(variant => (
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
          </div> */}

          {/* <div className="d-none d-sm-block">
            <VariantSelector
              className="mb-3"
              name={name}
              product={product}
              // selected={selectedSize}
              // toggle={value =>
              //   this.setState({ selectedSize: value })
              // }
            />
          </div> */}

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
