import React from "react";
import { useRouter } from 'next/router';
import commerce from "../lib/commerce";

import Head from "next/head";
import Root from "../../../components/common/Root";
import ProductHero from "../../../components/productAssets/ProductHero";
import ClientReview from "../../../components/productAssets/ClientReview";
import SuggestedProducts from "../../../components/productAssets/SuggestedProducts";
import ExploreBanner from "../../../components/productAssets/ExploreBanner";
import Footer from "../../../components/common/Footer";



function Product({product}) {
  const router = useRouter();
  const { permalink } = router.query

  return (
    <Root>
      <Head>
        <title>Product { permalink }</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ProductHero />
      <ClientReview />
      <SuggestedProducts />
      <ExploreBanner />
      <Footer />
    </Root>
  );
}

// Use getStaticPaths() to pre-render PDP according to page path
export async function getStaticPaths() {

  const res = await commerce.products.list();
  const products = await res.json()

  // Get the paths we want to pre-render based on product
  const paths = products.map(product => `/product/${product.permalink}`)

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return {
    paths,
    fallback: false
  }
}

// This also gets called at build time
export async function getStaticProps({ params: { permalink } }) {
  // params contains the product `permalink`.
  // If the route is like /product/shampoo-conditioner, then params.permalink is shampoo-conditioner
  const res = await getProductByPerm(permalink);
  const product = await res.json()

  // Pass post data to the page via props
  return {
    props: {
      product
    }
  }
}

export default Product;
