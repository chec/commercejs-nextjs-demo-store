import { useEffect, useRef } from 'react';
import { animateScroll as scroll } from 'react-scroll';
import { connect } from 'react-redux';

const CarouselImages = ({ images }) => {
  const carouselImages = useRef([]);
  const { current: carouselImagesRef } = carouselImages;

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return function cleanup() {
      window.removeEventListener('scroll', handleScroll);
    }
  }, [])


  /**
   * @description - This function is used to handle the animation of the carousel images
   */
  const handleScroll = () => {
    window.requestAnimationFrame(handleAnimate);
  }

  /**
   * @description - This function is used to animate the carousel images
   */
  const handleAnimate = () => {
    const mainImages = document.querySelectorAll('.carousel-main-images');

    const screenWidth = window.matchMedia('(min-width: 768px)');
    if (!screenWidth.matches) {
      return;
    }

    // Aside carousel images
    carouselImagesRef.forEach((image) => {
      image && (image.style.borderColor = '#ffffff');
    })

    for (let index = 0; index <= mainImages.length - 1; index++) {
      // If last image is reached
      if (
        mainImages[mainImages.length - 1]
        && mainImages[mainImages.length - 1].getBoundingClientRect().top < 200
      ) {
        carouselImagesRef[mainImages.length - 1]
          && (carouselImagesRef[mainImages.length - 1].style.borderColor = '#000000');
        break;
      }

      // Ignore the prior images
      if (
        mainImages[index]
        && mainImages[index].getBoundingClientRect().top < 175
      ) {
        continue;
      }

      // Darken the last image
      carouselImagesRef[index - 1]
        && (carouselImagesRef[index - 1].style.borderColor = '#000000');
      break;
    }
  }

  const handleImageClick = (index) => {
    const mainImages = document.querySelectorAll('.carousel-main-images');
    console.log('Main images', mainImages);

    if (mainImages.length > 0) {
      const scrollDestination = mainImages[index].offsetTop - 95;
      scroll.scrollTo(scrollDestination, {
        smooth: 'easeInOutQuint',
      });
    }
  }

  return (
    <div className="d-flex">
      <div className="ml-lg-3 mr-3">
        {Array.isArray(images) && (images.map((image, index) => (
          <div
            ref={image => carouselImagesRef.push(image)}
            key={`carousel-side-images-${index}`}
            data-key={`carousel-side-images-${index}`}
            className="h-56 w-48 mb-3 cursor-pointer"
            onClick={handleImageClick(index)}
            style={{
              background: `url("${image}") center center/cover`,
              border:
                index === 0 ? '2px solid #000000' : '2px solid #FFFFFF',
            }}
          />
        )))}
      </div>
    </div>
  );
}

export default connect((state) => state)(CarouselImages);
