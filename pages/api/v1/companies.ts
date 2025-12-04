import { fetchTrendingCompanies } from '@/services/companyService';
import type { NextApiRequest, NextApiResponse } from 'next';

// Unused route handler but kept for reference.
export default async function handler(req: NextApiRequest, res: NextApiResponse<any>) {
  try {
    const { limit = '10', offset = '0' } = req.query;

    if (typeof limit != 'string' || typeof offset !== 'string') {
      throw new Error('Invalid query parameters');
    }

    const companies = await fetchTrendingCompanies(limit, offset);

    res.status(200).json(companies);
  } catch (error: any) {
    console.error('API Error:', error);
    res.status(500).json({ error: error.message || 'Internal Server Error' });
  }
}
