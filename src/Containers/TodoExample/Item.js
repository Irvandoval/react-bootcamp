import React from 'react';
import { DateTime } from 'luxon';

function Item({ todo, update, remove }) {
  return (
    <div className="Todo-Item">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={(e) => update(todo.id, { completed: !todo.completed })}
      />

      <div className="Todo-Description">
        <span className={todo.completed ? 'completed' : ''}>
          {todo.description}
        </span>
        <span className="Todo-DateTo">
          {DateTime.fromISO(todo.dateTo).toLocaleString(DateTime.DATE_HUGE)}
        </span>
      </div>

      <button type="button" onClick={(e) => remove(todo.id)}>
        X
      </button>
    </div>
  );
}

export function Category({ category }) {
  return (
    <div className="Todo-Category">
      <span>{category}</span>
    </div>
  );
}

export default Item;
