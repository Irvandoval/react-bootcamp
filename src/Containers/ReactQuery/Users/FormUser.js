import {
  Box,
  Button,
  CheckBox,
  Form,
  FormField,
  Heading,
  MaskedInput,
  RadioButtonGroup,
  TextInput,
} from 'grommet';
import { Close, UserAdd } from 'grommet-icons';
import React from 'react';

function FormUser({ onSubmit, onClose }) {
  return (
    <Box fill="vertical" overflow="auto" width="medium" pad="medium">
      <Form
        onSubmit={onSubmit}
        // onChange={(prop) => console.log('onChange', prop)}
      >
        <Box flex={false} direction="row" justify="between">
          <Heading level={3} margin="none">
            <UserAdd size="medium" color="harmonie-3" /> Add User
          </Heading>
          <Button icon={<Close />} onClick={onClose} />
        </Box>

        <Box flex="grow" overflow="auto" pad={{ vertical: 'medium' }}>
          <FormField name="name" label="Name">
            <TextInput name="name" />
          </FormField>

          <FormField label="Email" name="email" required>
            <MaskedInput
              name="email"
              mask={[
                { regexp: /^[\w\-_.]+$/, placeholder: 'example' },
                { fixed: '@' },
                { regexp: /^[\w]+$/, placeholder: 'my' },
                { fixed: '.' },
                { regexp: /^[\w]+$/, placeholder: 'com' },
              ]}
            />
          </FormField>

          <FormField name="gender">
            <RadioButtonGroup name="gender" options={['Male', 'Female']} />
          </FormField>

          <FormField name="status">
            <CheckBox name="status" label="Active?" />
          </FormField>
        </Box>

        <Box
          flex={false}
          as="footer"
          align="start"
          direction="row"
          gap="medium"
        >
          <Button type="submit" primary label="Submit" />
          <Button type="reset" label="Reset" />
        </Box>
      </Form>
    </Box>
  );
}

export default FormUser;
