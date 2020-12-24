import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Box, Button, Form, FormField, Grid, Select, TextInput } from 'grommet';
import { FormAdd, FormClose, FormTrash } from 'grommet-icons';
import {
  addEmployee,
  updateEmployee,
  openSideForm,
  setSelectedEmployeeId,
} from '../../redux/actions';

const defaultValue = {
  firstName: '',
  lastName: '',
  jobTitle: 'Developer',
  region: 'CA',
  phoneNumber: '',
};

export const FormLayout = (props) => {
  const [value, setValue] = useState(props.initialValues);

  const onSubmit = (values) => {
    if (props.initialValues.userId !== undefined) {
      props.updateEmployee({
        id: props.initialValues.userId,
        data: values,
      });
    } else {
      props.addEmployee(values);
    }
  };
  const closeSideForm = () => {
    props.setSelectedEmployeeId(null);
    props.openSideForm(false);
  };

  return (
    <Box gridArea="main2" background="light-1" pad="medium" gap="medium" fill>
      <Button
        type="button"
        alignSelf="end"
        margin="none"
        hoverIndicator
        icon={<FormClose />}
        onClick={closeSideForm}
      />

      <Grid>
        <Box pad="none">
          <Form
            value={value}
            onChange={(nextValue) => setValue(nextValue)}
            onReset={() => setValue(defaultValue)}
            onSubmit={(event) => onSubmit(event.value)}
          >
            <Box gap="medium">
              <FormField name="firstName" label="First Name" required>
                <TextInput name="firstName" placeholder="first name..." />
              </FormField>

              <FormField name="lastName" label="Last Name" required>
                <TextInput name="lastName" placeholder="last name..." />
              </FormField>

              <FormField name="jobTitle" label="Job Title" required>
                <Select
                  name="jobTitle"
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
                  ]}
                />
              </FormField>

              <FormField name="region" label="Region" required>
                <Select
                  name="region"
                  placeholder="Select a region"
                  options={['NA', 'CA', 'SA', 'EU', 'AS', 'OC', 'AF']}
                />
              </FormField>

              <FormField name="phoneNumber" label="Phone Number" required>
                <TextInput name="phoneNumber" placeholder="phone number..." />
              </FormField>

              <Box direction="row" gap="medium">
                <Button
                  type="submit"
                  primary
                  label="Submit"
                  icon={<FormAdd />}
                />
                <Button type="reset" label="Reset" icon={<FormTrash />} />
              </Box>
            </Box>
          </Form>
        </Box>
      </Grid>
    </Box>
  );
};

FormLayout.propTypes = {
  selectedEmployee: PropTypes.object,
  addEmployee: PropTypes.func,
  updateEmployee: PropTypes.func,
  setSelectedEmployeeId: PropTypes.func,
  openSideForm: PropTypes.func,
};

const mapStateToProps = (state) => {
  const selectedEmployee = state.root.employees.find((employee) => {
    return employee.userId === state.root.selectedEmployeeId;
  });

  return {
    initialValues: selectedEmployee ? selectedEmployee : defaultValue,
  };
};

const actions = {
  addEmployee,
  updateEmployee,
  setSelectedEmployeeId,
  openSideForm,
};

export default connect(mapStateToProps, actions)(FormLayout);
