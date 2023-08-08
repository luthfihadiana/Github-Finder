import Logo from '@/assets/github.svg';
import styles from './LoadingIndicator.module.css';

export default function LoadingIndicator() {
  return (
    <div className={styles.loading}>
      <div className={styles.spinner}>
        <figure>
          <img src={Logo} alt="Icon Loading" />
          <svg viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="40" />
          </svg>
        </figure>
      </div>
    </div>
  );
}