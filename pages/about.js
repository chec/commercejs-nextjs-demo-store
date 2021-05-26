import React from 'react';
import Head from 'next/head';
import Root from '../components/common/Root';
import Footer from '../components/common/Footer';

const About = () => (
  <Root>
    <Head>
      <title>About | commerce</title>
    </Head>
    <div className="about-container">
      {/* Row */}
      <div className="row mt-5 pt-5 about-hero">
        <div className="col-12 col-md-10 col-lg-6 offset-md-1 offset-lg-0 row-content">
            <div className="h-100 d-flex flex-column py-5 px-4 px-sm-5 justify-content-center">
              <h2 className="font-size-header mb-4">
                Commerce.js Demo Store
              </h2>
              <h4 className="font-size-subheader mb-4">
                This is an open source storefront built using Chec’s headless architecture and the Commerce.js SDK. Commerce.js is a smarter, more efficient way to build eCommerce projects, and we hope you can see that as you explore the world custom eCommerce. Please build on top of, or pick apart this project for your own use. Everything in this project, from the storefront, to the cart, checkout and receipt, is 100% customizable. To build more custom eCommerce projects, using any frontend framework or platform, head over to <a href="https://commercejs.com/" target="_blank" className="cjs-link" rel="noopener noreferrer">commercejs.com</a>.
              </h4>
              <div className="about-cjs mt-3 d-flex flex-row">
                <a className="px-4 py-3 font-color-white about-doc" href="https://commercejs.com/docs/" target="_blank">
                  Documentation
                </a>
                <a className="px-4 py-3 about-dev" href="https://commercejs.com/docs/community/" target="_blank">
                  Guides from the community
                </a>
              </div>
            </div>
          </div>

        <div className="col-12 col-lg-6">
          <div className="about-image h-100">
            <div className="d-flex align-items-center justify-content-center h-100">
              <img src="/cjs-illustration.svg" alt="Commerce.js illustration"/>
            </div>
          </div>
        </div>
      </div>

      {/* Row 2 */}
      <div className="row">
        <div className="col-12 col-lg-6">
          <div className="about-image h-100">
            <div className="d-flex align-items-center justify-content-center h-100">
              <img src="/netlify-illustration.svg" alt="Netlify illustration"/>
            </div>
          </div>
        </div>

        <div className="col-12 col-md-10 col-lg-6 offset-md-1 offset-lg-0 row-content">
          <div className="h-100 d-flex flex-column justify-content-center py-5 px-4 px-sm-5">
            <h3 className="font-size-header mb-4">
              Deploy to Netlify
            </h3>
            <h4 className="font-size-subheader mb-4">
              If you would like to deploy this project live today, click the button below and watch the magic happen!
            </h4>
            <div className="mt-3">
              <a className="px-4 py-3 flex-grow-1 font-color-white about-net" href="https://app.netlify.com/start/deploy?repository=https://github.com/chec/commercejs-nextjs-demo-store" target="_blank">
                Deploy to Netlify
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Row 3 */}
      <div className="row">
        <div className="col-12 col-md-10 col-lg-6 offset-md-1 offset-lg-0 row-content">
          <div className="h-100 d-flex flex-column justify-content-center py-5 px-4 px-sm-5">
            <h3 className="font-size-header mb-4">
              Clone in GitHub
            </h3>
            <h4 className="font-size-subheader mb-4">
            If you would like to clone this project and do a manual setup, go to the repository below!
            </h4>
            <div className="mt-3">
              <a className="px-4 py-3 flex-grow-1 font-color-white about-gb" href="https://github.com/chec/commercejs-nextjs-demo-store" target="_blank">
                Clone in GitHub
              </a>
            </div>
          </div>
        </div>

        <div className="col-12 col-lg-6">
          <div className="about-image h-100">
            <div className="d-flex align-items-center justify-content-center h-100">
              <img src="/github-illustration.svg" alt="GitHub illustration"/>
            </div>
          </div>
        </div>
      </div>

      {/* Row 4 */}
      <div className="row">
        <div className="col-12 col-lg-6">
          <div className="about-image h-100">
            <div className="d-flex align-items-center justify-content-center h-100">
              <img src="/blog-illustration.svg" alt="Commerce.js blog illustration"/>
            </div>
          </div>
        </div>

        <div className="col-12 col-md-10 col-lg-6 offset-md-1 offset-lg-0 row-content">
          <div className="h-100 d-flex flex-column py-5 px-4 px-sm-5">
            <h3 className="font-size-header mb-4">
              Technical Blog
            </h3>
            <h4 className="font-size-subheader mb-4">
              Read the full technical tutorial here if you want to get into the nitty gritty!
            </h4>
            <div className="mt-3">
              <a
                className="px-5 py-3 flex-grow-1 font-color-white about-blog"
                href="https://www.netlify.com/blog/2020/07/09/create-a-fully-fledged-jamstack-commerce-store-with-commerce.js-and-netlify/"
                target="_blank"
              >
                Read Blog
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </Root>
);

export default About;
