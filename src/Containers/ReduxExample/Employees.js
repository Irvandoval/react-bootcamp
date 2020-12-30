import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Box, Button, DataTable, Heading } from 'grommet';
import { Actions, FormClose, FormEdit, UserAdd } from 'grommet-icons';
import {
  openSideForm,
  setSelectedEmployeeId,
  removeEmployee,
} from '../../redux/actions';

export const Employees = (props) => {
  const openSideForm = (id) => {
    props.setSelectedEmployeeId(id);
    props.openSideForm(true);
  };

  return (
    <Box background="light-1" pad="medium" gap="medium" fill>
      <Heading level="3" margin="none" color="brand">
        Hey look!, Here's a list of employees
      </Heading>

      <Button
        onClick={() => openSideForm(null)}
        label="Create"
        alignSelf="end"
        icon={<UserAdd />}
      />

      <DataTable
        background={['light-4', 'controls']}
        columns={[
          { property: 'userId', header: 'ID', primary: true },
          { property: 'jobTitle', header: 'Job Title' },
          { property: 'firstName', header: 'First Name' },
          { property: 'lastName', header: 'Last Name' },
          { property: 'employeeCode', header: 'Code' },
          { property: 'region', header: 'Region' },
          { property: 'phoneNumber', header: 'Phone Number' },
          { property: 'emailAddress', header: 'Email' },
          {
            property: 'actions',
            header: <Actions />,
            render: (employee) => (
              <Box pad={{ vertical: 'xsmall' }} direction="row">
                <Button
                  type="button"
                  margin="none"
                  hoverIndicator
                  icon={<FormEdit color="brand" />}
                  onClick={() => openSideForm(employee.userId)}
                  plain
                  color="status-critical"
                />
                <Button
                  type="button"
                  margin="none"
                  hoverIndicator
                  icon={<FormClose color="brand" />}
                  onClick={() => props.removeEmployee(employee.userId)}
                  plain
                  color="status-critical"
                />
              </Box>
            ),
          },
        ]}
        data={props.employees}
        margin="medium"
      />
    </Box>
  );
};

Employees.propTypes = {
  employees: PropTypes.array,
  setSelectedEmployeeId: PropTypes.func,
  openSideForm: PropTypes.func,
};

const mapStateToProps = (state) => ({
  employees: state.root.employees,
});

const actions = {
  openSideForm,
  setSelectedEmployeeId,
  removeEmployee,
};

export default connect(mapStateToProps, actions)(Employees);
