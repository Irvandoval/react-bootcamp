import { CheckBox, DataTable, Form, FormField, Text, TextInput } from 'grommet';
import React, { useContext, useState } from 'react';
import { ProductContext } from './Context';
import { PRODUCTS } from './data';

export function ProductTable() {
  const [products] = useContext(ProductContext);

  return (
    <DataTable
      background={['light-2', 'default']}
      columns={[
        {
          property: 'category',
          header: 'Category',
          search: true,
        },
        {
          property: 'name',
          header: 'Name',
          primary: true,
          search: true,
          render: (product) =>
            product.stocked ? (
              product.name
            ) : (
              <Text color="secondary">{product.name}</Text>
            ),
        },
        {
          property: 'price',
          header: 'Price',
          search: true,
        },
      ]}
      data={products}
      resizeable
    />
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
    <Form>
      <FormField>
        <TextInput
          placeholder="Search..."
          value={search}
          onChange={(e) => handleSearch(e.target.value)}
        />
      </FormField>
      <FormField>
        <CheckBox
          label="Only show products in stock"
          onChange={(e) => handleChange(e.target.checked)}
          toggle
        />
      </FormField>
    </Form>
  );
}
