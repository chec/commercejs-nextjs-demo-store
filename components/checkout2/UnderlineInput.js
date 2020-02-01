import React from "react";

export default function UnderlineInput({ placeholder, className, ...rest }) {
  return (
    <div className="w-100 d-flex flex-column">
      <input
        className={`order-1 bg-transparent borderbottom border-color-gray400 h-32 w-100 pl-0 pr-3 underlined-input ${className}`}
        placeholder={placeholder}
        {...rest}
      />
      <label
        className="font-size-tiny font-color-light"
        style={{ lineHeight: "8px" }}
      >
        {placeholder}
      </label>
    </div>
  );
}
