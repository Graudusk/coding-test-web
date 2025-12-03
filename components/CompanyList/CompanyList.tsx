'use client';

import { Company } from '@/types/Company';
import CompanyCard from '../CompanyCard/CompanyCard';

export default function CompanyList({ companies }: { companies: Company[] }) {
  if (companies.length === 0) {
    return <p>No companies found</p>;
  }

  return (
    <div>
      {companies.map(company => (
        <CompanyCard company={company} key={company.id} />
      ))}
    </div>
  );
}
