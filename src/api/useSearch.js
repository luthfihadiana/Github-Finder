import { useEffect, useMemo, useState } from "react";
import debounce from 'lodash.debounce';
import { octokit } from "../constants/api";

function getUrlAPI(category){
  if(category === 'user') return 'GET /search/users';
  return 'GET /search/repositories';
}

function useSearch(search, category, page){
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [total, setTotal] = useState(0);

  useEffect(()=>{
    const req = async()=>{
      setLoading(true);
      try{
        let res = await octokit.request(getUrlAPI(category),{
          headers:{
            accept: 'application/vnd.github+json',
          },
          q: search,
          per_page: 9,
          page,
        });
        setData([...res.data.items]);
        // setTotal(res.data.total_count > 1000 ? 1000 : res.data.total_count);
        setTotal(res.data.total_count);
        setError(null);
      }catch(e){
        setError({message: e?.message});
        setData([]);
      }finally{
        setLoading(false);
      }
    }

    let debounced = debounce(()=>{
      if(search === ''){
        setLoading(true);
        setData([]);
        setLoading(false);
        setTotal(0);
        return;
      }
      req();
    },500);

    debounced();

    return () =>{
      debounced.cancel();
    }
  },[search, category, page]);

  const totalPage = useMemo(()=> Math.floor(total/9),[total]);

  return {data, totalPage, loading, error}
}

export default useSearch;