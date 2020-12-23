import { Box, Image, List } from 'grommet';
import React from 'react';

function Country({ country }) {
  return (
    <Box
      align="stretch"
      border={{ color: 'light-3', size: 'xsmall' }}
      pad="small"
      round="medium"
      elevation="medium"
      margin="xxsmall"
      gap="small"
    >
      <Box height="xxsmall">
        <Image
          fit="contain"
          src={country.flag}
          alt={`${country.demonym} flag`}
          height="30"
        />
      </Box>
      <List
        primaryKey="key"
        secondaryKey="value"
        data={[
          { key: 'Name', value: country.name },
          { key: 'Capital', value: country.capital },
        ]}
        margin="none"
        pad="xxsmall"
      />
    </Box>
  );
}

export default Country;
