import React, { Component } from 'react';
import ReviewStars from './ReviewStars';
import VariantSelector from '../productAssets/VariantSelector';
import { animateScroll as scroll } from 'react-scroll';
import { connect } from 'react-redux';
import { addToCart } from '../../store/actions/cartActions';

class ProductDetail extends Component {
  constructor(props) {
    super(props)

    this.state = {
      selectedOptions: [],
    }

    this.handleAddToCart = this.handleAddToCart.bind(this);
    this.handleReviewClick = this.handleReviewClick.bind(this);
    this.handleSelectOption = this.handleSelectOption.bind(this);
  }

  componentDidMount() {
    this.setSelectedOptions();
  }

  componentDidUpdate(prevProps) {
    if (!prevProps.product || prevProps.product.id !== this.props.product.id) {
      // Product was changed, reset selected variant options
      this.setSelectedOptions();
    }
  }

  /**
   * Work out which options should be selected by which variants
   */
  setSelectedOptions() {
    this.setState((state, props) => ({
      selectedOptions: {
        // Assign the first option as the selected value for each variant
        ...props.product.variants.reduce((acc, variant) => ({
          ...acc,
          [variant.id]: variant.options[0].id,
        }), {}),
      },
    }));
  }

  /**
   * Handle click to scroll to review section
   */
  handleReviewClick() {
    const section = document.querySelector('#reviews');

    if (section) {
      scroll.scrollTo(section.offsetTop - 130, {
        smooth: 'easeInOutQuint'
      });
    }
  }

  /**
   * On selecting variant
   */
  handleSelectOption(variantId, optionId) {
    this.setState({
      selectedOptions: {
        ...this.state.selectedOptions,
        [variantId]: optionId,
      },
    });
  }

  /**
   * Get price of selected option
   */
  getPrice() {
    const { price: { raw: base }, variants } = this.props.product;
    const { selectedOptions } = this.state;

    if (!selectedOptions || typeof selectedOptions !== 'object') {
      return base;
    }

    const options = Object.entries(selectedOptions);
    return base + options.reduce((acc, [variant, option]) => {
      const variantDetail = variants.find(candidate => candidate.id === variant);
      if (!variantDetail) {
        return acc;
      }
      const optionDetail = variantDetail.options.find(candidate => candidate.id === option);
      if (!optionDetail) {
        return acc;
      }

      return acc + optionDetail.price.raw;
    }, 0);
  }
  
  /**
   * Get symbol of formatted price
   */
  getCurrencySymbol(priceFormattedWithSymbol) {
    return priceFormattedWithSymbol.substring(1, 0);
  }

  /**
   * Add to Cart
   */
  handleAddToCart() {
    const { product } = this.props
    const { selectedOptions } = this.state;
    this.props.dispatch(addToCart(product.id, 1, selectedOptions))
  }

  render() {
    const { product } = this.props;
    const { name, description, variants, price } = product;
    const priceSymbol = this.getCurrencySymbol(price.formatted_with_symbol);
    const { selectedOptions } = this.state;
    const reg = /(<([^>]+)>)/ig;

    return (
      <div>
        {/* Product Summary */}
        <div onClick={this.handleReviewClick} className="cursor-pointer">
          <ReviewStars count={4.5} />
        </div>
        <p className="font-size-display3 font-family-secondary mt-2 mb-2">
          {name}
        </p>
        <div className="mb-4 pb-3 font-size-subheader">{(description || '').replace(reg, '')}</div>

        {/* Product Variant */}
          <div className="d-none d-sm-block">
            <VariantSelector
              className="mb-3"
              variants={variants}
              onSelectOption={this.handleSelectOption}
              selectedOptions={selectedOptions}
            />
          </div>

        {/* Add to Cart & Price */}
        <div className="d-flex py-4">
          <button onClick={this.handleAddToCart}
              className="h-56 bg-black font-color-white pl-3 pr-4 d-flex align-items-center flex-grow-1" type="button">
            <span className="flex-grow-1 mr-3 text-center">
              Add to cart
            </span>
            <span className="border-left border-color-white pl-3">
            {priceSymbol}{this.getPrice()}
            </span>
          </button>
        </div>
      </div>
    );
  }
}

export default connect(state => state)(ProductDetail);
