import React, { Component } from "react";
import PropTypes from 'prop-types';
import Link from "next/link";
import { connect } from "react-redux";

class CategoryBanner extends Component {
  constructor(props) {
    super(props);

    this.collectionBannerContainer = React.createRef();
    this.categoryStat = [];
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
    this.handleScroll();
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    // window.requestAnimationFrame(this.animate);
  };

  animate = () => {
    const dimentions = this.collectionBannerContainer.current.getBoundingClientRect();
    var x = window.matchMedia("(min-width: 768px)");

    if (x.matches) {
      if (dimentions.top - window.innerHeight < 0 && dimentions.bottom > 0) {
        const scrolledRatio =
          (window.innerHeight - dimentions.top) / window.innerHeight;

        this.categoryStat.forEach((image, index) => {
          image.style.transform = `translateY(-${scrolledRatio *
            collections[index].translateRatio}px)`;
        });
      }
    }
  };

  render() {
    const { categories } = this.props;

    return (
      <div className="bg-brand300 py-5 collection-banner">
        <div
          ref={this.collectionBannerContainer}
          className="custom-container py-5"
        >
          <p className="font-size-display2 my-3 py-5 text-center font-family-secondary">
            Categories
          </p>

          <div className="row">
            {categories.map((item, index) => (
              <div
              key={`category-item-${index}`}
              //ref={item => this.categoryStat.push(item)}
              className="col-12 col-md-4 collection-item mb-5"
            >
                <Link href={item.link}>
                <a className="align-items-center font-color-black flex-column cursor-pointer mb-5">
                <div>

                    <div
                      className="mb-4 w-100 collection-item-image"
                      style={{
                        background: `url("${item.image}") center center/cover`
                      }}
                    />
                    <p className="mb-2 font-size-heading text-center" key={item.id}>
                    {item.name}
                    </p>
                    <p className="text-center">{item.count} products</p>
                    </div>
                  </a>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

CategoryBanner.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.object),
};

CategoryBanner.defaultProps = {
  categories: [],
};

export default connect(state => state)(CategoryBanner);
