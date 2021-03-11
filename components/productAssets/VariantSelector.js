import React from 'react';

const VariantSelector = ({ variantGroups, onSelectOption, selectedOptions, ...passthrough }) => (
  <div {...passthrough}>
    {variantGroups.map(group => (
      <div key={group.id}>
      <span className="mr-3 font-weight-semibold">{group.name}</span>
      {group.options.map(option => (
        <span
          key={option.id}
          onClick={() => onSelectOption(group.id, option.id)}
          className={`mr-3 cursor-pointer ${
            selectedOptions[group.id] && selectedOptions[group.id] === option.id
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
