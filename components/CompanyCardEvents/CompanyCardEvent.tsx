import { EventReport } from '@/types/EventReport';
import { Inter } from '@next/font/google';
import styles from './CompanyCardEvents.module.scss';

const inter = Inter({ subsets: ['latin'] });

type CompanyCardEventProps = {
  event: EventReport;
};

export default function CompanyCardEvent({ event }: CompanyCardEventProps) {
  const formattedDate = event.eventDate ? new Date(event.eventDate).toLocaleDateString() : null;

  return (
    <li className={styles.eventRow}>
      <div>
        <p className={`${inter.className} ${styles.title}`}>{event.eventTitle}</p>
        <p className={`${inter.className} ${styles.meta}`}>
          {formattedDate && <span>{formattedDate}</span>}
          <span>{`${event.fiscalYear} ${event.fiscalPeriod}`}</span>
        </p>
      </div>

      <div className={styles.links}>
        <a
          className={`${inter.className} ${styles.link}`}
          href={event.reportUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          View report
        </a>
        {event.pdfUrl && (
          <a
            className={`${inter.className} ${styles.link}`}
            href={event.pdfUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            View PDF
          </a>
        )}
      </div>
    </li>
  );
}
