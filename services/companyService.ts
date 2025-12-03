import { data } from '@data/companies.mock';
import { normalizeCompany } from './normalizeCompany';

export async function fetchTrendingCompanies() {
  return data.data.map(normalizeCompany);
}
