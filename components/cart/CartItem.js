import React, { Component } from 'react';
import { connect } from 'react-redux';
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
  handleUpdateCartItem(lineItem, quantity) {
    this.props.dispatch(updateCartItem(lineItem, quantity));
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
      <div className="px-4 px-md-5 mb-2">
        <div className="cart-item d-flex">
          {item.media && <div
            className="cart-item--image mr-4"
            style={{ backgroundImage: `url("${item.media.source}")` }}
          />}
          <div className="flex-grow-1 borderbottom border-color-gray400 h-100">
            <div className="d-flex justify-content-between mb-2">
              <p>{item.name}</p>
              <p className="text-right font-weight-medium">
                {item.line_total.formatted_with_symbol}
              </p>
            </div>
            <div className="d-flex justify-content-between mb-2">
              {item.selected_options.map((option, i) =>
                <p key={i} className="font-color-light font-weight-small">
                  {option.group_name}: {option.option_name}
                </p>
              )}
            </div>
            <div className="d-flex align-items-center justify-content-between pt-2 pb-4">
              <div className="d-flex align-items-center">
                <button className="p-0 bg-transparent" onClick={() => item.quantity > 1 ? this.handleUpdateCartItem(item.id, item.quantity -1) : this.handleRemoveFromCart(item.id)}>
                  <img src="/icon/minus.svg" className="w-16" title="Minus icon" alt="" />
                </button>
                <p className="text-center px-3">{item.quantity}</p>
                <button className="p-0 bg-transparent" onClick={() => this.handleUpdateCartItem(item.id, item.quantity +1)} >
                  <img src="/icon/plus.svg" className="w-16" title="Plus icon" alt=""/>
                </button>
              </div>
              <p className="text-right text-decoration-underline font-color-medium cursor-pointer" onClick={() => this.handleRemoveFromCart(item.id)}>
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
