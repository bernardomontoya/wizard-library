import React, { PropsWithChildren } from 'react';

type LabelProps = {
  id: string;
  text: string;
};

const Label: React.FC<PropsWithChildren<LabelProps>> = ({
  id,
  text,
  children,
}) => {
  return (
    <label
      htmlFor={id}
      className="block mb-2 text-sm font-medium text-gray-900 "
    >
      {text}
      {children}
    </label>
  );
};

export default Label;
