import styles from './Pagination.module.css';
function Pagination({
  page=1,
  setPage,
  totalPage = 1000,
}){

  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <button 
          onClick={()=>setPage(page-1)} 
          className={styles.button}
          disabled={page===1}
        >
          Previous
        </button>
        {
          page > 1 && (
            <>
              <button 
                className={styles.button} 
                onClick={()=> setPage(1)}
              >
                1
              </button>
              <span>...</span>
            </>
          )
        }
        <span className={styles.page}>{page}</span>
        {
          page < totalPage && (
            <>
              <span>...</span>
              <button 
                className={styles.button}
                onClick={()=>setPage(totalPage)}
              >
                {totalPage}
              </button>
            </>
          )
        }
        <button 
          onClick={()=>setPage(page+1)} 
          className={styles.button}
          disabled={page === totalPage}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Pagination;