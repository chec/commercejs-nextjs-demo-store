import React, { Component } from "react";
import Link from "next/link";
import Head from "next/head";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ProductRow from '../products/ProductRow'

class Collections extends Component {
  constructor(props) {
    super(props);
    this.sidebar = React.createRef();
    this.collectionPage = React.createRef();
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    window.requestAnimationFrame(this.animate);
  };

  animate = () => {
    const distance =
      this.collectionPage.current.getBoundingClientRect().bottom -
      window.innerHeight;

    if (distance < 0) {
      this.sidebar.current.style.transform = `translateY(${distance}px)`;
    } else {
      this.sidebar.current.style.transform = `translateY(0px)`;
    }
  };

  /**
  * Filter products by category
  */
   filterProductsByCat = (catSlug) => {
    const { categories, products } = this.props;
    const cat = categories.find(category => category.slug === catSlug);
    if (!cat) {
      return [];
    }
    return products.filter(product => product.category_id === cat.id);
  };

  render() {
    const { categories, products } = this.props;

    return (
      <div className="py-5 my-5">
        <Head>
          <title>Collections</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className="py-4">

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
                        <div className="d-flex">
                          <p className="mb-2 position-relative cursor-pointer">
                            Products
                            <span
                              className="position-absolute font-size-tiny text-right"
                              style={{ right: "-12px", top: "-4px" }}
                            >
                              {category.count}
                            </span>
                          </p>
                        </div>
                    </div>
                </div>
              </div>

            </div>
            ))}
          </div>

          {/* Main Content */}
          <div ref={this.collectionPage} className="custom-container">
            <div className="row">
              <div className="col-12 col-lg-10 offset-lg-2">

                {/* Facial Products */}
                <p className="font-size-title font-weight-medium mb-4">
                  Facial Products
               </p>
                <div className="row mb-5 filtered-products">
                  {this.filterProductsByCat("facial-products").map(item => (
                    <div className="col-6 col-sm-4 col-md-3">
                     <Link href={item.link}>
                        <a className="mb-5 d-block font-color-black cursor-pointer">
                          <div
                            className="mb-3"
                            style={{
                              paddingBottom: "125%",
                              background: `url("${item.media.source}") center center/cover`
                            }}
                          />
                          <p className="font-size-subheader mb-2 font-weight-medium">
                            {item.name}
                          </p>
                          <p className="mb-2 font-color-medium">
                            {item.description.replace(reg, "")}
                          </p>
                          <p className="font-size-subheader font-weight-medium pb-2 borderbottom border-color-black">
                            {item.price.formatted_with_symbol}
                          </p>
                        </a>
                      </Link>
                    </div>
                  ))}
                </div>

                {/* Body Products */}
                <p className="font-size-title font-weight-medium mb-4">
                  Body Products
               </p>
               <div className="row mb-5 filtered-products-2">
                  {this.filterProductsByCat('facial-products').map(item => (
                    <div className="col-6 col-sm-4 col-md-3">
                      <Link href={item.link}>
                        <a className="mb-5 d-block font-color-black cursor-pointer">
                          <div
                            className="mb-3"
                            style={{
                              paddingBottom: "125%",
                              background: `url("${item.media.source}") center center/cover`
                            }}
                          />
                          <p className="font-size-subheader mb-2 font-weight-medium">
                            {item.name}
                          </p>
                          <p className="mb-2 font-color-medium">
                            {item.description.replace(reg, "")}
                          </p>
                          <p className="font-size-subheader font-weight-medium pb-2 borderbottom border-color-black">
                            {item.price.formatted_with_symbol}
                          </p>
                        </a>
                      </Link>
                    </div>
                  ))}
                </div>

                {/* Hair Products */}
                <p className="font-size-title font-weight-medium mb-4">
                  Hair Products
               </p>
               <div className="row mb-5 filtered-products-3">
                  {this.filterProductsByCat("facial-products").map(item => (
                    <div className="col-6 col-sm-4 col-md-3">
                      <Link href={item.link}>
                        <a className="mb-5 d-block font-color-black cursor-pointer">
                          <div
                            className="mb-3"
                            style={{
                              paddingBottom: "125%",
                              background: `url("${item.media.source}") center center/cover`
                            }}
                          />
                          <p className="font-size-subheader mb-2 font-weight-medium">
                            {item.name}
                          </p>
                          <p className="mb-2 font-color-medium">
                            {item.description.replace(reg, "")}
                          </p>
                          <p className="font-size-subheader font-weight-medium pb-2 borderbottom border-color-black">
                            {item.price.formatted_with_symbol}
                          </p>
                        </a>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default connect(state => state)(Collections);
