import { useEffect, useState } from "react";
import { octokit } from "../constants/api";
import debounce from "lodash.debounce";

function useUserDetails(username){
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  useEffect(()=>{
    const req = async()=>{
      if(!username || username===''){
        setData({});
        return;
      }
      setLoading(true);
      try{
        let res = await octokit.request('GET /users/{username}',{
          headers:{
            accept: 'application/vnd.github+json',
          },
          username,
        });
        setData({...res.data});
      }catch(e){
        setData({});
      }finally{
        setLoading(false);
      }
    }

    let debounced = debounce(()=>{
      req();
    },500);

    debounced();

    return () =>{
      debounced.cancel();
    }
  },[username]);

  return {data, loading};
}

export default useUserDetails;