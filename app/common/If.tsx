import React, { PropsWithChildren } from 'react';

type Props = PropsWithChildren<{
  condition: boolean;
  otherwise?: React.ReactNode;
}>;

const If: React.FC<Props> = ({ children, condition, otherwise }) => {
  return <>{condition ? children : otherwise}</>;
};

export default If;
