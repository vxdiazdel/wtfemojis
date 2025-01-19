import { memo, ReactNode } from 'react';

type FooterProps = {
  children?: ReactNode;
  className?: string;
};

const FooterComponent = ({ children, className = '' }: FooterProps) => {
  return <footer className={className}>{children}</footer>;
};

export const Footer = memo(FooterComponent);
