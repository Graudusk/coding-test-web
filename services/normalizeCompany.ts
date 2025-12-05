import { Company } from '@/types/Company';
import { RawCompany } from '@/types/RawCompany';

export function normalizeCompany(company: RawCompany): Company {
  const image = company.iconUrl ?? company.logoDarkUrl ?? company.logoLightUrl ?? null;

  return {
    id: company.companyId,
    image,
    name: company.companyName,
    country: company.companyCountry,
    ticker: company.companyTicker,
    displayName: company.displayName,
    description: company.description,
    infoUrl: company.infoUrl ?? null,
    brandColor: company.colorSettings?.brandColor ?? null,
    events: company.events,
  };
}
