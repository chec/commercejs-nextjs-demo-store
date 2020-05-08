import React from 'react';

const VariantSelector = ({ variants, onSelectOption, selectedOptions, ...passthrough }) => (
  <div {...passthrough}>
    {variants.map(variant => (
      <div key={variant.id}>
      <span className="mr-3 font-weight-semibold">{variant.name}</span>
      {variant.options.map(option => (
        <span
          key={option.id}
          onClick={() => onSelectOption(variant.id, option.id)}
          className={`mr-3 cursor-pointer ${
            selectedOptions[variant.id] && selectedOptions[variant.id] === option.id
              ? 'text-decoration-underline'
              : 'text-decoration-none'
          }`}
        >
          {option.name}
        </span>
      ))}
      </div>
    ))}
  </div>
);


export default VariantSelector;
