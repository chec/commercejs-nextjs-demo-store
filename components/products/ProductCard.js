import React from 'react';
import Link from 'next/link';

export default function ProductCard({ permalink, image, name, description, price, soldOut}) {
  return (
    <Link href="/product/[permalink]" as={`/product/${permalink}`}>
      <a className="mb-5 d-block font-color-black cursor-pointer">
        <div
          className="mb-3"
          style={{
            paddingBottom: '125%',
            background: `url("${image}") center center/cover`
          }}
        >
          {soldOut && <div className="product-card--overlay-text">SOLD OUT</div>}
        </div>
        <p className="font-size-subheader mb-2 font-weight-medium">
          {name}
        </p>
        <p className="mb-2 font-color-medium">{description}</p>
        <p className="font-size-subheader font-weight-medium pb-2 borderbottom border-color-black">
          {price}
        </p>
      </a>
    </Link>
  );
}
