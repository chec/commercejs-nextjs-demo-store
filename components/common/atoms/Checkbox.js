import React from 'react';

const Checkbox = ({
  checked,
  size = '24px',
  color = '#000000',
  className,
  onClick,
  ...rest
}) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      className={className}
      tabIndex="0"
      style={{ height: size, width: size, minHeight: size, minWidth: size }}
      onClick={onClick}
      onKeyDown={e => {
        e.key === 'Enter' && onClick();
      }}
      {...rest}
    >
      {checked ? (
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M20 4H4V20H20V4ZM9.77684 16.0943L17.0032 9.55615L15.9969 8.44385L9.96009 13.9057L8.0887 11.5353L6.91138 12.4647L9.77684 16.0943Z"
          fill={color}
        />
      ) : (
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M18.5 5.5H5.5V18.5H18.5V5.5ZM4 4V20H20V4H4Z"
          fill={color}
        />
      )}
    </svg>
  );
};

export default Checkbox;

Checkbox.defaultProps = {
  onClick: () => {}
};
