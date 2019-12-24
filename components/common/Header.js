import React, { Component } from "react";
import { Transition } from "react-transition-group";

const duration = 300;

const defaultStyle = {
  zIndex: "-1",
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0
};

const transitionStyles = {
  entering: { opacity: 1 },
  entered: { opacity: 1 },
  exiting: { opacity: 0 },
  exited: { opacity: 0 }
};

const mobileMenuLinks = [
  {
    name: "Home",
    link: "#"
  },
  {
    name: "Shop",
    link: "#"
  },
  {
    name: "About",
    link: "#"
  },
  {
    name: "Account",
    link: "#"
  },
  {
    name: "Saved",
    link: "#"
  }
];

export default class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showMobileMenu: false
    };
  }

  toggleMobileMenu = () => {
    const { showMobileMenu } = this.state;

    this.setState({ showMobileMenu: !showMobileMenu });
  };

  render() {
    const { showMobileMenu } = this.state;

    return (
      <header className="position-fixed top-0 left-0 right-0 font-weight-semibold">
        <div className="d-flex header align-items-center justify-content-between position-relative borderbottom border-color-black bg-white">
          <div className="d-none d-sm-flex">
            <a href="#" className="mr-4 font-color-black">
              Shop
            </a>
            <a href="#" className="font-color-black">
              About
            </a>
          </div>
          <div className="logo-container">
            <img
              src={`/icon/${showMobileMenu ? "cross" : "menu"}.svg`}
              onClick={this.toggleMobileMenu}
              className="w-32 mr-1 d-block d-sm-none"
            />
            <img src="/commerce.svg" className="logo cursor-pointer" />
          </div>
          <div className="d-flex">
            <div className="mr-3">
              <img src="/icon/user.svg" className="w-32 cursor-pointer" />
            </div>
            <div className="position-relative cursor-pointer">
              <img src="/icon/cart.svg" className="w-32" />
              <div className="cart-count position-absolute font-size-tiny font-weight-bold">
                0
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <Transition in={showMobileMenu} timeout={duration}>
          {state => (
            <div
              className="d-sm-none position-fixed top-0 left-0 right-0"
              style={{
                ...defaultStyle,
                ...transitionStyles[state]
              }}
            >
              <div className="position-absolute top-0 left-0 right-0 h-100vh mobile-menu-inner bg-black d-flex flex-column justify-content-center">
                {mobileMenuLinks.map(item => (
                  <a
                    href={item.link}
                    className="d-block mb-4 font-size-heading font-color-white text-center"
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
