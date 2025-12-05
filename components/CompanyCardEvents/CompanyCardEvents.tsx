import { Company } from '@/types/Company';
import { Inter } from '@next/font/google';
import CompanyCardEvent from './CompanyCardEvent';
import styles from './CompanyCardEvents.module.scss';

const inter = Inter({ subsets: ['latin'] });

interface CompanyCardEventProps {
  company: Company;
}

export default function CompanyCardEvents({ company }: CompanyCardEventProps) {
  if (!company.events || company.events.length === 0) {
    return (
      <div className={styles.eventWrapper}>
        <p className={styles.empty}>No events available</p>
      </div>
    );
  }

  return (
    <div
      className={styles.eventWrapper}
      aria-label={`${company.displayName} events`}
      id={`company-${company.id}-events`}
    >
      <div className={styles.header}>
        <h3 className={inter.className}>Events</h3>
        <span className={styles.count}>{company.events.length}</span>
      </div>

      <ul className={styles.eventList}>
        {company.events.map(event => (
          <CompanyCardEvent key={event.eventId} event={event} />
        ))}
      </ul>
    </div>
  );
}
