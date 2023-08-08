import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useMemo } from "react";
import debounce from 'lodash.debounce';
import {
  fetchSearch,
} from '@/redux/reducers/searchsReducers';

function useSearch(){
  const state = useSelector((state)=> state.searchs);
  const dispatch = useDispatch();
  const {
    page,
    search,
    data,
    error,
    loading,
    total,
  } = state;

  useEffect(()=>{

    let debounced = debounce(()=>{
      if(search === '')return;
      dispatch(fetchSearch());
    },500);

    debounced();

    return () =>{
      debounced.cancel();
    }
  },[search, dispatch, page]);

  const totalPage = useMemo(()=> Math.floor(total/9),[total]);

  return {data, totalPage, loading, error}
}

export default useSearch;