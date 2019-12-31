import React from "react";
import Head from "next/head";
import Link from "next/link";

const Home = () => (
  <div>
    <Head>
      <title>Home</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <div className="container p-5">
      <h1 className="title mb-5">Welcome to commerce.js!</h1>

      <div className="row">
        <div className="col-12 col-md-6">
          <Link href="/checkout">
            <div className="card">
              <h3>Go to 1 step checkout &rarr;</h3>
            </div>
          </Link>
        </div>
        <div className="col-12 col-md-6">
          <Link href="/checkout/1">
            <div className="card">
              <h3>Go to 2 step checkout &rarr;</h3>
            </div>
          </Link>
        </div>
      </div>
    </div>

    <style jsx>{`
      .card {
        cursor: pointer;
        padding: 18px;
        display: block;
        width: 100%;
        text-align: left;
        text-decoration: none;
        color: #434343;
        border: 1px solid #9b9b9b;
      }
      .card:hover {
        border-color: #067df7;
      }
      .card h3 {
        margin: 0;
        color: #067df7;
        font-size: 18px;
      }
      .card p {
        margin: 0;
        padding: 12px 0 0;
        font-size: 13px;
        color: #333;
      }
    `}</style>
  </div>
);

export default Home;
