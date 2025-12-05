import { EventReport } from './EventReport';

export type Company = {
  id: number;
  image?: string | null;
  name: string;
  country: string;
  ticker: string;
  displayName: string;
  description: string;
  infoUrl: string | null;
  brandColor: string | null;
  events: EventReport[];
};
