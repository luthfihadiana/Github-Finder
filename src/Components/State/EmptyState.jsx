import Logo from '@/assets/github.svg';
import styles from './State.module.css';


function EmptyState({
  search = '',
}){
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <img src={Logo} className={styles.logo}/>
        <p className={styles.text}>
          {search === '' ? 'Search user / repositories ....' : `Oops! No Results Found`}
        </p>
      </div>
    </div>
  );
}

export default EmptyState;