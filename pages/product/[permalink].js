import React, { Component } from 'react';
import commerce from '../../lib/commerce';
import { Collapse } from 'react-collapse';
import { connect } from 'react-redux';
import Head from 'next/head';
import Root from '../../components/common/Root';
import CarouselImages from '../../components/productAssets/CarouselImages';
import ProductDetail from '../../components/productAssets/ProductDetail';
import ClientReview from '../../components/productAssets/ClientReview';
import SuggestedProducts from '../../components/productAssets/SuggestedProducts';
import ExploreBanner from '../../components/productAssets/ExploreBanner';
import Footer from '../../components/common/Footer';
import SocialMedia from '../../components/common/SocialMedia';
import CategoryList from '../../components/products/CategoryList';
import reduceProductImages from '../../lib/reduceProductImages';

const detailView = `<p>
  Slightly textured fabric with tonal geometric design and a bit of shine
</p>`;

class Product extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showShipping: false,
      showDetails: false,
    };

    this.toggleShipping = this.toggleShipping.bind(this);
    this.toggleDetails = this.toggleDetails.bind(this);
  }

  toggleShipping() {
    const { showShipping } = this.state;
    this.setState({ showShipping: !showShipping });
  }

  toggleDetails() {
    const { showDetails } = this.state;
    this.setState({ showDetails: !showDetails });
  }

  render() {
    const { showShipping,showDetails } = this.state;
    const { product } = this.props;

    const images = reduceProductImages(product);


    return (
      <Root>
        <Head>
          <title>{ product.name } | commerce</title>
        </Head>

        <div className="py-5 my-5">
        <div className="main-product-content">
          {/* Sidebar */}
          <div className="product-sidebar">
            <CategoryList
              className="product-left-aside__category-list"
              current={ product.categories[0] && product.categories[0].id }
            />
            <CarouselImages images={images} />
          </div>

          <div className="product-images">
            <div className="flex-grow-1">
              {Array.isArray(images) ? (images.map((image, i) => (
                <img
                  key={i}
                  src={image}
                  className="w-100 mb-3 carousel-main-images"
                />
              ))) : (
                ''
              )}
            </div>
          </div>

          {/* Right Section - Product Details */}
          <div className="product-detail">
            <ProductDetail product={product} />

            <div
              onClick={this.toggleShipping}
              className="d-flex cursor-pointer py-3 justify-content-between font-weight-medium"
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
            <div className="h-1 border-bottom border-color-black" />
            <div
              onClick={this.toggleDetails}
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

      <ClientReview />
      <SuggestedProducts />
      <ExploreBanner />
      <SocialMedia />
      <Footer />
    </Root>
    );
  }
}

/**
 * Use getStaticPaths() to pre-render PDP (product display page) according to page path
 */
export async function getStaticPaths() {
  const { data: products } = await commerce.products.list();

  // Get the paths we want to pre-render based on product
  const paths = products.map(product => ({
    params: {
      permalink: product.permalink,
    },
  }));

  // We'll pre-render only these paths at build time.
  return {
    paths,
    // { fallback: false } means other routes should 404.
    fallback: false,
  }
}

// This also gets called at build time, and fetches the product to view
export async function getStaticProps({ params: { permalink } }) {
  // params contains the product `permalink`.
  // If the route is like /product/shampoo-conditioner, then params.permalink is shampoo-conditioner
  const product = await commerce.products.retrieve(permalink, { type: 'permalink '});

  // Pass product data to the page via props
  return {
    props: {
      product,
    },
  };
}

export default connect(state => state)(Product);
