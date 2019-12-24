import React from "react";
import Head from "next/head";
import Header from "../components/common/Header";

const Home = () => (
  <div>
    <Head>
      <title>Home</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Header />
    {/* <div className="container">
      <div className="d-flex">
        <div className="text-decoration-underline">Cart</div>
        <img src="/icon/arrow-right.svg" className="w-16 mx-1" />
        <div>Checkout</div>
      </div>
    </div> */}
  </div>
);

export default Home;
