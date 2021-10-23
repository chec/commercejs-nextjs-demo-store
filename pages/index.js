import React from 'react';
import Head from 'next/head';
import Root from '@/components/common/Root';
import Footer from '@/components/common/Footer';
import SocialMedia from '@/components/common/SocialMedia';
import ExploreBanner from '@/components/product/ExploreBanner';
import HeroSection from '@/components/home/HeroSection';
import HomeBanner from '@/components/home/HomeBanner';
import CategoriesBanner from '@/components/home/CategoriesBanner';
import ProductsBanner from '@/components/home/ProductsBanner';

const Home = () => (
  <Root transparentHeader>
    <Head>
      <title>Home | commerce</title>
    </Head>

    <HeroSection />
    <HomeBanner />
    <CategoriesBanner />
    <ProductsBanner />
    <ExploreBanner />
    <SocialMedia />
    <Footer />
  </Root>
);

export default Home;
