import { Company } from '@/types/Company';
import { env } from './env';

export async function getCompanies(): Promise<Company[]> {
  const res = await fetch(`${env.API_URL}/api/v1/companies`, { cache: 'no-store' });

  if (!res.ok) throw new Error('Failed to fetch companies');

  const companies = await res.json();

  return companies;
}
