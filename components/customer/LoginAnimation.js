import React from 'react';

import Lottie from 'react-lottie';
import animationData from '../../lotties/login.json';

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
    <div className="login-animation pt-20">
      <Lottie
        options={defaultOptions}
        height={175}
        width={200}
      />
      <h2 className="login-animation__title text-center font-family-secondary">Logging in...</h2>
    </div>
  );
}
