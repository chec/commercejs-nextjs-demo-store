import React, { Component } from "react";
import { connect } from "react-redux";

import { removeFromCart, updateCartItem } from '../../store/actions/cartActions';

class CartItem extends Component {
  constructor(props) {
    super(props);

    this.handleUpdateCartItem = this.handleUpdateCartItem.bind(this);
    this.handleRemoveFromCart = this.handleRemoveFromCart.bind(this);
  }

  /**
  * Update cart item
  */
  handleUpdateCartItem(lineItem) {
    this.props.dispatch(updateCartItem(lineItem));
  }

  /**
  * Remove item from cart
  */
  handleRemoveFromCart(lineItem) {
    this.props.dispatch(removeFromCart(lineItem));
  }

  render() {
    const { item } = this.props;

    return (
      <div className="px-4 px-md-5 py-4">
        <div className="cart-item d-flex">
          <div
            className="cart-item--image mr-4"
            style={{ backgroundImage: `url("${item.media.source}")` }}
          ></div>
          <div className="flex-grow-1 borderbottom border-color-gray400 h-100">
            <div className="d-flex justify-content-between mb-2">
              <p>{item.name}</p>
              <p className="text-right font-weight-medium">
                ${item.line_total.formatted_with_symbol}
              </p>
            </div>
            <div className="d-flex justify-content-between mb-2">
              <p className="font-color-light font-weight-small">
                {item.variants[0].variant_name}: {item.variants[0].option_name}
              </p>
            </div>
            <div className="d-flex align-items-center justify-content-between pt-2 pb-4">
              <div className="d-flex align-items-center">
                <button className="p-0 bg-transparent" onClick={item.quantity > 1 ? this.handleUpdateCartItem(item.id, item.quantity -1) : this.handleRemoveFromCart(item.id)}>
                  <img src="/icon/minus.svg" className="w-16" />
                </button>
                <p className="text-center px-3">{item.quantity}</p>
                <button className="p-0 bg-transparent" sonClick={this.handleUpdateCartItem(item.id, item.quantity + 1)} >
                  <img src="/icon/plus.svg" className="w-16" />
                </button>
              </div>
              <p className="text-right text-decoration-underline font-color-medium cursor-pointer" onClick={this.handleRemoveFromCart(item.id)}>
                Remove
              </p>
            </div>
          </div>
        </div>
    </div>
  )
  }
}

export default connect(state => state)(CartItem);
