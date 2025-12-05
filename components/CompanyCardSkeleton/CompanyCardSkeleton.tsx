import cardStyles from '@components/CompanyCard/CompanyCard.module.scss';
import { Inter } from '@next/font/google';
import skeletonStyles from './CompanyCardSkeleton.module.scss';
const inter = Inter({ subsets: ['latin'] });

export default function CompanyCardSkeleton() {
  return (
    <div className={`${cardStyles.companyCard} ${skeletonStyles.skeleton}`} aria-hidden="true">
      <div className={cardStyles.companyCardContent}>
        <div className={skeletonStyles.logoSkeleton} />

        <div className={skeletonStyles.infoSkeleton}>
          <div className={`${inter.className} ${skeletonStyles.titleSkeleton}`} />
          <div className={`${inter.className} ${skeletonStyles.descriptionSkeleton}`} />
        </div>

        <div className={`${cardStyles.toggleButton} ${skeletonStyles.buttonSkeleton}`} />
      </div>
    </div>
  );
}
