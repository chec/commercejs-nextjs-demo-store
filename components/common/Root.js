import React from "react";
import Header from "./Header";
import Footer from "./Footer";

export default function Root({ transparentHeader, children }) {
  return (
    <>
      <Header transparent={transparentHeader} />
      {children}
    </>
  );
}
