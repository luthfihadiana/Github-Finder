import Select from '../Components/Select';
import styles from './Home.module.css';
import { CATEGORY_OPTIONS } from '../constants/options';
import Card from '../Components/Card';
import useSearch from '../api/useSearch';
import Pagination from '../Components/Pagination';
import LoadingIndicator from '../Components/LoadingIndicator';
import EmptyState from '../Components/EmptyState';
import ErrorState from '../Components/ErrorState';
import useQueryHooks from '../hooks/useQueryHooks';

function Home(){
  const {
    state,
    setPage,
    setCategory,
    setSearch,
  } = useQueryHooks();

  const {search, page, category} = state;

  const {data, loading, totalPage, error} = useSearch();

  return (
    <>
      <div className={styles.search}>
        <input 
          type="text" 
          placeholder="Search users or repositories..." 
          className={styles.search}
          value={search} 
          onChange={(e) =>setSearch(e.target.value.toLowerCase())}
        />
        <Select 
          className={styles.category} 
          options={CATEGORY_OPTIONS}
          value={category}
          onChange={(option) => setCategory(option)}
        />
      </div>
      {
        error && <ErrorState error={error}/>}
      {
        !data.length && !loading && !error && <EmptyState search={search}/>
      }
      {
        loading ? (
          <div className={styles.loadingContainer}>
            <LoadingIndicator/>
          </div>
        ) : (
          <div className={styles.list}>
            {
              data.map(el => (
                <Card key={el.id} category={category.value} data={el}/>
              ))
            }
          </div>
        )
      }
      {
        totalPage!== 0 && !loading && !error && 
          <Pagination page={page} setPage={setPage} totalPage={totalPage}/>
      }
    </>
  );
}

export default Home;