import React from "react";
import Head from "next/head";
import Root from "../components/common/Root";
import ExploreBanner from "../components/productAssets/ExploreBanner";
import Collections from "../components/collections/Collections";
import Footer from "../components/common/Footer";

const Home = () => (
  <Root>
    {/* <Head>
      <title>Home</title>
      <link rel="icon" href="/favicon.ico" />
    </Head> */}
    <Collections />
    <ExploreBanner />
    <Footer />
  </Root>
);

export default Home;
