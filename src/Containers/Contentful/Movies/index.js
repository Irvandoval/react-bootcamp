import React, { useState, useCallback, useEffect, useContext } from 'react';
import BaseList2 from '../Components/BaseList2';
import { SearchContext } from '../Context/SearchContext';
import { getEntries } from '../sdk';

function Movies() {
  const [movies, setMovies] = useState([]);
  const [searchString] = useContext(SearchContext);

  const retrieveMovies = useCallback(async () => {
    const entries = await getEntries({
      content_type: 'movies',
      'fields.title[match]': searchString,
    });

    console.log(
      `%cMovies fetched using... "${searchString}":`,
      'background: #ccc; color: #444;',
      entries
    );

    setMovies(entries);
  }, [searchString]);

  useEffect(() => {
    retrieveMovies();
  }, [retrieveMovies]);

  return <BaseList2 items={movies} />;
}

export default Movies;
