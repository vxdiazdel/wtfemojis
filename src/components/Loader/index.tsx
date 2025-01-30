import { memo } from 'react';

type LoaderProps = {
  title?: string;
  emoji?: string;
  className?: string;
};

const LoaderComponent = ({
  className = '',
  title = 'Loading...',
  emoji = '🙃',
  ...props
}: LoaderProps) => {
  return (
    <div
      className={`flex align-middle justify-center gap-1 ${className}`}
      {...props}
    >
      <span className="text-gray-600">{title}</span>
      <span className="animate-spin origin-center text-xl">{emoji}</span>
    </div>
  );
};

export const Loader = memo(LoaderComponent);
