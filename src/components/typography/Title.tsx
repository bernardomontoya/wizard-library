import React, { PropsWithChildren } from 'react';

const Title: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <h1 className="mb-6 text-4xl font-bold text-wizard-title">{children}</h1>
  );
};

export default Title;
