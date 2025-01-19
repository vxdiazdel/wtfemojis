import { ComponentProps, memo, ReactNode } from 'react';
import { ToastContainer } from 'react-toastify';
import { Navbar } from '@/components/Navbar';

type LayoutProps = ComponentProps<'main'> & {
  children: ReactNode;
  className?: string;
};

const LayoutComponent = ({
  children,
  className = '',
  ...props
}: LayoutProps) => {
  return (
    <>
      <Navbar />
      <main
        className={`container my-8 md:my-12 mx-auto p-4 ${className}`}
        {...props}
      >
        {children}
        <ToastContainer />
      </main>
    </>
  );
};

export const Layout = memo(LayoutComponent);
