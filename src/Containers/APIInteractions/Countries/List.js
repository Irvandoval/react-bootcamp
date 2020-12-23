import { Box } from 'grommet';
import React from 'react';
import Country from './Country';

function List({ countries }) {
  return (
    <Box pad="xsmall" direction="row-responsive" gap="small" wrap>
      {countries.map((country) => {
        return <Country country={country} key={country.alpha3Code} />;
      })}
    </Box>
  );
}

export default List;
