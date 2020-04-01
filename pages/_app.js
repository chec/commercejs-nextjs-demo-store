import App from "next/app";
import React from "react";
import { wrapper } from "../store";
import "../style/scss/style.scss";
import commerce from "../lib/commerce";
import collections from "../lib/collections";

class MyApp extends App {
  static getInitialProps = wrapper.getInitialAppProps(async ({ Component, ctx }) => {
    // Fetch data on load
    // Fetch categories
    const categoriesResponse = await commerce.categories.list();

    // Match static data record to API data to find category name
    const categories = categoriesResponse.data.map(item => ({
      ...collections.find(data => data.slug === item.slug),
      ...item,
    }));

    // Fetch products
    const { data: products } = await commerce.products.list();

    ctx.store.dispatch({ type: 'STORE_CATEGORIES', payload: categories });
    ctx.store.dispatch({ type: 'STORE_PRODUCTS', payload: products });

    return {
      pageProps: {
        // Call page-level getInitialProps
        ...(Component.getInitialProps ? await Component.getInitialProps(ctx) : {}),
      },
    };
  });

  render() {
    const { Component, pageProps } = this.props;
    return <Component {...pageProps} />;
  }
}

export default wrapper.withRedux(MyApp);
