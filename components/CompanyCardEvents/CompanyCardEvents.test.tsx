/**
 * @jest-environment jsdom
 */
import { render, screen } from '@testing-library/react';
import CompanyCardEvents from './CompanyCardEvents';
import { Company } from '@/types/Company';

jest.mock('@next/font/google', () => ({
  Inter: () => ({ className: 'inter' }),
}));

const companyWithMixedEvents: Company = {
  id: 7,
  image: null,
  name: 'Example',
  country: 'US',
  ticker: 'EXM',
  displayName: 'Example Inc',
  description: 'Example description',
  infoUrl: null,
  brandColor: null,
  events: [
    {
      reportUrl: 'https://example.com/report-a',
      pdfUrl: 'https://example.com/pdf-a',
      eventId: 10,
      eventTitle: 'Q2 2023',
      eventDate: '2023-06-01T00:00:00.000Z',
      qnaTimestamp: null,
      fiscalPeriod: 'Q2',
      fiscalYear: '2023',
    },
    {
      reportUrl: 'https://example.com/report-b',
      pdfUrl: null,
      eventId: 11,
      eventTitle: 'Q3 2023',
      eventDate: '2023-09-01T00:00:00.000Z',
      qnaTimestamp: null,
      fiscalPeriod: 'Q3',
      fiscalYear: '2023',
    },
  ],
};

describe('CompanyCardEvents', () => {
  it('renders report and PDF links when available', () => {
    render(<CompanyCardEvents company={companyWithMixedEvents} />);

    expect(screen.getByText(/events/i)).toBeInTheDocument();
    expect(screen.getByText('Q2 2023')).toBeInTheDocument();
    expect(screen.getByText('Q3 2023')).toBeInTheDocument();

    const reportLinks = screen.getAllByRole('link', { name: /view report/i });
    expect(reportLinks).toHaveLength(2);
    expect(reportLinks[0]).toHaveAttribute('href', 'https://example.com/report-a');
    expect(reportLinks[1]).toHaveAttribute('href', 'https://example.com/report-b');

    const pdfLinks = screen.getAllByRole('link', { name: /view pdf/i });
    expect(pdfLinks).toHaveLength(1);
    expect(pdfLinks[0]).toHaveAttribute('href', 'https://example.com/pdf-a');
  });

  it('omits PDF link when it does not exist', () => {
    render(<CompanyCardEvents company={companyWithMixedEvents} />);

    const pdfLinks = screen.getAllByText(/view pdf/i);
    expect(pdfLinks).toHaveLength(1);
    expect(pdfLinks[0]).toHaveAttribute('href', 'https://example.com/pdf-a');
  });
});
