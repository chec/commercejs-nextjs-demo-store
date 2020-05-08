import React from 'react';

const Radiobox = ({
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
        <>
          <path
            d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z"
            fill={color}
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12ZM18.5 12C18.5 15.5899 15.5899 18.5 12 18.5C8.41015 18.5 5.5 15.5899 5.5 12C5.5 8.41015 8.41015 5.5 12 5.5C15.5899 5.5 18.5 8.41015 18.5 12Z"
            fill={color}
          />
        </>
      ) : (
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12 18.5C15.5899 18.5 18.5 15.5899 18.5 12C18.5 8.41015 15.5899 5.5 12 5.5C8.41015 5.5 5.5 8.41015 5.5 12C5.5 15.5899 8.41015 18.5 12 18.5ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20Z"
          fill={color}
        />
      )}
    </svg>
  );
};

export default Radiobox;

Radiobox.defaultProps = {
  onClick: () => {}
};
