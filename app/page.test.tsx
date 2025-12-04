/**
 * @jest-environment jsdom
 */
import { render, screen } from '@testing-library/react';
import Page from './page';

jest.mock('@next/font/google', () => ({
  Inter: () => ({ className: 'inter' }),
}));

jest.mock('@/components/CompanyList/CompanyList', () => ({
  __esModule: true,
  default: () => <div data-testid="company-list">mocked list</div>,
}));

jest.mock('@/components/LoadingSkeleton/LoadingSkeleton', () => ({
  LoadingSkeleton: () => <div data-testid="loading-skeleton" />,
}));

describe('App Page smoke test', () => {
  it('renders heading, lead text, and the company list wrapper', () => {
    render(<Page />);

    expect(screen.getByRole('heading', { name: 'Quartr', level: 1 })).toBeInTheDocument();
    expect(screen.getByText(/trending companies/i)).toBeInTheDocument();
    expect(screen.getByTestId('company-list')).toBeInTheDocument();
  });
});
