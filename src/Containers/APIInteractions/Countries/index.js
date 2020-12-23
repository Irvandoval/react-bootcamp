import Axios from 'axios';
import {
  Anchor,
  Box,
  Form,
  Grid,
  Heading,
  Select,
  Text,
  TextInput,
} from 'grommet';
import React, { useCallback, useEffect, useState } from 'react';
import Spinner from '../../../Components/Grommet/Spinner';
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

  useEffect(() => {
    console.log('Hey i mounted because you selected this tab');
    return () => {
      console.log('You selected the other tab. Goodbye!');
    };
  }, []);

  const handleSearchForChange = (val) => {
    setSearchFor(val);
    setQuery(val === 'name' ? 'el salvador' : 'es');
  };

  return (
    <Box pad="medium" gap="medium">
      <Heading level="4" margin="none" color="controls">
        Hey look!, here is a list of countries matching your search criteria
      </Heading>

      <Heading level="5" margin="none" color="controls">
        Using Axios for asynchronous HTTP requests and async/await promises
        handler
      </Heading>

      <Heading level="6" margin="none" color="controls">
        <Anchor
          href="https://restcountries.eu/rest/v2/all"
          label="https://restcountries.eu/rest/v2/all"
        />
      </Heading>

      {isError && <Text color="status-error">Something went wrong!...</Text>}

      <Grid>
        <Box pad="none">
          <Form>
            <Box direction="row" gap="medium">
              <Select
                value={searchFor}
                onChange={({ value }) => handleSearchForChange(value)}
                options={[
                  { key: 'name', label: 'Name' },
                  { key: 'lang', label: 'Language' },
                ]}
                labelKey="label"
                valueKey={{ key: 'key', reduce: true }}
              />

              {searchFor === 'name' && (
                <TextInput
                  placeholder="Search..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                />
              )}

              {searchFor === 'lang' && (
                <Select
                  value={query}
                  onChange={({ value }) => setQuery(value)}
                  options={[
                    { lang: 'es', label: 'Spanish' },
                    { lang: 'en', label: 'English' },
                    { lang: 'fr', label: 'French' },
                    { lang: 'de', label: 'German' },
                  ]}
                  labelKey="label"
                  valueKey={{ key: 'lang', reduce: true }}
                />
              )}
            </Box>
          </Form>

          {isLoading ? <Spinner /> : <List countries={countries} />}
        </Box>
      </Grid>
    </Box>
  );
}

export default Countries;
