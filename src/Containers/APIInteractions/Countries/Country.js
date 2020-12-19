import React from 'react';

function Country({ country }) {
  return (
    <div
      style={{
        display: 'inline-grid',
        margin: 15,
        border: '1px solid gray',
        padding: 5,
      }}
    >
      <img src={country.flag} alt={`${country.demonym} flag`} height="30" />
      <span>
        <strong>Name: </strong>
        {country.name}
      </span>
      <span>
        <strong>Capital: </strong>
        {country.capital}
      </span>
    </div>
  );
}

export default Country;
