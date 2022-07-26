import React, { PropsWithChildren } from 'react';

const Title: React.FC<PropsWithChildren> = ({ children }) => {
  return <h1 className="mb-6 text-4xl font-bold">{children}</h1>;
};

export default Title;
