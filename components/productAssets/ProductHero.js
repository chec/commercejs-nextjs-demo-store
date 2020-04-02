import React, { Component } from "react";
import CaroselImages from "./CaroselImages";
import AboutProduct from "./AboutProduct";
import VariantSelector from "./VariantSelector";
import { Collapse } from "react-collapse";

const images = [
  "/images/product/1.png",
  "/images/product/2.png",
  "/images/product/3.png"
];

const description = `<p><!--(figmeta)eyJmaWxlS2V5IjoiVndMUnVpaG1rbjhKM0pudEd6Z3FXSyIsInBhc3RlSUQiOjcwMjk3MDE3MiwiZGF0YVR5cGUiOiJzY2VuZSJ9Cg==(/figmeta)--><!--(figma)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(/figma)--><span>What it is: A shortcut to the way your skin looks after a full skincare routine&mdash;dewy, glowing, cared-for&mdash;in one long-wearing product<br /><br />✔️ Free shipping from &euro;150<br />✔️ Free returns up to 30 days</span></p>`;

const detailView = `<p>
      - Slightly textured fabric with tonal geometric design and a bit of shine
      - Two way zip - Side zip vents - Removable hood with drawstring: 2 front
      snaps to cover mouth/chin for warmth - Seamed epaulet detail on shoulder -
      Quilted back for flattering shape - Drawstring at inner waist to
      cinch/provide shape - 2 side zip pockets with fleece lining to keep hands
      warm - Interior zip pocket at wearer's left chest - Internal backpack
      straps for easy carrying/storage when not being worn - Ribbed hidden
      sleeve cuffs for extra warmth - Loop at back neck for easy hanging - Hits
      at mid-thigh/above knee
    </p>`;

export default class ProductHero extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isSaved: false,
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
      isSaved,
      showShipping,
      showDetails
    } = this.state;

    return (
      <div className="py-5 my-5">
        <div className="pt-4">
          {/* Sidebar */}
          <div
            ref={this.sidebar}
            className="left-0 right-0"
            style={{ top: "7.5rem" }}
          >
            <div className="custom-container">
              <div className="row">
                <div className="col-2 d-none d-lg-block">
                  <div className="position-relative">
                    <div className="position-absolute top-0 left-0 right-0">
                      <div className="mb-5">
                        <p className="font-size-title font-weight-medium mb-3">
                          Skin Products
                        </p>
                        {[
                          { name: "Women", count: "2" }
                        ].map(item => (
                          <div className="d-flex">
                            <p className="mb-2 position-relative cursor-pointer">
                              {item.name}
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
                      <p className="font-size-title font-weight-medium mb-3">
                        Hair Products
                      </p>
                      {[
                        { name: "Women", count: "2" }
                      ].map(item => (
                        <div className="d-flex">
                          <p className="mb-2 position-relative cursor-pointer">
                            {item.name}
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
            </div>
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
              <div className="col-12 d-block d-sm-none">
                <AboutProduct description={description} />
              </div>
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

          {/* Right Section */}
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
                        <AboutProduct
                          className="d-none d-sm-block"
                          description={description}
                        />

                        {/* Desktop Add to cart */}
                        <div className="d-none d-sm-block">
                          <VariantSelector
                            className="mb-3"
                            heading="SIZE:"
                            options={["500ML", "1000ML"]}
                            selected={selectedSize}
                            toggle={value =>
                              this.setState({ selectedSize: value })
                            }
                          />
                          <VariantSelector
                            className="mb-4"
                            heading="COLOR:"
                            options={["PURPLE", "BLUE", "RED"]}
                            selected={selectedColor}
                            toggle={value =>
                              this.setState({ selectedColor: value })
                            }
                          />
                          <div className="d-flex py-4">
                            <button className="h-56 bg-black font-color-white pl-3 pr-4 d-flex align-items-center flex-grow-1">
                              <span className="flex-grow-1 mr-3 text-center">
                                Add to cart
                              </span>
                              <span className="border-left border-color-white pl-3">
                                $32.00
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
