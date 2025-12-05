'use client';

import { Company } from '@/types/Company';
import { Inter } from '@next/font/google';
import { useState } from 'react';
import CompanyCardEvents from '../CompanyCardEvents/CompanyCardEvents';
import CompanyCardLogo from '../CompanyCardLogo/CompanyCardLogo';
import styles from './CompanyCard.module.scss';
const inter = Inter({ subsets: ['latin'] });

interface CompanyCardProps {
  company: Company;
}

export default function CompanyCard({ company }: CompanyCardProps) {
  const [open, setOpen] = useState(false);
  const toggleEvents = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    setOpen(open => !open);
  };
  return (
    <div className={`${styles.companyCard} ${open ? styles.open : ''}`} key={company.id}>
      <div className={styles.companyCardContent}>
        <CompanyCardLogo
          image={company.image || ''}
          brandColor={company.brandColor ?? '#fff'}
          displayName={company.displayName}
        />
        <div className={styles.info}>
          <h2 className={inter.className}>{company.displayName}</h2>
          <p className={`${inter.className} ${styles.description}`}>{company.description}</p>
          {company.infoUrl && (
            <div className={styles.links}>
              <a className={inter.className} href={company.infoUrl} target="_blank" rel="noopener noreferrer">
                Company info
              </a>
            </div>
          )}
        </div>
        <button
          type="button"
          className={`${inter.className} ${styles.toggleButton}`}
          aria-expanded={open}
          aria-controls={`company-${company.id}-events`}
          onClick={toggleEvents}
        >
          {open ? 'Hide' : 'Show more'}
        </button>
      </div>
      {open && <CompanyCardEvents company={company} />}
    </div>
  );
}
