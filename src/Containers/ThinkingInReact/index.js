import { Box } from 'grommet';
import React from 'react';
import { ProductTable, SearchBar } from './Components';
import ProductProvider from './Context';

function ThinkingInReact() {
  return (
    <Box
      background="light-1"
      border={{ color: 'brand', size: 'large' }}
      pad="medium"
    >
      <ProductProvider>
        <SearchBar />
        <ProductTable />
      </ProductProvider>
    </Box>
  );
}

export default ThinkingInReact;
