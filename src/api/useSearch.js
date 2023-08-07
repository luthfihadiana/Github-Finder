import { useEffect, useState } from "react";
import debounce from 'lodash.debounce';
import { octokit } from "../constants/api";

function getUrlAPI(category){
  if(category === 'user') return 'GET /search/users';
  return 'GET /search/repositories';
}

function useSearch(search, category){
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(()=>{
    const req = async()=>{
      let res = await octokit.request(getUrlAPI(category),{
        headers:{
          accept: 'application/vnd.github+json',
        },
        q: search,
        per_page: 9,
        page: 1,
      });
      setData([...res.data.items]);
    }

    let debounced = debounce(()=>{
      setLoading(true);
      if(search === ''){
        setData([]);
        setLoading(false);
        return;
      }
      req();
    },500);

    debounced();

    return () =>{
      debounced.cancel();
    }
  },[search, category]);

  return {data, loading}
}

export default useSearch;