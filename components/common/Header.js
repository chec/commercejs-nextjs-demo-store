import React, { Component } from 'react';
import Link from 'next/link';
import Cart from '../cart/Cart';
import { Transition } from 'react-transition-group';
import { connect } from 'react-redux'

import Animation from '../cart/Animation';

const duration = 300;

const defaultStyle = {
  zIndex: '-1',
  transition: `height ${duration}ms ease-in-out`,
  height: 0
};

const transitionStyles = {
  entering: { height: '100vh' },
  entered: { height: '100vh' },
  exiting: { height: 0 },
  exited: { height: 0 }
};

const mobileMenuLinks = [
  {
    name: 'Home',
    link: '/'
  },
  {
    name: 'Shop',
    link: '/collection'
  },
  {
    name: 'About',
    link: '/about'
  }
];

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showMobileMenu: false,
      showCart: false,
      playAddToCartAnimation: false,
    };

    this.header = React.createRef();

    this.animate = this.animate.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
    this.toggleCart = this.toggleCart.bind(this);
    this.toggleMobileMenu = this.toggleMobileMenu.bind(this);
    this.toggleAddToCartAnimation = this.toggleAddToCartAnimation.bind(this);
    this.handleAddToCartToggle = this.handleAddToCartToggle.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
    window.addEventListener('Commercejs.Cart.Item.Added', this.handleAddToCartToggle);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
    window.removeEventListener('Commercejs.Cart.Item.Added', this.handleAddToCartToggle);
  }

  toggleCart() {
    const { showCart } = this.state;
    this.setState({
      showCart: !showCart,
    });
  }

  handleScroll() {
    window.requestAnimationFrame(this.animate);
  }

  animate() {
    const { transparent } = this.props;

    if (!transparent) {return;}

    if (window.scrollY > 10) {
      this.header.current.classList.add('invert');
    } else {
      this.header.current.classList.remove('invert');
    }
  }

  toggleMobileMenu() {
    const { showMobileMenu } = this.state;
    this.setState({ showMobileMenu: !showMobileMenu });

    if (!showMobileMenu) {
      this.header.current.classList.add('invert');
    } else {
      this.animate();
    }
  }

  /**
   * Toggle add to cart animation to true
   */
  toggleAddToCartAnimation() {
    const { playAddToCartAnimation } = this.state;

    this.setState({ playAddToCartAnimation: !playAddToCartAnimation });
  }

  /**
   * Call toggle of add to cart animation and set time out to false
   */
  handleAddToCartToggle() {
    this.toggleAddToCartAnimation();
    setTimeout(() => {
      this.toggleAddToCartAnimation();
    }, 3000)
  }

  render() {
    const { showMobileMenu, showCart } = this.state;
    const { transparent, cart } = this.props;

    return (
      <header className="position-fixed top-0 left-0 right-0 font-weight-semibold no-print">
        <Cart isOpen={showCart} toggle={value => this.toggleCart(value)} />
        <div
          ref={this.header}
          className={`d-flex header align-items-center justify-content-between position-relative ${
            transparent ? '' : 'invert'
          }`}
        >
          <div className="d-none d-sm-flex">
            <Link href="/collection">
              <a href="/collection" className="mr-4 font-color-black">Shop</a>
            </Link>
            <Link href="/about">
              <a href="/about" className="font-color-black">
                About
              </a>
            </Link>
          </div>
          <div className="logo-container">
            <img
              src={`/icon/${showMobileMenu ? 'cross' : 'menu'}.svg`}
              onClick={this.toggleMobileMenu}
              className="w-32 mr-1 d-block d-sm-none"
              alt="Menu icon"
            />
            <Link href="/">
              <a>
                <img
                  src="/images/commerce.svg"
                  className="logo cursor-pointer"
                  alt="Logo"
                />
              </a>
            </Link>
          </div>
          <div className="d-flex">
            <div
              className="position-relative cursor-pointer"
              onClick={this.toggleCart}
            >
              <Animation isStopped={ this.state.playAddToCartAnimation } />
              <div className="cart-count position-absolute font-size-tiny font-weight-bold">
                {cart.total_items}
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <Transition in={showMobileMenu} timeout={duration}>
          {state => (
            <div
              className="d-sm-none position-fixed top-0 left-0 right-0 overflow-hidden"
              style={{
                ...defaultStyle,
                ...transitionStyles[state]
              }}
            >
              <div className="position-absolute top-0 left-0 right-0 h-100vh mobile-menu-inner bg-brand700 d-flex flex-column justify-content-center">
                {mobileMenuLinks.map((item, i) => (
                  <a
                    key={i}
                    href={item.link}
                    className="d-block mb-4 font-size-heading font-color-black text-center"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          )}
        </Transition>
      </header>
    );
  }
}

export default connect(state => state)(Header);
