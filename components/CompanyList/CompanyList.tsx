import { getCompanies } from '@/lib/api';
import CompanyCard from '../CompanyCard/CompanyCard';

export default async function CompanyList() {
  const companies = await getCompanies();

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
