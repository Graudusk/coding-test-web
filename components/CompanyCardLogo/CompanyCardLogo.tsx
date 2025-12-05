import styles from './CompanyCardLogo.module.scss';

interface CompanyCardLogoProps {
  brandColor?: string;
  displayName: string;
  image: string;
}

export default function CompanyCardLogo({ brandColor, displayName, image }: CompanyCardLogoProps) {
  return (
    <div
      className={styles.logo}
      style={{
        backgroundColor: brandColor ?? '#fff',
      }}
      aria-label={`${displayName} logo`}
    >
      <div
        className={styles.image}
        role="img"
        style={{
          backgroundImage: `url("${image}")`,
        }}
      ></div>
    </div>
  );
}
