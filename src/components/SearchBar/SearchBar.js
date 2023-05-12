import React from 'react';
import AutoSuggest from './AutoSuggest';

function SearchBar() {
  return (
    <div>
      <input type="text" placeholder="Search" />
      <AutoSuggest />
    </div>
  );
}

export default SearchBar;
