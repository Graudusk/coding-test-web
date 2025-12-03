// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { fetchTrendingCompanies } from '@/services/companyService';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse<any>) {
  try {
    const { limit = 10, offset = 0 } = req.query;

    const startIndex = Number(offset);
    const endIndex = startIndex + Number(limit);
    const companies = await fetchTrendingCompanies();
    const paginatedCompanies = companies.slice(startIndex, endIndex);

    res.status(200).json(paginatedCompanies);
  } catch (error: any) {
    console.error('API Error:', error);
    res.status(500).json({ error: error.message || 'Internal Server Error' });
  }
}
