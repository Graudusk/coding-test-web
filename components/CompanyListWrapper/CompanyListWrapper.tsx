import CompanyList from '@/components/CompanyList/CompanyList';
import { getCompanies } from '@/lib/api';
import { ReactElement } from 'react';

export const CompanyListWrapper = async (): Promise<ReactElement> => {
  const companies = await getCompanies();
  return <CompanyList companies={companies} />;
};
