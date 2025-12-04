import { data } from '@data/companies.mock';
import { normalizeCompany } from './normalizeCompany';

export async function fetchTrendingCompanies(offset = '0', limit = '10') {
  const startIndex = Number(offset);
  const endIndex = startIndex + Number(limit);
  const companies = data.data.map(normalizeCompany);
  const paginatedCompanies = companies.slice(startIndex, endIndex);

  return paginatedCompanies;
}
