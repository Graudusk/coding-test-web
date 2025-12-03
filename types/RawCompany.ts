export type RawCompany = {
  companyId: number;
  companyName: string;
  companyCountry: string;
  companyTicker: string;
  displayName: string;
  description: string;
  infoUrl: string;
  liveUrl: string;
  iconUrl: string | null;
  logoDarkUrl?: string;
  reportingCurrency: string;
  logoLightUrl?: string;
  colorSettings?: {
    brandColor?: string;
  };
  events: {
    reportUrl: string;
    pdfUrl: string | null;
    eventId: number;
    eventTitle: string;
    eventDate: string;
    qnaTimestamp: number | null;
    fiscalPeriod: string;
    fiscalYear: string;
    audioUrl?: string | null;
  }[];
  isins: never[];
};
