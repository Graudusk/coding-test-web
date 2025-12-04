import { getCompanies } from './api';
import { fetchTrendingCompanies } from '@/services/companyService';
import { Company } from '@/types/Company';

jest.mock('@/services/companyService', () => ({
  fetchTrendingCompanies: jest.fn(),
}));

const mockFetchTrendingCompanies = fetchTrendingCompanies as jest.MockedFunction<typeof fetchTrendingCompanies>;

const sampleCompanies: Company[] = [
  {
    id: 1,
    image: 'logo.png',
    name: 'Acme',
    country: 'US',
    ticker: 'ACM',
    displayName: 'Acme Corp',
    description: 'A sample company',
    infoUrl: 'https://example.com',
    brandColor: '#000',
  },
];

describe('getCompanies', () => {
  it('returns companies fetched with default pagination', async () => {
    mockFetchTrendingCompanies.mockResolvedValueOnce(sampleCompanies);

    const companies = await getCompanies();

    expect(mockFetchTrendingCompanies).toHaveBeenCalledWith('10', '0');
    expect(companies).toEqual(sampleCompanies);
  });

  it('passes custom limit and offset to the service', async () => {
    mockFetchTrendingCompanies.mockResolvedValueOnce(sampleCompanies);

    await getCompanies('20', '5');

    expect(mockFetchTrendingCompanies).toHaveBeenCalledWith('20', '5');
  });
});
