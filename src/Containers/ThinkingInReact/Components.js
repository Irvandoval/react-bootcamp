import React, { useContext, useState } from 'react';
import { ProductContext } from './Context';
import { PRODUCTS } from './data';

export function ProductCategoryRow({ category }) {
  return (
    <tr>
      <th colSpan="2">{category}</th>
    </tr>
  );
}

export function ProductRow({ product }) {
  const name = product.stocked ? (
    product.name
  ) : (
    <span style={{ color: 'red' }}>{product.name}</span>
  );

  return (
    <tr>
      <td>{name}</td>
      <td>{product.price}</td>
    </tr>
  );
}

export function ProductTable() {
  const [products] = useContext(ProductContext);
  const rows = [];
  let lastCategory = null;

  products.forEach((product) => {
    if (product.category !== lastCategory) {
      rows.push(
        <ProductCategoryRow
          key={product.category}
          category={product.category}
        />
      );
    }
    rows.push(<ProductRow key={product.name} product={product} />);
    lastCategory = product.category;
  });

  return (
    <table width="280">
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}

export function SearchBar() {
  const [, setProducts] = useContext(ProductContext);
  const [search, setSearch] = useState('');
  const [checked, setChecked] = useState(false);

  const handleSearch = (query) => {
    setSearch(query);
    filter({ search: query, checked });
  };

  const handleChange = (chk = false) => {
    setChecked(chk);
    filter({ search, checked: chk });
  };

  const filter = (criteria) => {
    const results = PRODUCTS.filter((product) => {
      const rs = product.name.toLowerCase().includes(criteria.search);
      if (criteria.checked) {
        return rs && product.stocked;
      }
      return rs;
    });
    setProducts(results);
  };

  return (
    <form>
      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(e) => handleSearch(e.target.value)}
      />
      <p>
        <input
          type="checkbox"
          onChange={(e) => handleChange(e.target.checked)}
        />{' '}
        Only show products in stock
      </p>
    </form>
  );
}
