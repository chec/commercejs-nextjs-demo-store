import React, { Component } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import { connect } from 'react-redux';
import ProductCard from '../products/ProductCard';

class Collections extends Component {
  constructor(props) {
    super(props);

    this.sidebar = React.createRef();
    this.page = React.createRef();

    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    const animate = () => {
      if (!this.page.current) {
        return;
      }

      const distance =
        this.page.current.getBoundingClientRect().bottom -
        window.innerHeight;

      if (distance < 0) {
        this.sidebar.current.style.transform = `translateY(${distance}px)`;
      } else {
        this.sidebar.current.style.transform = 'translateY(0px)';
      }
    };

    window.requestAnimationFrame(animate);
  }

  renderSidebar() {
    const { categories } = this.props;

    return (
      <>
        {categories.map(category => (
          <div key={category.id} className="custom-container">
            <div className="row">
              <div className="col-2 d-none d-lg-block position-relative">
                <p className="font-size-title font-weight-medium mb-3">
                  {category.name}
                </p>
                <Link href={`/collection#${category.slug}`}>
                  <a className="mb-5 font-color-black">
                    <div className="d-flex">
                      <p className="mb-2 position-relative cursor-pointer">
                        Products
                        <span
                          className="position-absolute font-size-tiny text-right"
                          style={{ right: '-12px', top: '-4px' }}
                        >
                          {category.products}
                        </span>
                      </p>
                    </div>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </>
    );
  }

  /**
   * Filter products by category
   */
  filterProductsByCat(catSlug) {
    const { categories, products } = this.props;

    const cat = categories.find(category => category.slug === catSlug);
    if (!cat) {
      return [];
    }
    return products.filter(product => product.categories.find(productCategory => productCategory.id === cat.id));
  }

  /**
   * Render collections based on categories available in data
   */
  renderCollection() {
    const { categories } = this.props;
    const reg = /(<([^>]+)>)/ig;

    return (
      <div className="collection">
        {categories.map(category => (
          <div key={category.id}>
              <p className="font-size-title font-weight-medium mb-4" id={category.slug}>
                {category.name}
              </p>
              <div className="row mb-5 collection-1">
                { this.filterProductsByCat(category.slug).map(product => (
                  <div key={product.id} className="col-6 col-sm-4 col-md-3">
                    <ProductCard
                      permalink={product.permalink}
                      image={product.media.source}
                      name={product.name}
                      price={product.price.formatted_with_symbol}
                      description={product.description && product.description.replace(reg, '')}
                      soldOut={product.is.sold_out}
                    />
                  </div>
                ))}
              </div>
          </div>
        ))}
      </div>
    )
  }

  render() {
    return (
      <div className="py-5 my-5">
        <Head>
          <title>Collections</title>
        </Head>
        <div className="py-4">
          {/* Sidebar */}
          <div
            ref={this.sidebar}
            className="position-fixed left-0 right-0"
            style={{ top: '7.5rem' }}
          >
            { this.renderSidebar() }
          </div>

          {/* Main Content */}
          <div ref={this.page} className="custom-container">
            <div className="row">
              <div className="col-12 col-lg-10 offset-lg-2">
                { this.renderCollection() }
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(state => state)(Collections);

