import {createSlice,createAsyncThunk} from '@reduxjs/toolkit';
import { CATEGORY_OPTIONS } from '../constants/options';
import { octokit } from "../constants/api";

const initialState = {
  search: '',
  page: 1,
  category: CATEGORY_OPTIONS[0],
  data: [],
  loading: false,
  error: null,
  total: 0,
  memo:{},
}

function getUrlAPI(category){
  if(category === 'user') return 'GET /search/users';
  return 'GET /search/repositories';
}

export const fetchSearch = createAsyncThunk(
  'searchs/fetchSearch',
  async (_ ,{getState}) => {
    const {search, page, category, memo} = getState().searchs;
    let key = `q=${search}&page=${page}&category=${category.value}`;
    if(memo[key]) return memo[key];
    try{
      let res = await octokit.request(getUrlAPI(category.value),{
        headers:{
          accept: 'application/vnd.github+json',
        },
        q: search,
        per_page: 9,
        page,
      });
      if(category.value !== 'user') return res.data;
      const promises = res.data.items.map(el => octokit.request('GET /users/{username}',{
        headers:{
          accept: 'application/vnd.github+json',
        },
        username: el.login,
      }));
      const respons = await Promise.all(promises);
      const datas = respons.map(el => el.data);
      return {
        ...res.data,
        items: res.data.items.map((el,idx)=>({...el, userDetails: datas[idx]}))
      };
    }catch(e){
      return e?.message;
    }
  }
)

const searchsSlice = createSlice({
  name: 'searchs',
  initialState,
  reducers:{
    setSearch(state, action){
      state.search = action.payload;
      state.page = 1;
      if(action.payload === ''){
        state.data = [];
        state.total = 0;
        state.error = null;
      }
    },
    setDefaultSearch(state){
      state.search = '';
      state.page = 1;
    },
    setCategory(state, action){
      state.category = action.payload,
      state.page = 1;
      state.search = '';
      state.data = [];
      state.total = 0;
      state.error = null;
    },
    setPage(state, action){
      state.page = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSearch.pending, (state)=>{
        state.loading = true;
      })
      .addCase(fetchSearch.fulfilled, (state,action) =>{
        state.data = [
          ...action.payload.items,
        ]
        state.total = action.payload.total_count > 1000 ? 1000 : action.payload.total_count;
        state.error = null;
        state.loading = false;
        let key = `q=${state.search}&page=${state.page}&category=${state.category.value}`;
        state.memo = {...state.memo, [key]: action.payload}
      })
      .addCase(fetchSearch.rejected,(state, action)=>{
        state.error = {message:action.error.message};
        state.loading = false;
      })
  }
})

export const{
  setSearch,
  setDefaultSearch,
  setCategory,
  setPage,
} = searchsSlice.actions;

export default searchsSlice.reducer;