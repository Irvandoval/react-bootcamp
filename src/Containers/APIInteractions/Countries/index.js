import Axios from 'axios';
import React, { useCallback, useEffect, useState } from 'react';
import List from './List';

function Countries() {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [countries, setCountries] = useState([]);
  const [searchFor, setSearchFor] = useState('name');
  const [query, setQuery] = useState('el salvador');

  const fetchCountries = useCallback(async () => {
    if (!query) {
      return;
    }

    setIsError(false);
    setIsLoading(true);

    try {
      const response = await Axios.get(
        `https://restcountries.eu/rest/v2/${searchFor}/${query}`
      );
      setCountries(response.data);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
      setIsError(true);
    }
  }, [query, searchFor]);

  useEffect(() => {
    fetchCountries();
  }, [fetchCountries]);

  const handleSearchForChange = (val) => {
    setSearchFor(val);
    setQuery(val === 'name' ? 'el salvador' : 'es');
  };

  return (
    <div style={{ margin: 40 }}>
      <h3>
        Hey look!, here is a list of countries matching your search criteria
      </h3>
      <h5>
        Using Axios for asynchronous HTTP requests and async/await promises
        handler
      </h5>
      <h6>
        <a href="https://restcountries.eu/rest/v2/all">
          https://restcountries.eu/rest/v2/all
        </a>
      </h6>

      {isError && <div style={{ color: 'red' }}>Something went wrong!...</div>}

      <div style={{ textAlign: 'left' }}>
        <select
          value={searchFor}
          onChange={(e) => handleSearchForChange(e.target.value)}
        >
          <option value="name">Name</option>
          <option value="lang">Language</option>
        </select>

        {searchFor === 'name' && (
          <input
            type="text"
            placeholder="Search..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        )}

        {searchFor === 'lang' && (
          <select value={query} onChange={(e) => setQuery(e.target.value)}>
            {[
              { lang: 'es', label: 'Spanish' },
              { lang: 'en', label: 'English' },
              { lang: 'fr', label: 'French' },
              { lang: 'de', label: 'German' },
            ].map((language) => {
              return (
                <option key={language.lang} value={language.lang}>
                  {language.label}
                </option>
              );
            })}
          </select>
        )}

        {isLoading ? <div>Loading ...</div> : <List countries={countries} />}
      </div>
    </div>
  );
}

export default Countries;
