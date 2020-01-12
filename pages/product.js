import React from "react";
import Head from "next/head";
import Root from "../components/common/Root";
import ProductHero from "../components/product/ProductHero";
import ClientReview from "../components/product/ClientReview";
import SuggestedProducts from "../components/product/SuggestedProducts";
import ExploreBanner from "../components/product/ExploreBanner";
import Footer from "../components/common/Footer";

const Home = () => (
  <Root>
    {/* <Head>
      <title>Home</title>
      <link rel="icon" href="/favicon.ico" />
    </Head> */}
    <ProductHero />
    <ClientReview />
    <SuggestedProducts />
    <ExploreBanner />
    <Footer />
  </Root>
);

export default Home;
