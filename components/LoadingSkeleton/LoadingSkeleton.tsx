'use client';

import 'react-loading-skeleton/dist/skeleton.css';
import CompanyCardSkeleton from '../CompanyCardSkeleton/CompanyCardSkeleton';

export const LoadingSkeleton = () => {
  return (
    <>
      <CompanyCardSkeleton />
      <CompanyCardSkeleton />
      <CompanyCardSkeleton />
      <CompanyCardSkeleton />
      <CompanyCardSkeleton />
    </>
  );
};
