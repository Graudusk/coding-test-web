/**
 * @jest-environment jsdom
 */
import CompanyList from '@/components/CompanyList/CompanyList';
import { render, screen } from '@testing-library/react';
import { testMockCompaniesA } from './CompanyList.test.mock';

jest.mock('@/components/CompanyCard/CompanyCard', () => ({
  __esModule: true,
  default: ({ company }: { company: { displayName: string } }) => (
    <div data-testid="company-card">{company.displayName}</div>
  ),
}));

describe('Company List', () => {
  it('renders a card for each company', () => {
    render(<CompanyList companies={testMockCompaniesA} />);

    expect(screen.getAllByTestId('company-card')).toHaveLength(3);
  });

  it('shows a fallback message when no companies exist', () => {
    render(<CompanyList companies={[]} />);

    expect(screen.getByText('No companies found')).toBeInTheDocument();
  });
});
