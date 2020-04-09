import React from "react";
import ReviewStars from "./ReviewStars";
import { animateScroll as scroll } from "react-scroll";

function AboutProduct({ description, ...rest }) {
  function onReviewClick() {
    const section = document.querySelector("#reviews");

    if (section) {
      scroll.scrollTo(section.offsetTop - 130, {
        smooth: "easeInOutQuint"
      });
    }
  }

  return (
    <div {...rest}>
      <div onClick={onReviewClick} className="cursor-pointer">
        <ReviewStars count={4.5} />
      </div>
      <p className="font-size-display3 font-family-secondary mt-2 mb-2">
        Futuredew
      </p>
      <div
        dangerouslySetInnerHTML={{
          __html: description
        }}
        className="mb-4 pb-3 font-size-subheader"
      />
    </div>
  );
}

export default AboutProduct;
