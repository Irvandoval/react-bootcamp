import { Box, Grid } from 'grommet';
import React from 'react';
import Item from './Item';

function BaseList({ items }) {
  return (
    <Box pad="xxsmall">
      <Grid
        gap="medium"
        rows="large"
        columns={{ count: 'fit', size: ['small', 'medium'] }}
      >
        {items.map((item) => (
          <Item item={item} key={item.id} />
        ))}
      </Grid>
    </Box>
  );
}

export default BaseList;
