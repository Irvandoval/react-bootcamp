import { Box, Button, List } from 'grommet';
import { FormClose } from 'grommet-icons';
import React from 'react';

function PropExample(props) {
  const { animal, onRemove } = props;
  return (
    <Box
      align="stretch"
      border={{ color: 'secondary', size: 'large' }}
      pad="small"
      round="medium"
      elevation="medium"
      margin="xxsmall"
    >
      <Button
        type="button"
        alignSelf="end"
        margin="none"
        hoverIndicator
        icon={<FormClose />}
        onClick={() => onRemove(animal.id)}
      />

      <List
        primaryKey="key"
        secondaryKey="value"
        data={[
          { key: 'ID', value: animal.id },
          { key: 'Name', value: animal.name },
          { key: 'Group', value: animal.group },
        ]}
        margin="none"
        pad="xxsmall"
      />
    </Box>
  );
}

export default PropExample;
