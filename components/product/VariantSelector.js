import React from "react";

export default function VariantSelector({
  className,
  options,
  heading,
  selected,
  toggle
}) {
  return (
    <div className={className}>
      <span className="mr-3 font-weight-semibold">{heading}</span>
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
