import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { SearchInput } from './modules/Search/components/SearchInput';
import { SearchResults } from './modules/Search/components/SearchResults';
import { fetchUsersList } from './modules/Search/ducks/UsersSlice';

import './App.css';

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    // Fetch users List on Mount
    dispatch(fetchUsersList());
  }, [])

  return (
    <div className="App">
      <SearchInput />
      <SearchResults />
    </div>
  );
}

export default App;
