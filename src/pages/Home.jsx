import { useEffect, useState } from 'react';
import Select from '../Components/Select';
import styles from './Home.module.css';
import { CATEGORY_OPTIONS } from '../constants/options';
import Card from '../Components/Card';
import useSearch from '../api/useSearch';

function Home(){
  const [ search, setSearch] = useState('');
  const [category, setCategory] = useState(CATEGORY_OPTIONS[1]);
  const {data} = useSearch(search, category.value);

  useEffect(()=>{
    setSearch('');
  },[category.value])


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
      <div className={styles.list}>
        {
          data.map(el => (
            <Card key={el.id} category={category.value} data={el}/>
          ))
        }
      </div>
    </>
  );
}

export default Home;