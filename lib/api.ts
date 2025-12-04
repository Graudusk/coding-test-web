import { fetchTrendingCompanies } from '@/services/companyService';
import { Company } from '@/types/Company';

export async function getCompanies(limit = '10', offset = '0'): Promise<Company[]> {
  // Defer from the API call until we need it. This is useful for caching and avoiding unnecessary network requests.

  // const res = await fetch(`${env.API_URL}/api/v1/companies`, { cache: 'no-store' });
  // if (!res.ok) throw new Error('Failed to fetch companies');
  // const companies = await res.json();

  const companies = await fetchTrendingCompanies(limit, offset);

  return companies;
}
