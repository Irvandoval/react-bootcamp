import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const SearchContext = createContext();

const SearchProvider = (props) => {
  const [searchString, setSearchString] = useState('');

  return (
    <SearchContext.Provider value={[searchString, setSearchString]}>
      {props.children}
    </SearchContext.Provider>
  );
};

SearchProvider.propTypes = {
  children: PropTypes.node,
};

export default SearchProvider;
