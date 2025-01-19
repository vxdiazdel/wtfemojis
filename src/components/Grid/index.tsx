import { memo, ReactNode } from 'react';

type GridProps = {
  children: ReactNode;
};

const GridComponent = ({ children }: GridProps) => {
  return <div>{children}</div>;
};

export const Grid = memo(GridComponent);
