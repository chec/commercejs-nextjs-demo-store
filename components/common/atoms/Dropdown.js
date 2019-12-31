import React, { Component } from "react";

import ReactDOM from "react-dom";
import { Transition } from "react-transition-group";

/**
 * Duration for the transition
 */
const duration = 300;

/**
 * Default Style for DropdownMenu
 */
const defaultStyle = {
  transition: `max-height ${duration}ms ease-in-out`,
  opacity: 0,
  zIndex: 1
};

/**
 * Trasition Styles for DropdownMenu
 */
const transitionStyles = {
  entering: { opacity: 0, maxHeight: "0" },
  entered: { opacity: 1, maxHeight: "200px" },
  exiting: { opacity: 0, maxHeight: "0" },
  exited: { opacity: 0, maxHeight: "0" }
};

class Dropdown extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false
    };

    this.searchInput = React.createRef();
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleOutsideClick, false);
  }

  removeEvents = () => {
    document.removeEventListener("mousedown", this.handleOutsideClick, false);
  };

  handleClick = value => {
    if (value) {
      document.addEventListener("mousedown", this.handleOutsideClick, false);
      this.searchInput.current.focus();
    } else {
      this.removeEvents();
    }

    this.setState({ isOpen: value });
  };

  handleOutsideClick = e => {
    if (ReactDOM.findDOMNode(this).contains(e.target)) {
      return;
    }

    this.handleClick(false);
  };

  onKeyDown = e => {
    const { isOpen } = this.state;

    if (e.key === "Tab") {
      return;
    }

    if (e.key != "Enter") {
      return;
    }

    this.handleClick(!isOpen);
  };

  onSearch = e => {
    console.log(e);
  };

  render() {
    const { isOpen } = this.state;
    const { children, menu } = this.props;

    return (
      <div className="position-relative">
        <input
          ref={this.searchInput}
          className="d-none h-0 w-0"
          onChange={this.onSearch}
        />
        <div
          tabIndex="0"
          className={`dropdown bg-white d-flex align-items-center justify-content-between ${isOpen &&
            "border-color-black"}`}
          onClick={() => this.handleClick(!isOpen)}
          onKeyDown={this.onKeyDown}
        >
          {/* {isOpen ? (
            <input
              className="flex-grow-1 bg-black mr-3 h-40"
              onFocus={() => {
                !isOpen && this.handleClick(true);
              }}
            />
          ) : (
            <p className="font-color-medium">{children}</p>
          )} */}
          <p className="font-color-medium">{children}</p>

          <img
            src="/icon/arrow-bottom.svg"
            className="w-20"
            style={{ transform: isOpen ? "rotate(-180deg)" : "none" }}
          />
        </div>
        <Transition in={isOpen} timeout={duration} unmountOnExit>
          {state => (
            <div
              className="position-absolute top-100 left-0 right-0 border border-color-black overflow-hidden shadow-3"
              style={{
                ...defaultStyle,
                ...transitionStyles[state]
              }}
            >
              <div
                className="bg-white overflow-auto"
                style={{ maxHeight: "200px" }}
              >
                {menu.map((item, index) => (
                  <div
                    tabIndex="0"
                    className={`py-2 px-3 dropdown--item ${index !==
                      menu.length - 1 && "borderbottom"}`}
                    onKeyDown={e => {
                      index === menu.length - 1 &&
                        e.key === "Tab" &&
                        this.handleClick(false);
                    }}
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          )}
        </Transition>
      </div>
    );
  }
}

export default Dropdown;
