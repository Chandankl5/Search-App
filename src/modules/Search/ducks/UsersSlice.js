import {  createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  entities: {
    users: []
  },
  ui: {
    api: {
      error: null,
      loading: false
    }
  }
}

// Action Handlers
export const fetchUsersList = createAsyncThunk(
  'fetchUsers', 
  async function fetchUsers() {
    const url = 'http://www.mocky.io/v2/5ba8efb23100007200c2750c';

    const response =  await fetch(url);
    return await response.json();
  }
)

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchUsersList.pending]: (state) => {state.ui.api.loading = true},
    [fetchUsersList.rejected]: (state, action) => {state.ui.api.error = action.payload},
    [fetchUsersList.fulfilled]: (state, action) => {
      state.ui.api.loading = false
      state.entities.users = action.payload
    }
  }
})


// Selectors

export function selectUsers(state) {
  return state.users.entities.users;
}

export default usersSlice.reducer;