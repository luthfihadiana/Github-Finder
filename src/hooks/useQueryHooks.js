import { useSelector, useDispatch } from 'react-redux';
import {
  setSearch as setSearchAction,
  setPage as setPageAction,
  setCategory as setCategoryAction,
} from '../reducers/searchsReducers';

function useQueryHooks(){
  const state = useSelector((state)=> state.searchs);
  const dispatch = useDispatch();

  const setPage = (val) =>{
    dispatch(setPageAction(val));
  }

  const setSearch = (val) =>{
    dispatch(setSearchAction(val));
  }

  const setCategory = (val) =>{
    dispatch(setCategoryAction(val))
  }

  return {
    state,
    setPage,
    setSearch,
    setCategory,
  };
}

export default useQueryHooks;