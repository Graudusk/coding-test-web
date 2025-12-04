/**
 * @jest-environment jsdom
 */
import { render, screen } from '@testing-library/react';
import { testMockCompaniesA } from './CompanyList.test.mock';
import CompanyList from './CompanyList';
import { getCompanies } from '@/lib/api';

jest.mock('@/lib/api', () => ({
  getCompanies: jest.fn(),
}));

jest.mock('../CompanyCard/CompanyCard', () => ({
  __esModule: true,
  default: ({ company }: { company: { displayName: string } }) => (
    <div data-testid="company-card">{company.displayName}</div>
  ),
}));

const mockGetCompanies = getCompanies as jest.MockedFunction<typeof getCompanies>;

describe('Company List', () => {
  it('fetches and renders a card for each company', async () => {
    mockGetCompanies.mockResolvedValueOnce(testMockCompaniesA);

    const ui = await CompanyList();
    render(ui);

    expect(screen.getAllByTestId('company-card')).toHaveLength(3);
    expect(mockGetCompanies).toHaveBeenCalledWith();
  });

  it('shows a fallback message when no companies exist', async () => {
    mockGetCompanies.mockResolvedValueOnce([]);

    const ui = await CompanyList();
    render(ui);

    expect(screen.getByText('No companies found')).toBeInTheDocument();
  });
});
