import CompanyList from '@/components/CompanyList/CompanyList';
import { LoadingSkeleton } from '@/components/LoadingSkeleton/LoadingSkeleton';
import { Inter } from '@next/font/google';
import { Suspense } from 'react';

const inter = Inter({ subsets: ['latin'] });

export default function Page() {
  return (
    <main>
      <div className="hero">
        <h1 className={inter.className}>Quartr</h1>
        <p className={`${inter.className} lead`}>Trending companies</p>
      </div>

      <Suspense fallback={<LoadingSkeleton />}>
        {/* @ts-expect-error Async Server Component */}
        <CompanyList />
      </Suspense>
    </main>
  );
}
