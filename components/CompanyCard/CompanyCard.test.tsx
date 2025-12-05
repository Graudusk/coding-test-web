/**
 * @jest-environment jsdom
 */
import { fireEvent, render, screen } from '@testing-library/react';
import CompanyCard from './CompanyCard';
import { Company } from '@/types/Company';

jest.mock('@next/font/google', () => ({
  Inter: () => ({ className: 'inter' }),
}));

const companyWithEvents: Company = {
  id: 42,
  image: 'logo.png',
  name: 'TestCo',
  country: 'US',
  ticker: 'TST',
  displayName: 'Test Company',
  description: 'Test description',
  infoUrl: 'https://example.com/info',
  brandColor: '#000000',
  events: [
    {
      reportUrl: 'https://example.com/report',
      pdfUrl: 'https://example.com/pdf',
      eventId: 1,
      eventTitle: 'Q1 2024',
      eventDate: '2024-01-01T00:00:00.000Z',
      qnaTimestamp: null,
      fiscalPeriod: 'Q1',
      fiscalYear: '2024',
    },
  ],
};

describe('CompanyCard', () => {
  it('toggles events visibility when button is clicked', () => {
    render(<CompanyCard company={companyWithEvents} />);

    expect(screen.queryByText('Q1 2024')).not.toBeInTheDocument();

    fireEvent.click(screen.getByRole('button', { name: /show more/i }));

    expect(screen.getByText('Q1 2024')).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /view report/i })).toHaveAttribute(
      'href',
      'https://example.com/report',
    );
    expect(screen.getByRole('link', { name: /view pdf/i })).toHaveAttribute('href', 'https://example.com/pdf');

    fireEvent.click(screen.getByRole('button', { name: /hide/i }));
    expect(screen.queryByText('Q1 2024')).not.toBeInTheDocument();
  });
});
