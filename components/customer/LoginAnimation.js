import React from 'react';

import Lottie from 'react-lottie';
import animationData from '../../lotties/login.json.json';

export default function LoginAnimation() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    }
  };

  return (
    <div className="loader-animation">
      <Lottie
        options={defaultOptions}
        height={500}
        width={400}
      />
      <h1 className="text-center font-family-secondary">Logging in...</h1>
    </div>
  );
}
