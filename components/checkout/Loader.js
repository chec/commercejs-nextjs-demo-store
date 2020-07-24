import React from 'react';

import Lottie from 'react-lottie';
import animationData from '../../lotties/checkout.json';

export default function Loading() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    }
  };

  return (
    <div class="">
      <Lottie
        options={defaultOptions}
        height={500}
        width={400}
      />
      <h1 className="text-center font-family-secondary">Your order is processing...</h1>
    </div>
  );
}
