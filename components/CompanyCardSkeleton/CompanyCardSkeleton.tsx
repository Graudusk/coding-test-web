// app/components/CompanyCard/CompanyCardSkeleton.tsx
import styles from '@components/CompanyCard/CompanyCard.module.scss';
import { Inter } from '@next/font/google';
import skeletonStyles from './CompanyCardSkeleton.module.scss';
const inter = Inter({ subsets: ['latin'] });

export default function CompanyCardSkeleton() {
  return (
    <div className={`${styles.companyCard} ${skeletonStyles.skeleton}`} aria-hidden="true">
      <div className={`${styles.logo} ${skeletonStyles.logoSkeleton}`} />

      <div className={`${styles.info} ${skeletonStyles.infoSkeleton}`}>
        <div className={`${inter.className} ${skeletonStyles.titleSkeleton}`} />
        <div className={`${inter.className} ${skeletonStyles.descriptionSkeleton}`} />
      </div>

      <div className={styles.icon}>
        <div className={skeletonStyles.iconSkeleton} />
      </div>
    </div>
  );
}
