import { useSelector, useDispatch } from 'react-redux';
import {
  setSearch as setSearchAction,
  setPage as setPageAction,
  setCategory as setCategoryAction,
} from '../redux/reducers/searchsReducers';

function useQueryHooks(){
  const state = useSelector((state)=> state.searchs);
  const {page, search, category} = state;
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
    state:{page,search,category},
    setPage,
    setSearch,
    setCategory,
  };
}

export default useQueryHooks;