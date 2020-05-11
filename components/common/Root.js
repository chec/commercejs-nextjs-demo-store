import React from 'react';
import Header from './Header';

export default function Root({ transparentHeader, children }) {
  return (
    <>
      <Header transparent={transparentHeader} />
      {children}
    </>
  );
}
