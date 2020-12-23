import React, { useContext } from 'react';
import { TodosContext } from './Context';
import { Box, Button, DateInput, Form, FormField, Grid } from 'grommet';

function NavBar() {
  const [, setTodos] = useContext(TodosContext);

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
    <Grid>
      <Box pad="none">
        <Form onSubmit={({ value }) => onSubmit(value)}>
          <Box direction="row" gap="medium">
            <FormField
              name="description"
              label="Description"
              placeholder="I want to..."
              required
            />

            <FormField label="Date To">
              <DateInput name="dateTo" format="mm/dd/yyyy" />
            </FormField>

            <Box direction="row" gap="medium">
              <Button type="submit" primary label="Add" />
            </Box>
          </Box>
        </Form>
      </Box>
    </Grid>
  );
}

export default NavBar;
