import { Box, Nav, Text, TextInput } from 'grommet';
import { Search } from 'grommet-icons';
import React, { useContext } from 'react';
import { SearchContext } from '../Context/SearchContext';

function SearchBar() {
  const [, setSearchString] = useContext(SearchContext);

  return (
    <Nav direction="row" background="brand" pad="medium">
      <Box direction="row" align="center" gap="medium">
        <Text>ReactJs / Contentful</Text>
      </Box>

      <TextInput
        icon={<Search />}
        placeholder="search ..."
        onChange={(event) => setSearchString(event.target.value || '')}
      />
    </Nav>
  );
}

export default SearchBar;
