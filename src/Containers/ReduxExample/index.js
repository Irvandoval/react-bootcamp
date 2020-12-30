import React from 'react';
import PropTypes from 'prop-types';
import { Box, Layer } from 'grommet';
import { connect } from 'react-redux';
import Employees from './Employees';
import FormLayout from './Form';
import { openSideForm, setSelectedEmployeeId } from '../../redux/actions';

function ReduxExample(props) {
  const closeSideForm = () => {
    props.setSelectedEmployeeId(null);
    props.openSideForm(false);
  };

  return (
    <Box align="stretch" pad={{ horizontal: 'large' }}>
      <Employees />

      {props.formIsOpen && (
        <Layer
          position="right"
          full="vertical"
          modal
          onClickOutside={closeSideForm}
          onEsc={closeSideForm}
        >
          <FormLayout key={props.selectedEmployeeId} />
        </Layer>
      )}
    </Box>
  );
}

ReduxExample.propTypes = {
  formIsOpen: PropTypes.bool,
  setSelectedEmployeeId: PropTypes.func,
  openSideForm: PropTypes.func,
};

const mapStateToProps = (state) => ({
  formIsOpen: state.root.formIsOpen,
  selectedEmployeeId: state.root.selectedEmployeeId
    ? state.root.selectedEmployeeId
    : 'none',
});

const actions = {
  setSelectedEmployeeId,
  openSideForm,
};

export default connect(mapStateToProps, actions)(ReduxExample);
