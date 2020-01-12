import React, { Component } from "react";

const reviews = [
  {
    stars: "5",
    title: "Perfect",
    description: "Great fit and feel. They elevate lounging to the next level!",
    reviewBy: "Heidi C.",
    date: "December, 2019"
  },
  {
    stars: "3.5",
    title: "So comfortable!",
    description:
      "I sized up just in case and kind of wished I hadn’t. Very comfortable and I live in them exclusively during the weekend.",
    reviewBy: "Heidi C.",
    date: "December, 2019"
  },
  {
    stars: "4",
    title: "Comfy but thin",
    description:
      "Comfortable but kinda thin for a pant. I typically wear a 32/33 pant and had to size up to XL for these to not fit like a legging. Have been wearing pretty solid for a month of so and there's some pilling, but not a lot. Good price for OK product.",
    reviewBy: "Heidi C.",
    date: "December, 2019"
  },
  {
    stars: "5",
    title: "So comfortable!",
    description:
      "I sized up just in case and kind of wished I hadn’t. Very comfortable and I live in them exclusively during the weekend.",
    reviewBy: "Heidi C.",
    date: "December, 2019"
  }
];

export default class ClientReview extends Component {
  render() {
    return (
      <div className="custom-container pb-5">
        <div className="row">
          <div className="col-12 col-lg-10 offset-lg-1">
            <div className="d-flex justify-content-between flex-column flex-sm-row align-items-sm-center mb-3">
              <p className="font-size-title font-weight-medium mb-2 mb-sm-0">
                4.3 stars from 10 reviews
              </p>
              <p
                className="text-decoration-underline text-write cursor-pointer"
                tabIndex="0"
              >
                Write a review
              </p>
            </div>
            <div className="d-flex border border-color-black bg-brand300 flex-wrap">
              {reviews.map((item, index) => (
                <div
                  className={`p-4 p-lg-5 w-100 borderbottom ${index % 2 === 0 &&
                    "border-md-right"} border-color-black col-12 col-md-6`}
                >
                  <div d="flex">
                    {[1, 2, 3, 4, 5].map(index => (
                      <img src="/icon/star.svg" className="w-16" />
                    ))}
                    <span className="ml-2 font-size-caption font-weight-semibold">
                      {item.stars}/5
                    </span>
                  </div>
                  <p className="font-size-title mb-2 mt-3">{item.title}</p>
                  <p className="mb-3">{item.description}</p>
                  <p className="font-color-light font-size-caption">
                    {item.reviewBy} | December, 2019
                  </p>
                </div>
              ))}
              <button className="text-center bg-transparent w-100 h-72 px-3 text-decoration-underline">
                View all Reviews
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
