import { memo } from 'react';

type NoResultsProps = {
  className?: string;
};

const NoResultsComponent = ({ className = '' }: NoResultsProps) => {
  return (
    <div className={`p-4 col-span-full text-center ${className}`}>
      No results 🥲
    </div>
  );
};

export const NoResults = memo(NoResultsComponent);
