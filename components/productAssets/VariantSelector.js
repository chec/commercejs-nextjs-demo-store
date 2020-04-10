import React from "react";

const VariantSelector = ({ className, product, onSelectOption, addToCart, hovered }) => {

  return (
    <div className={className}>
      {product.variants.map(variant => (
        <>
        <span className="mr-3 font-weight-semibold">{variant.name}</span>
        {variant.options.map(option => (

            <span
            onClick={() => onSelectOption(variant.id, option.id, addToCart)}
            className={`mr-3 cursor-pointer ${option.id === onSelectOption ?
              "text-decoration-underline" : "text-decoration-none"}`}
          >
            {option.name}
          </span>
        ))}
        </>
      ))}
    </div>
  );
}

export default VariantSelector;
