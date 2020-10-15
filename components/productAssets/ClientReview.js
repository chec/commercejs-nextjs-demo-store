import React, { Component } from 'react';
import ReviewList from './ReviewList';
import Modal from '../common/atoms/Modal';

const reviews = [
  {
    stars: '5',
    title: 'Perfect',
    description: 'Great fit and feel. They elevate lounging to the next level!',
    reviewBy: 'Heidi C.',
    date: 'December, 2019'
  },
  {
    stars: '3.5',
    title: 'So comfortable!',
    description:
      'I sized up just in case and kind of wished I hadn’t. Very comfortable and I live in them exclusively during the weekend.',
    reviewBy: 'Heidi C.',
    date: 'December, 2019'
  },
  {
    stars: '4',
    title: 'Comfy but thin',
    description:
      'Comfortable but kinda thin for a pant. I typically wear a 32/33 pant and had to size up to XL for these to not fit like a legging. Have been wearing pretty solid for a month of so and there\'s some pilling, but not a lot. Good price for OK product.',
    reviewBy: 'Heidi C.',
    date: 'December, 2019'
  },
  {
    stars: '5',
    title: 'So comfortable!',
    description:
      'I sized up just in case and kind of wished I hadn’t. Very comfortable and I live in them exclusively during the weekend.',
    reviewBy: 'Heidi C.',
    date: 'December, 2019'
  }
];

export default class ClientReview extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false
    };

    this.handleClose = this.handleClose.bind(this);
    this.handleOpen = this.handleOpen.bind(this);
  }

  /**
   * Close the review modal
   */
  handleClose() {
    this.setState({ open: false });
  }

  /**
   * Show the review modal
   */
  handleOpen() {
    this.setState({ open: true });
  }

  render() {
    const { open } = this.state;

    return (
      <div id="reviews" className="custom-container pb-5">
        <Modal
          isOpen={open}
          onClose={this.handleClose}
          maxW="1000px"
        >
          <div className="d-flex justify-content-between align-items-center pb-3">
            <p className="font-size-subheader font-weight-medium">
              All reviews
            </p>
            <img
              tabIndex="0"
              src="/icon/cross.svg"
              className="w-24 cursor-pointer"
              onClick={this.handleClose}
              alt="Cross icon"
            />
          </div>
          <ReviewList reviews={reviews} />
        </Modal>
        <div className="row">
          <div className="col-12 col-lg-10 offset-lg-1">
            <div className="d-flex justify-content-between flex-column flex-sm-row align-items-sm-center mb-3">
              <p className="font-size-title font-weight-medium mb-2 mb-sm-0">
                4.3 stars from 10 reviews
              </p>
            </div>
            <ReviewList reviews={reviews}>
              <button
                type="button"
                onClick={this.handleOpen}
                className="text-center bg-transparent w-100 h-72 px-3 text-decoration-underline"
              >
                View all reviews
              </button>
            </ReviewList>
          </div>
        </div>
      </div>
    );
  }
}
