import React from "react";
import Head from "next/head";
import Root from "../../components/common/Root";
import ProductHero from "../../components/productAssets/ProductHero";
import ClientReview from "../../components/productAssets/ClientReview";
import SuggestedProducts from "../../components/productAssets/SuggestedProducts";
import ExploreBanner from "../../components/productAssets/ExploreBanner";
import Footer from "../../components/common/Footer";
import { useRouter } from 'next/router';
import commerce from '../../lib/commerce';

export default function Product() {
  const router = useRouter();

  return (
    <Root>
      <Head>
        <title>{router.query.permalink}</title>
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