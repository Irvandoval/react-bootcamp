import React from 'react';
import { DateTime } from 'luxon';
import { Box, Button, CheckBox, Heading, Text } from 'grommet';
import { FormClose } from 'grommet-icons';

function Item({ todo, update, remove }) {
  return (
    <Box
      align="stretch"
      border={{ color: 'dark-1', size: 'xxsmall' }}
      pad={{ vertical: 'small', horizontal: 'medium' }}
      round="medium"
      elevation="medium"
      margin="xsmall"
      direction="row"
      gap="medium"
    >
      <CheckBox
        checked={todo.completed}
        onChange={() => update(todo.id, { completed: !todo.completed })}
      />

      <Box gap="xxsmall">
        <Text
          style={
            todo.completed
              ? {
                  textDecorationLine: 'line-through',
                  fontStyle: 'italic',
                  fontWeight: 'bolder',
                }
              : {}
          }
        >
          {todo.description}
        </Text>
        <Text color="dark-3" size="small" style={{ fontStyle: 'italic' }}>
          {DateTime.fromISO(todo.dateTo).toLocaleString(DateTime.DATE_HUGE)}
        </Text>
      </Box>

      <Button
        type="button"
        alignSelf="end"
        margin="none"
        hoverIndicator
        icon={<FormClose />}
        onClick={() => remove(todo.id)}
      />
    </Box>
  );
}

export function Category({ category }) {
  return (
    <Heading color="dark-1" level="4" margin="xxsmall">
      <span>{category}</span>
    </Heading>
  );
}

export default Item;
