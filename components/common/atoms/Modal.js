import React, { Component } from 'react';
import { Transition } from 'react-transition-group';

/**
 * Duration for the transition
 */
const duration = 300;

/**
 * Default style for DropdownMenu
 */
const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0,
  zIndex: 1000
};

/**
 * Transition styles for DropdownMenu
 */
const transitionStyles = {
  entering: { opacity: 0 },
  entered: { opacity: 1 },
  exiting: { opacity: 0 },
  exited: { opacity: 0 }
};

export default class Modal extends Component {
  constructor(props) {
    super(props);

    this.handleEntering = this.handleEntering.bind(this);
    this.handleExiting = this.handleExiting.bind(this);
  }

  handleEntering() {
    const body = document.querySelector('body').body;
    if (body) {
      body.classList.add('modal-open');
    }
  }

  handleExiting() {
    const body = document.querySelector('body').body;
    if (body) {
      body.classList.remove('modal-open');
    }
  }

  render() {
    const { isOpen, children, onClose, maxW, className } = this.props;

    return (
      <Transition
        in={isOpen}
        timeout={duration}
        onEntering={this.handleEntering}
        onExiting={this.handleExiting}
        unmountOnExit
      >
        {state => (
          <div
            className="position-fixed d-flex align-items-center justify-content-center top-0 left-0 right-0 bottom-0"
            style={{
              ...defaultStyle,
              ...transitionStyles[state]
            }}
          >
            <div
              className="position-fixed top-0 left-0 right-0 bottom-0 bg-black opacity-56 modal--backlayer cursor-pointer"
              style={{ zIndex: -1 }}
              onClick={onClose}
            />
            <div
              role="dialog"
              tabIndex="-1"
              className={`bg-white my-2 mx-2 mx-sm-auto modal--content overflow-auto ${className}`}
              style={{ width: maxW, maxHeight: 'calc(100vh - 1rem)' }}
            >
              {children}
            </div>
          </div>
        )}
      </Transition>
    );
  }
}

Modal.defaultProps = {
  maxW: '480px',
  className: 'p-4 p-md-5'
};
