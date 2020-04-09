import React from "react";

const VariantSelector = ({ className, options, name, selected, toggle, product }) => {

  return (
    <div className={className}>
      <span className="mr-3 font-weight-semibold">{name}</span>
      {options.map(option => (
        <span
          onClick={() => toggle(option)}
          className={`mr-3 cursor-pointer ${option === selected &&
            "text-decoration-underline"}`}
        >
          {option}
        </span>
      ))}
    </div>
  );
}

export default VariantSelector;
