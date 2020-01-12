import React, { Component } from "react";
import Link from "next/link";

const collections = [
  {
    image: "/images/collection/1.png",
    name: "Skin Products",
    number: "20",
    link: "/collection"
  },
  {
    image: "/images/collection/2.png",
    name: "Beard Products",
    number: "20",
    link: "/collection"
  },
  {
    image: "/images/collection/3.png",
    name: "Hair Products",
    number: "20",
    link: "/collection"
  }
];

export default class CategoryBanner extends Component {
  render() {
    return (
      <div className="bg-brand300 py-5 collection-banner">
        <div className="custom-container py-5">
          <p className="font-size-display2 my-3 py-5 text-center font-family-secondary">
            Categories
          </p>
          <div className="row">
            {collections.map(item => (
              <div className="col-12 col-md-4 collection-item">
                <Link href={item.link}>
                  <a className="align-items-center font-color-black flex-column cursor-pointer mb-5">
                    <div
                      className="mb-4 w-100 collection-item-image"
                      style={{
                        background: `url("${item.image}") center center/cover`
                      }}
                    />
                    <p className="mb-2 font-size-heading text-center">
                      {item.name}
                    </p>
                    <p className="text-center">{item.number} products</p>
                  </a>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
