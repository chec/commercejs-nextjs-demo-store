import React, { Component } from "react";
import PropTypes from 'prop-types';
import { Collapse } from "react-collapse";
import { connect } from "react-redux";

import CaroselImages from "./CaroselImages";
import ProductDetails from "./ProductDetails";
import VariantSelector from "./VariantSelector";


const images = [
  "/images/product/1.png",
  "/images/product/2.png",
  "/images/product/3.png"
];

const detailView = `<p>
      - Slightly textured fabric with tonal geometric design and a bit of shine
    </p>`;

class ProductHero extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showShipping: false,
      showDetails: false,
      selectedSize: "500ML",
      selectedColor: "PURPLE"
    };

    this.sidebar = React.createRef();
    this.rightSection = React.createRef();
    this.rightSectionInner = React.createRef();
    this.productPage = React.createRef();
    this.imagesCrousel = React.createRef();
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
    this.animate();
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    window.requestAnimationFrame(this.animate);
    window.requestAnimationFrame(this.scrollRightSection);
  };

  animate = () => {
    var x = window.matchMedia("(min-width: 768px)");

    if (!x.matches) {
      return;
    }

    const distance =
      this.productPage.current.getBoundingClientRect().bottom -
      window.innerHeight;

    this.sidebar.current.style.position = `fixed`;
    this.rightSection.current.style.position = `fixed`;
    this.imagesCrousel.current.style.position = `fixed`;
    this.sidebar.current.style.zIndex = `2`;
    this.rightSection.current.style.zIndex = `2`;
    this.imagesCrousel.current.style.zIndex = `2`;

    if (distance < 0) {
      this.sidebar.current.style.transform = `translateY(${distance}px)`;
      this.rightSection.current.style.transform = `translateY(${distance}px)`;
      this.imagesCrousel.current.style.transform = `translateY(${distance}px)`;
    } else {
      this.sidebar.current.style.transform = `translateY(0px)`;
      this.rightSection.current.style.transform = `translateY(0px)`;
      this.imagesCrousel.current.style.transform = `translateY(0px)`;
    }
  };

  scrollRightSection = () => {
    const scrollBy =
      this.rightSectionInner.current.offsetHeight - window.innerHeight + 150;
    const scrollPos = window.scrollY;

    if (scrollBy > 0) {
      console.log("scrollPos", scrollPos);
      console.log("scrollBy", scrollBy);

      if (scrollPos < scrollBy) {
        this.rightSectionInner.current.style.transform = `translateY(-${scrollPos}px)`;
      } else if (scrollPos > scrollBy) {
        this.rightSectionInner.current.style.transform = `translateY(-${scrollBy}px)`;
      }
    }
  };

  render() {
    const {
      selectedSize,
      selectedColor,
      showShipping,
      showDetails
    } = this.state;

    const { products, categories } = this.props;
    const reg = /(<([^>]+)>)/ig;

    return (
      <div className="py-5 my-5">
        <div className="pt-4">
          {/* Sidebar */}
          <div
            ref={this.sidebar}
            className="position-fixed left-0 right-0"
            style={{ top: "7.5rem" }}
          >
            {categories.map(category => (
            <div className="custom-container">
              <div className="row">
                <div className="col-2 d-none d-lg-block position-relative">
                  <p className="font-size-title font-weight-medium mb-3">
                    {category.name}
                  </p>
                    <div className="mb-5">
                      {[
                        { count: "2" }
                      ].map(item => (
                        <div className="d-flex">
                          <p className="mb-2 position-relative cursor-pointer">
                            Products
                            <span
                              className="position-absolute font-size-tiny text-right"
                              style={{ right: "-12px", top: "-4px" }}
                            >
                              {item.count}
                            </span>
                          </p>
                        </div>
                      ))}
                    </div>
                </div>
              </div>

            </div>
            ))}
          </div>

          <div
            ref={this.imagesCrousel}
            className="left-0 right-0 d-none d-sm-block"
            style={{ top: "7.5rem" }}
          >
            <div className="custom-container">
              <div className="row">
                {/* Image Section */}
                <div className="col-12 col-sm-6 col-lg-5 offset-lg-2">
                  <CaroselImages images={images} />
                </div>
              </div>
            </div>
          </div>

          <div ref={this.productPage} className="custom-container">
            <div className="row">
              {/* Image Section */}
              <div className="col-12 col-sm-6 col-lg-5 offset-lg-2">
                <div className="d-flex">
                  <div className="ml-lg-3 mr-3 d-none d-sm-block">
                    <div className="w-48"></div>
                  </div>
                  <div className="flex-grow-1">
                    {images.map((image, index) => (
                      <img
                        key={`carosel-main-images-${index}`}
                        src={image}
                        id="caroselMainImages"
                        className="w-100 mb-3"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section - Product Details */}
          <div
            ref={this.rightSection}
            className="left-0 right-0"
            style={{ top: "7.5rem" }}
          >
            <div className="custom-container">
              <div className="row">
                <div className="col-12 col-sm-6 col-lg-5 col-xl-4 offset-sm-6 offset-lg-7 offset-xl-7">
                  <div className="position-relative">
                    <div
                      ref={this.rightSectionInner}
                      className="position-sm-absolute top-0 left-0 right-0"
                    >
                      <div className="pl-sm-5 pr-sm-3">
                        <ProductDetails
                          name={products[0].name}
                          description={products[0].description.replace(reg, "")}
                        />

                        {/* Desktop Add to cart */}
                        <div className="d-none d-sm-block">
                          <VariantSelector
                            className="mb-3"
                            // name={products.variants[0]}
                            options={["500ML", "1000ML"]}
                            selected={selectedSize}
                            toggle={value =>
                              this.setState({ selectedSize: value })
                            }
                          />
                          <div className="d-flex py-4">
                            <button className="h-56 bg-black font-color-white pl-3 pr-4 d-flex align-items-center flex-grow-1">
                              <span className="flex-grow-1 mr-3 text-center">
                                Add to cart
                              </span>
                              <span className="border-left border-color-white pl-3">
                              {products[0].price.formatted_with_symbol}
                              </span>
                            </button>
                          </div>
                        </div>

                        <div
                          onClick={() => {
                            this.setState({ showShipping: !showShipping }, () =>
                              this.scrollRightSection()
                            );
                          }}
                          className="d-flex cursor-pointesr py-3 justify-content-between font-weight-medium"
                        >
                          Shipping and returns
                          <img src="/icon/plus.svg" />
                        </div>
                        <Collapse isOpened={showShipping}>
                          <div className="pb-4 font-color-medium">
                            Arrives in 5 to 7 days, returns accepted within 30
                            days. For more information, click here.
                          </div>
                        </Collapse>
                        <div className="h-1 borderbottom border-color-black" />
                        <div
                          onClick={() => {
                            this.setState({ showDetails: !showDetails }, () => {
                              this.scrollRightSection();
                            });
                          }}
                          className="d-flex cursor-pointer py-3 justify-content-between font-weight-medium"
                        >
                          Details
                          <img src="/icon/plus.svg" />
                        </div>
                        <Collapse isOpened={showDetails}>
                          <div
                            className="pb-4 font-color-medium"
                            dangerouslySetInnerHTML={{
                              __html: detailView
                            }}
                          />
                        </Collapse>
                        <div className="h-1 borderbottom border-color-black" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

ProductHero.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object),
};

ProductHero.defaultProps = {
  products: [],
};

export default connect(state => state)(ProductHero);
