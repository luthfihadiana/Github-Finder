import Logo from '@/assets/github.svg';
import styles from './State.module.css';


function ErrorState({
  error={},
}){
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <img src={Logo} className={styles.logo}/>
        <p className={styles.text}>
          {error.message}
        </p>
      </div>
    </div>
  );
}

export default ErrorState;