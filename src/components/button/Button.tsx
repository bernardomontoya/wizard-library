import React from 'react';

type ButtonProps = {
  label: string;
  disabled?: boolean;
  primary?: boolean;
  onClick: () => void;
};

export const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  primary = false,
  disabled = false,
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`px-10 py-3 font-semibold uppercase rounded-full ${
        primary
          ? 'bg-blue-vivid hover:bg-blue-800 text-white'
          : 'text-gray-very-dark border-blue-vivid border-2 hover:bg-gray-100'
      } ${disabled ? 'cursor-not-allowed bg-gray-400 hover:bg-gray-600' : ''}`}
    >
      {label}
    </button>
  );
};

export default Button;
