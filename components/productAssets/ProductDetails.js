import React from "react";
import ReviewStars from "./ReviewStars";
import { animateScroll as scroll } from "react-scroll";
import VariantSelector from "../productAssets/VariantSelector";


/**
* Handle click on review starts to scroll to review section
*/
const onReviewClick = () => {
  const section = document.querySelector("#reviews");

  if (section) {
    scroll.scrollTo(section.offsetTop - 130, {
      smooth: "easeInOutQuint"
    });
  }
}

/**
* Add to Cart method
*/
// const addToCart = () => {

// }

const ProductDetails = ( {name, description, className, product, options, selected, toggle, price} ) => {
  const reg = /(<([^>]+)>)/ig;

  return (
    <div>

      {/* Product Summary */}
      <div onClick={onReviewClick} className="cursor-pointer">
        <ReviewStars count={4.5} />
      </div>
      <p className="font-size-display3 font-family-secondary mt-2 mb-2">
        {name}
      </p>
      <div className="mb-4 pb-3 font-size-subheader">{description.replace(reg, "")}</div>

      {/* Product Variants */}
      {/* {product.map(variant => (
        <VariantSelector
          option={variant.options}
          name={variant.name}
        />
      ))} */}

        {/* <div className="d-none d-sm-block">
          <VariantSelector
            className="mb-3"
            name={name}
            product={product}
            // selected={selectedSize}
            // toggle={value =>
            //   this.setState({ selectedSize: value })
            // }
          />
        </div> */}


      {/* Add to Cart & Price */}
      <div className="d-flex py-4">
        <button className="h-56 bg-black font-color-white pl-3 pr-4 d-flex align-items-center flex-grow-1">
          <span className="flex-grow-1 mr-3 text-center">
            Add to cart
          </span>
          <span className="border-left border-color-white pl-3">
          {price}
          </span>
        </button>
      </div>

    </div>
  );
}

export default ProductDetails;

// [
//   {
//     "id": "vrnt_ypbroE9W7o8n4e",
//     "name": "Size",
//     "options": [
//       {
//         "id": "optn_bO6J5aY395EjpK",
//         "name": "500ml kit",
//         "price": {
//           "raw": 0,
//           "formatted": "0.00",
//           "formatted_with_symbol": "$0.00",
//           "formatted_with_code": "0.00 USD"
//         },
//         "quantity": 0,
//         "is": {
//           "quantity_limited": true
//         }
//       },
//       {
//         "id": "optn_A12Jwr7p8oPjnk",
//         "name": "750ml kit",
//         "price": {
//           "raw": 80,
//           "formatted": "80.00",
//           "formatted_with_symbol": "$80.00",
//           "formatted_with_code": "80.00 USD"
//         },
//         "quantity": 0,
//         "is": {
//           "quantity_limited": true
//         }
//       }
//     ]
//   }
// ]
