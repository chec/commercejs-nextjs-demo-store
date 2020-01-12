import React from "react";
import Link from "next/link";

export default function HomeBanner() {
  return (
    <div className="p-5">
      <p
        className="font-size-display1 mt-5 text-center mx-auto"
        style={{ maxWidth: "53rem" }}
      >
        YOU'RE GOING PLACES. WE CREATED A RANGE OF FINE PRODUCTS FOR GETTING YOU
        FINE SKIN.
      </p>
      <div className="d-flex align-items-center justify-content-center mt-3 mb-5">
        <Link href="/">
          <a className="d-flex py-3 align-items-center font-color-black borderbottom border-color-black">
            <p className="mr-3">Find out more</p>
            <img src="/icon/arrow-long-right.svg" />
          </a>
        </Link>
      </div>
    </div>
  );
}
