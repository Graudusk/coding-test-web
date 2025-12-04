'use client';

import { Company } from '@/types/Company';
import { Inter } from '@next/font/google';
import Image from 'next/image';
import chevronIcon from 'public/chevron-right.svg';
import styles from './CompanyCard.module.scss';
const inter = Inter({ subsets: ['latin'] });

export default function CompanyCard({ company }: { company: Company }) {
  return (
    <a
      href={company.infoUrl ?? '#'}
      className={styles.companyCard}
      key={company.id}
      aria-label={`${company.displayName} (${company.ticker}) details`}
    >
      <div
        className={styles.logo}
        role="img"
        aria-label={`${company.displayName} logo`}
        style={{
          backgroundImage: `url("${company.image}")`,
          backgroundColor: company.brandColor ?? '#fff',
        }}
      ></div>
      <div className={styles.info}>
        <h3 className={inter.className}>{company.displayName}</h3>
        <p className={[inter.className, styles.description].join(' ')}>{company.description}</p>
      </div>
      <div className={styles.icon}>
        <Image src={chevronIcon} alt="" aria-hidden="true" />
      </div>
    </a>
  );
}
