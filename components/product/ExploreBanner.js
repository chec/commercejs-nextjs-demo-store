import React from "react";
import Link from "next/link";

export default function ExploreBanner() {
  return (
    <div className="py-5 mb-5 explore-banner">
      <div className="bg-brand300 position-relative py-md-5">
        {/* Image Absolute */}
        <div className="position-md-absolute left-0 bottom-0 right-0">
          <div className="row">
            <div className="col-md-5 offset-md-7">
              <div className="position-relative">
                <div className="position-md-absolute right-0 left-0 bottom-0">
                  <div className="explore-banner--image"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="custom-container py-md-5">
          <div className="row py-5">
            <div className="col-12 col-md-6 py-5">
              <p
                className="font-size-display3 font-weight-light mb-4"
                style={{ maxWidth: "20rem" }}
              >
                A new shopping experience
              </p>
              <div className="d-flex">
                <Link href="/collection">
                  <a className="d-flex py-3 align-items-center font-color-black borderbottom border-color-black">
                    <p className="mr-3">Explore Products</p>
                    <img src="/icon/arrow-long-right.svg" />
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
