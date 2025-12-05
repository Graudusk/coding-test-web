import { normalizeCompany } from './normalizeCompany';
import { RawCompany } from '@/types/RawCompany';

const baseCompany: RawCompany = {
  companyId: 1,
  companyName: 'Acme',
  companyCountry: 'US',
  companyTicker: 'ACM',
  displayName: 'Acme Corp',
  description: 'A sample company',
  infoUrl: 'https://example.com',
  liveUrl: 'https://example.com',
  iconUrl: 'https://example.com/icon.png',
  reportingCurrency: 'USD',
  events: [],
  isins: [],
};

describe('normalizeCompany', () => {
  it('maps core fields and prefers the icon url as image', () => {
    const normalized = normalizeCompany({
      ...baseCompany,
      colorSettings: { brandColor: '#123456' },
    });

    expect(normalized).toEqual({
      id: 1,
      image: 'https://example.com/icon.png',
      name: 'Acme',
      country: 'US',
      ticker: 'ACM',
      displayName: 'Acme Corp',
      description: 'A sample company',
      infoUrl: 'https://example.com',
      brandColor: '#123456',
      events: [],
    });
  });

  it('falls back to logoDarkUrl when icon is missing and returns nulls for absent optional fields', () => {
    const normalized = normalizeCompany({
      ...baseCompany,
      iconUrl: null,
      logoDarkUrl: 'https://example.com/dark.png',
      logoLightUrl: 'https://example.com/light.png',
      infoUrl: undefined as unknown as string,
      colorSettings: undefined,
    });

    expect(normalized.image).toBe('https://example.com/dark.png');
    expect(normalized.infoUrl).toBeNull();
    expect(normalized.brandColor).toBeNull();
  });
});
