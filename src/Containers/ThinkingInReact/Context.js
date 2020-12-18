import React, { useState, createContext } from 'react';
import { PRODUCTS } from './data';

export const ProductContext = createContext();

function ProductProvider(props) {
  const [products, setProducts] = useState(PRODUCTS);

  return (
    <ProductContext.Provider value={[products, setProducts]}>
      {props.children}
    </ProductContext.Provider>
  );
}

export default ProductProvider;
