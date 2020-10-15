import React, { Component } from 'react';
import { animateScroll as scroll } from 'react-scroll';
import { connect } from 'react-redux';

class CarouselImages extends Component {
  constructor(props) {
    super(props);

    this.carouselImages = [];

    this.handleScroll = this.handleScroll.bind(this);
    this.animate = this.animate.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    window.requestAnimationFrame(this.animate);
  }

  animate() {
    const mainImages = document.querySelectorAll('.carousel-main-images');

    const x = window.matchMedia('(min-width: 768px)');
    if (!x.matches) {
      return;
    }

    this.carouselImages.forEach(image => {
      image && (image.style.borderColor = '#ffffff');
    });

    for (let index = 0; index <= mainImages.length - 1; index++) {
      // If last image is reached
      if (
        mainImages[mainImages.length - 1] &&
        mainImages[mainImages.length - 1].getBoundingClientRect().top < 200
      ) {
        this.carouselImages[mainImages.length - 1] &&
          (this.carouselImages[mainImages.length - 1].style.borderColor =
            '#000000');
        break;
      }

      // Ignore the prior images
      if (
        mainImages[index] &&
        mainImages[index].getBoundingClientRect().top < 175
      ) {
        continue;
      }

      // Darken the last image
      this.carouselImages[index - 1] &&
        (this.carouselImages[index - 1].style.borderColor = '#000000');
      break;
    }
  }

  onClickImage(index) {
    const mainImages = document.querySelectorAll('.carousel-main-images');

    if (mainImages) {
      const scrollDestination = mainImages[index].offsetTop - 95;
      scroll.scrollTo(scrollDestination, {
        smooth: 'easeInOutQuint'
      });
    }
  }

  render() {
    const { images } = this.props;

    return (
      <div className="d-flex">
        <div className="ml-lg-3 mr-3">
          {Array.isArray(images) && (images.map((image, index) => (
            <div
              ref={image => this.carouselImages.push(image)}
              key={`carousel-side-images-${index}`}
              data-key={`carousel-side-images-${index}`}
              className="h-56 w-48 mb-3 cursor-pointer"
              onClick={this.onClickImage.bind(this, index)}
              style={{
                background: `url("${image}") center center/cover`,
                border:
                  index === 0 ? '2px solid #000000' : '2px solid #FFFFFF'
              }}
            />
          )))}
        </div>
      </div>
    );
  }
}

export default connect(state => state)(CarouselImages);
