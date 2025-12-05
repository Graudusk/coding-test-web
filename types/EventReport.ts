export type EventReport = {
  reportUrl: string;
  pdfUrl: string | null;
  eventId: number;
  eventTitle: string;
  eventDate: string;
  qnaTimestamp: number | null;
  fiscalPeriod: string;
  fiscalYear: string;
  audioUrl?: string | null;
};
