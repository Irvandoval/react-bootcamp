import React from 'react';

function PropExample({ animal }) {
  return (
    <div
      style={{
        display: 'inline-grid',
        margin: 15,
        border: '1px solid gray',
        padding: 5,
      }}
    >
      <span>
        <strong>ID</strong>
        {`: `}
        {animal.id}
      </span>
      <span>
        <strong>Name</strong>
        {`: `}
        {animal.name}
      </span>
      <span>
        <strong>Group</strong>
        {`: `}
        {animal.group}
      </span>
    </div>
  );
}

export default PropExample;
