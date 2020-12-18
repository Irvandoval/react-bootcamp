import React, { useContext } from 'react';
import { DateTime } from 'luxon';
import { TodosContext } from './Context';
import Item, { Category } from './Item';

const categories = [
  'Past',
  'Today',
  'Tomorrow',
  'This Week',
  'Next Week',
  'Upcoming',
  'Next Month',
  'Someday',
];

function getCategory({ months, weeks, days, hours }) {
  if (months >= 2) {
    return 'Someday';
  } else if (months >= 1) {
    return 'Next Month';
  } else if (weeks > 2) {
    return 'Upcoming';
  } else if (weeks > 1) {
    return 'Next Week';
  } else if (days >= 2) {
    return 'This Week';
  } else if (days >= 1) {
    return 'Tomorrow';
  } else if (days >= 0) {
    return 'Today';
  } else {
    return 'Past';
  }
}

function List() {
  const [todos, setTodos] = useContext(TodosContext);

  const list = todos.map((todo) => {
    const diff = DateTime.fromISO(todo.dateTo)
      .diff(DateTime.local(), ['months', 'weeks', 'days', 'hours'])
      .toObject();
    const category = getCategory(diff);

    return {
      ...todo,
      category,
    };
  });

  const remove = (id) => {
    const updatedData = todos.filter((todo) => {
      return todo.id !== id;
    });
    setTodos(updatedData);
  };

  const update = (id, values) => {
    const updatedData = todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          ...values,
        };
      }
      return todo;
    });
    setTodos(updatedData);
  };

  /**
   * We render first the categories, then we loop over
   * the todos to get the ones included in current category
   */
  return (
    <div>
      {categories.map((category) => {
        /**
         * Getting items in category
         */
        const items = list.filter((item) => {
          return item.category === category;
        });

        /**
         * No items found
         */
        if (items.length === 0) {
          return null;
        }

        /**
         * Render category, then we loop over items and render them.
         */
        return (
          <div key={category} className="Todo-Item-Container">
            <Category category={category} />
            {items.map((item) => {
              return (
                <Item
                  key={item.id}
                  todo={item}
                  update={update}
                  remove={remove}
                />
              );
            })}
          </div>
        );
      })}
    </div>
  );
}

export default List;
