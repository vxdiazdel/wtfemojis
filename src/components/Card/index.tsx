import { memo, ReactNode } from 'react';

type CardProps = {
  children: ReactNode;
  className?: string;
};

const CardComponent = ({ children, className = '', ...props }: CardProps) => {
  return (
    <div
      className={`p-6 md:p-8 bg-white/[.85] rounded-lg shadow-2xl ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export const Card = memo(CardComponent);
