import React from 'react';
import { ProductTable, SearchBar } from './Components';
import ProductProvider from './Context';

function ThinkingInReact() {
  return (
    <div style={{ textAlign: 'left' }}>
      <ProductProvider>
        <SearchBar />
        <ProductTable />
      </ProductProvider>
    </div>
  );
}

export default ThinkingInReact;
