import {
  Avatar,
  Box,
  Button,
  Form,
  FormField,
  Layer,
  Select,
  Text,
  TextInput,
} from 'grommet';
import { FormAdd, FormTrash, User } from 'grommet-icons';
import React, { useState } from 'react';

const defaultValue = {
  first_name: '',
  last_name: '',
  job: 'Leader',
  avatar: '',
};

function SidebarLayer({ onClose, handleCreate }) {
  const [value, setValue] = useState(defaultValue);

  const onSubmit = (values) => {
    handleCreate({
      ...values,
      email: `${values.first_name}.${values.last_name}@reqres.in`,
    });
  };

  return (
    <Layer
      position="left"
      full="vertical"
      modal
      onEsc={onClose}
      onClickOutside={onClose}
    >
      <Box
        background="controls"
        overflow="auto"
        fill="vertical"
        width="medium"
        pad="medium"
      >
        <Box pad={{ vertical: 'medium' }}>
          <Text size="large">Profile manager</Text>
        </Box>

        <Form
          value={value}
          onChange={(nextValue) => setValue(nextValue)}
          onReset={() => setValue(defaultValue)}
          onSubmit={(event) => onSubmit(event.value)}
        >
          <Box gap="medium">
            <FormField name="first_name" label="First Name" required>
              <TextInput name="first_name" placeholder="first name..." />
            </FormField>

            <FormField name="last_name" label="Last Name" required>
              <TextInput name="last_name" placeholder="last name..." />
            </FormField>

            <FormField name="job" label="Job Title" required>
              <Select
                name="job"
                placeholder="Select a job title"
                options={[
                  'Developer',
                  'Program Directory',
                  'Thecnical Writter',
                  'Quality Analizer',
                  'ITO Director',
                  'Devops',
                  'Automation',
                  'Requeriments Engineer',
                  'Recruiter',
                  'Leader',
                ]}
              />
            </FormField>

            <Box direction="row" gap="small">
              <FormField name="avatar" label="Avatar" required>
                <TextInput name="avatar" placeholder="avatar url..." />
              </FormField>

              {value.avatar ? (
                <Avatar src={value.avatar} />
              ) : (
                <Avatar background="neutral-4">
                  <User color="brand" />
                </Avatar>
              )}
            </Box>

            <Box direction="row" gap="medium">
              <Button type="submit" primary label="Submit" icon={<FormAdd />} />
              <Button type="reset" label="Reset" icon={<FormTrash />} />
            </Box>
          </Box>
        </Form>
      </Box>
    </Layer>
  );
}

export default SidebarLayer;
