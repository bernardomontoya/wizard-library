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
          ? 'bg-wizard-primaryButton hover:bg-wizard-primaryButtonHover text-wizard-primaryButton'
          : 'text-wizard-secondaryButton border-wizard-secondaryButton border-2 hover:bg-wizard-secondaryButtonHover bg-wizard-secondaryButton'
      } ${
        disabled
          ? 'cursor-not-allowed bg-wizard-disabledButton hover:bg-wizard-disabledButtonHover text-wizard-disabledButton'
          : ''
      }`}
    >
      {label}
    </button>
  );
};

export default Button;
