import React from "react";
import Link from "next/link";

const products = [
  {
    image: "/images/product/4.png",
    title: "Heart Gummy Vitamin",
    description:
      "For medium to dry skin for the lorem ipsum is the best texhnique to clense your skin.",
    price: "$32.00",
    link: "/product"
  },
  {
    image: "/images/product/5.png",
    title: "Heart Gummy Vitamin",
    description:
      "For medium to dry skin for the lorem ipsum is the best texhnique to clense your skin.",
    price: "$32.00",
    link: "/product"
  },
  {
    image: "/images/product/6.png",
    title: "Heart Gummy Vitamin",
    description:
      "For medium to dry skin for the lorem ipsum is the best texhnique to clense your skin.",
    price: "$32.00",
    link: "/product"
  },
  {
    image: "/images/product/7.png",
    title: "Heart Gummy Vitamin",
    description:
      "For medium to dry skin for the lorem ipsum is the best texhnique to clense your skin.",
    price: "$32.00",
    link: "/product"
  }
];

export default function ProductRow() {
  return (
    <div className="row mb-5">
      {products.map(item => (
        <div className="col-6 col-sm-6 col-lg-3">
          <Link href={item.link}>
            <a className="mb-5 d-block font-color-black cursor-pointer">
              <div
                className="mb-3"
                style={{
                  paddingBottom: "125%",
                  background: `url("${item.image}") center center/cover`
                }}
              />
              <p className="font-size-subheader mb-2 font-weight-medium">
                {item.title}
              </p>
              <p className="mb-2 font-color-medium">{item.description}</p>
              <p className="font-size-subheader font-weight-medium pb-2 borderbottom border-color-black">
                {item.price}
              </p>
            </a>
          </Link>
        </div>
      ))}
    </div>
  );
}
