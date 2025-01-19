import { memo, ReactNode } from 'react';

type ListProps<T> = {
  data: T[];
  children?: ReactNode;
  renderItem: (item: T) => ReactNode;
};

const ListComponent = <T,>({ data, children, renderItem }: ListProps<T>) => {
  return (
    <>
      {children}
      {data.map(renderItem)}
    </>
  );
};

export const List = memo(ListComponent) as typeof ListComponent;
