import React from 'react';
import Head from 'next/head';
import Root from '@/components/common/Root';
import ExploreBanner from '@/components/product/ExploreBanner';
import Categories from '@/components/categories/Categories';
import SocialMedia from '@/components/common/SocialMedia';
import Footer from '@/components/common/Footer';

const Home = () => (
  <Root>
    <Head>
      <title>Collection</title>
    </Head>
    <Categories />
    <ExploreBanner />
    <SocialMedia />
    <Footer />
  </Root>
);

export default Home;
