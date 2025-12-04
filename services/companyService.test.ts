import { data as mockData } from '@data/companies.mock';
import { fetchTrendingCompanies } from './companyService';

describe('fetchTrendingCompanies', () => {
  it('return normalized companies with default pagination (first 10)', async () => {
    const companies = await fetchTrendingCompanies();

    expect(companies).toHaveLength(Math.min(10, mockData.data.length));
    expect(companies[0]).toMatchObject({
      id: mockData.data[0].companyId,
      displayName: mockData.data[0].displayName,
      infoUrl: mockData.data[0].infoUrl,
    });
  });

  it('apply offset and limit to the dataset', async () => {
    const companies = await fetchTrendingCompanies('1', '1');

    expect(companies).toHaveLength(1);
    expect(companies[0].id).toBe(mockData.data[1].companyId);
  });
});
