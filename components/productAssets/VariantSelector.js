import React from "react";


const VariantSelector = ({ className, product, selected, toggle }) => {

  return (
    <div className={className}>
      {product.map(variant => (
        <>
        <span className="mr-3 font-weight-semibold">{variant.name}</span>
        {variant.options.map(option => (
            <span
            onClick={() => toggle(option)}
            className={`mr-3 cursor-pointer ${option === selected &&
              "text-decoration-underline"}`}
          >
            {option}
          </span>
        ))}
        </>
      ))}
    </div>
  );
}

export default VariantSelector;
