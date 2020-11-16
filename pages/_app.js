/* global process */
import App from 'next/app';
import React from 'react';
import '../style/scss/style.scss';
import { wrapper } from '../store';
import commerce from '../lib/commerce';
import collections from '../lib/collections';
import { loadStripe } from '@stripe/stripe-js';

class MyApp extends App {
  constructor(props) {
    super(props);

    // If using Stripe, initialise it here. This allows Stripe to track behaviour
    // as much as possible in order to determine fraud risk.
    this.stripePromise = null;
    if (process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY) { // has API key
        this.stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);
    }
  }

  stripePromise = null;

  static async getInitialProps({ Component, ctx }) {
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

    // Allows store to be updated via the dispatch action
    ctx.store.dispatch({ type: 'STORE_CATEGORIES', payload: categories });
    ctx.store.dispatch({ type: 'STORE_PRODUCTS', payload: products });

    return {
      pageProps: {
        // Call page-level getInitialProps
        ...(Component.getInitialProps ? await Component.getInitialProps(ctx) : {}),
      },
    };
  }

  render() {
    const { Component, pageProps } = this.props;

    return <Component {...pageProps} stripe={this.stripePromise} />;
  }
}

export default wrapper.withRedux(MyApp);
