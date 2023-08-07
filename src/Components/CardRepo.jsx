import cx from 'classnames';
import styles from './card.module.css';

function CardRepo({
  data,
}){
  return(
    <div className={cx(styles.card, styles.repo)}>
      <div>
        <div className={styles.titleContainer}>
          <img src={data?.owner?.avatar_url} className={styles.profilePicture}/>
          <a href={data?.html_url} className={styles.title}>{data?.full_name}</a>
        </div>
        <p className={styles.desc}>
          {data?.description}
        </p>
      </div>
      <div className={styles.bottomContainer}>
        <div className={styles.statistic}>
          <p className={styles.statisticItem}>{data?.watchers_count} <span className={cx("material-icons", styles.icon)}>visibility</span></p>
          <p className={styles.statisticItem}>{data?.stargazers_count} <span className={cx("material-icons", styles.icon)}>star_outline</span></p>
        </div>
        <p>Updated on 16, July 2024</p>
      </div>
    </div>
  );
}

export default CardRepo;