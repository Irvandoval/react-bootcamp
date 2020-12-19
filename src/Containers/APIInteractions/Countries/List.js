import React from 'react';
import Country from './Country';

function List({ countries }) {
  return (
    <div>
      {countries.map((country) => {
        return <Country country={country} key={country.alpha3Code} />;
      })}
    </div>
  );
}

export default List;
