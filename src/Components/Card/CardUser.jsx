import cx from 'classnames';
import styles from './Card.module.css';

function CardUser({
  data,
}){
  const {userDetails} = data;
  console.log(userDetails);
  return(
    <div className={styles.card}>
      <div>
        <div className={styles.titleContainer}>
          <img src={data?.avatar_url} className={styles.profilePicture}/>
          <div>
            <a 
              href={userDetails?.html_url} 
              className={styles.title}
              target="_blank" 
              rel="noopener noreferrer"
            >{data?.login}</a>
            <p>{userDetails?.name}</p>
          </div>
        </div>
        <p className={styles.desc}>
          {userDetails?.bio}
        </p>
      </div>
      <div className={styles.bottomContainer}>
        <p>{userDetails?.location}</p>
        <div className={styles.statistic}>
          <p className={styles.statisticItem}>{userDetails?.public_repos} <span className={cx("material-icons", styles.icon)}>book</span></p>
          <p className={styles.statisticItem}>{userDetails?.followers} <span className={cx("material-icons", styles.icon)}>people</span></p>
        </div>
      </div>
    </div>
  );
}

export default CardUser;