import React from "react";

const imagesInfo = [
  {
    image: "/images/insta/1.png"
  },
  {
    image: "/images/insta/2.png"
  },
  {
    image: "/images/insta/3.png"
  },
  {
    image: "/images/insta/4.png"
  },
  {
    image: "/images/insta/5.png"
  }
];

export default function Footer() {
  return (
    <footer className="pt-5">
      <div className="custom-container px-3 mb-5 footer-follow">
        <div className="row footer-follow--header">
          {/* <div className="px-3" style={{ flexGrow: 2, maxWidth: "40%" }}></div> */}
          <div className="px-3 footer-follow--title">
            <p
              className="font-size-display1 mb-3"
              style={{ maxWidth: "26rem" }}
            >
              Follow us on instagram for more updates
            </p>
            <div className="d-flex">
              <a
                href="#"
                className="d-flex py-3 align-items-center font-color-black borderbottom border-color-black"
              >
                <p className="mr-3">Follow Us</p>
                <img src="/icon/arrow-long-right.svg" />
              </a>
            </div>
          </div>
        </div>
        <div className="d-flex footer-follow--images">
          {imagesInfo.map(item => (
            <div className="justify-content-sm-end flex-column follow-images">
              <div
                style={{
                  paddingBottom: "100%",
                  background: `url("${item.image}") center center/cover`
                }}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="custom-container mb-5 pb-5 pt-5">
        <div className="row">
          <div className="col-12 col-sm-6 col-md-4">
            <p className="font-family-secondary font-size-display1 mb-4">
              sitemap
            </p>
            <div className="d-flex font-color-medium mb-5 pb-3 pb-md-0 mb-md-0">
              <div className="pr-5">
                <a
                  href="https://google.com"
                  className="mb-3 d-block font-color-medium"
                >
                  Shop
                </a>
                <a
                  href="https://google.com"
                  className="d-block font-color-medium"
                >
                  Lookbook
                </a>
              </div>
              <div>
                <a
                  href="https://google.com"
                  className="mb-3 d-block font-color-medium"
                >
                  Instashop
                </a>
                <a
                  href="https://google.com"
                  className="d-block font-color-medium"
                >
                  About
                </a>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4">
            <p className="font-family-secondary font-size-display1 mb-4">
              follow us
            </p>
            <div className="d-flex font-color-medium mb-5 pb-3 pb-md-0 mb-md-0">
              <div className="pr-5">
                <a
                  href="https://google.com"
                  className="mb-3 d-block font-color-medium"
                >
                  Facebook
                </a>
                <a
                  href="https://google.com"
                  className="d-block font-color-medium"
                >
                  Instagram
                </a>
              </div>
              <div>
                <a
                  href="https://google.com"
                  className="mb-3 d-block font-color-medium"
                >
                  Twitter
                </a>
                <a
                  href="https://google.com"
                  className="d-block font-color-medium"
                >
                  Linkedin
                </a>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4">
            <p className="font-family-secondary font-size-display1 mb-3">
              newsletter
            </p>
            <div className="position-relative">
              <input
                className="borderbottom border-color-gray400 h-48 w-100 pl-0 pr-3"
                placeholder="email address"
              />
              <button className="bg-transparent position-absolute right-0 top-50 translateY--50 p-0 h-48">
                <img src="/icon/arrow-long-right.svg" className="w-24" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-md-5">
        <div className="bg-brand300">
          <div className="custom-container d-flex flex-column flex-md-row align-items-center justify-content-between">
            <div className="pt-5 pb-0 pt-md-4 pb-md-4 d-flex align-items-center flex-wrap justify-content-center">
              <a
                href="https://google.com"
                className="font-color-brand font-size-caption text-uppercase text-center"
              >
                Legal notice
              </a>
              <p className="px-2 font-color-brand font-size-caption">-</p>
              <a
                href="https://google.com"
                className="font-color-brand font-size-caption text-uppercase text-center"
              >
                Terms
              </a>
              <p className="px-2 font-color-brand font-size-caption">-</p>
              <a
                href="https://google.com"
                className="font-color-brand font-size-caption text-uppercase text-center"
              >
                faqs
              </a>
              <p className="px-2 font-color-brand font-size-caption">-</p>
              <a
                href="https://google.com"
                className="font-color-brand font-size-caption text-uppercase text-center"
              >
                shipping and returns
              </a>
            </div>
            <div className="font-color-brand font-size-caption py-4 text-right">
              © 2019 - 2014 Commerce Js Pvt.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
