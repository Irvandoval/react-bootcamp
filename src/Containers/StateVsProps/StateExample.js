import React, { useState } from 'react';
import PropExample from './PropExample';
import { Box, Button, Form, FormField, Grid, Heading, Select } from 'grommet';

function StateExample() {
  const [animals, setAnimals] = useState([
    { id: 70440, name: 'Cow', group: 'Mammal' },
    { id: 8184, name: 'Turtle', group: 'Reptile' },
    { id: 31452, name: 'Snake', group: 'Reptile' },
    { id: 95305, name: 'Shark', group: 'Fish' },
    { id: 84541, name: 'Eaggle', group: 'Bird' },
    { id: 73906, name: 'Bear', group: 'Mammal' },
  ]);

  const onSubmit = (values) => {
    setAnimals((oldAnimals) => [
      ...oldAnimals,
      { id: Math.floor(Math.random() * 100000), ...values },
    ]);
  };

  const onRemove = (id) => {
    setAnimals((oldAnimals) =>
      oldAnimals.filter((animal) => {
        return animal.id !== id;
      })
    );
  };

  return (
    <div>
      <Heading margin="none" color="light-1" level="3">
        Hey look!, here's a collection of animals
      </Heading>

      <Box pad="xsmall" direction="row-responsive" gap="medium" wrap>
        {animals.map((animal) => {
          return (
            <PropExample
              key={animal.id.toString()}
              animal={animal}
              onRemove={onRemove}
            />
          );
        })}
      </Box>

      <Heading color="light-1" level="4">
        Wanna add another animal?
      </Heading>

      <Grid>
        <Box pad="none">
          <Form onSubmit={({ value }) => onSubmit(value)}>
            <Box direction="row" gap="medium">
              <FormField
                name="name"
                label="Name"
                placeholder="name..."
                required
              />

              <FormField
                label="Group"
                name="group"
                placeholder="Select a group"
                component={Select}
                options={[
                  'Mammal',
                  'Reptile',
                  'Fish',
                  'Bird',
                  'Insect',
                  'Amphibian',
                  'Dinosaur',
                  'Sea Reptile',
                  'Politician',
                ]}
                required
              />

              <Box direction="row" gap="medium">
                <Button type="submit" primary label="Add" />
                <Button type="reset" label="Reset" />
              </Box>
            </Box>
          </Form>
        </Box>
      </Grid>
    </div>
  );
}

export default StateExample;
