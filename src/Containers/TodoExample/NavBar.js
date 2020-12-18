import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { DateTime } from 'luxon';
import { TodosContext } from './Context';

const now = DateTime.local().toISODate();

function NavBar() {
  const [, setTodos] = useContext(TodosContext);

  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (values) => {
    setTodos((todos) => [
      ...todos,
      {
        id: Math.floor(Math.random() * 100000),
        completed: false,
        ...values,
      },
    ]);
  };

  return (
    <div className="Todo-Navbar">
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          name="description"
          placeholder="I want to..."
          ref={register({
            required: 'Required',
          })}
        />
        {errors.description && errors.description.message}

        <input
          type="date"
          name="dateTo"
          ref={register({
            required: 'Required',
          })}
          min={now}
        />
        {errors.dateTo && errors.dateTo.message}

        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default NavBar;
