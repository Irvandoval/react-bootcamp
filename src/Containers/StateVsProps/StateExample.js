import React, { useState } from 'react';
import PropExample from './PropExample';
import { useForm } from 'react-hook-form';

function StateExample() {
  const [animals, setAnimals] = useState([
    { id: 70440, name: 'Cow', group: 'Mammal' },
    { id: 8184, name: 'Turtle', group: 'Reptile' },
    { id: 31452, name: 'Snake', group: 'Reptile' },
    { id: 95305, name: 'Shark', group: 'Fish' },
    { id: 84541, name: 'Eaggle', group: 'Bird' },
    { id: 73906, name: 'Bear', group: 'Mammal' },
  ]);
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (values) => {
    setAnimals((oldAnimals) => [
      ...oldAnimals,
      { id: Math.floor(Math.random() * 100000), ...values },
    ]);
  };

  return (
    <div>
      <h2>Hey look!, here's a collection of animals</h2>

      {animals.map((animal) => {
        return <PropExample key={animal.id.toString()} animal={animal} />;
      })}

      <h3>Wanna add another animal?</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          name="name"
          ref={register({
            required: 'Required',
          })}
        />
        {errors.name && errors.name.message}

        <select
          name="group"
          ref={register({
            required: 'Required',
          })}
        >
          <option value="">----</option>
          {['Mammal', 'Reptile', 'Fish', 'Bird', 'Insect'].map((group) => {
            return (
              <option key={group} value={group}>
                {group}
              </option>
            );
          })}
        </select>
        {errors.group && errors.group.message}

        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default StateExample;
