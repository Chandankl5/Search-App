import { combineReducers } from '@reduxjs/toolkit';

import usersSlice from './modules/Search/ducks/UsersSlice';
import searchSlice from './modules/Search/ducks/SearchSlice';

const rootReducer = combineReducers({
  users: usersSlice,
  search: searchSlice
});

export default rootReducer;