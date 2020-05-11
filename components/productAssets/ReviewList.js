import React from 'react';
import ReviewStars from './ReviewStars';

const ReviewList = ({ children, reviews }) => (
  <div className="d-flex border border-color-black bg-brand300 flex-wrap">
    {reviews.map((item, index) => (
      <div
        key={index}
        className={`p-4 p-lg-5 w-100 borderbottom ${index % 2 === 0 &&
          'border-md-right'} border-color-black col-12 col-md-6`}
      >
        <ReviewStars count={item.stars} />
        <p className="font-size-title mb-2 mt-3">{item.title}</p>
        <p className="mb-3">{item.description}</p>
        <p className="font-color-light font-size-caption">
          {item.reviewBy} | December, 2019
        </p>
      </div>
    ))}
    {children}
  </div>
);

export default ReviewList;
