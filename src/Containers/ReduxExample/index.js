import React from 'react';
import PropTypes from 'prop-types';
import { Box, Grid, Main } from 'grommet';
import { connect } from 'react-redux';
import Employees from './Employees';
import FormLayout from './Form';

function ReduxExample(props) {
  return (
    <Main pad="medium">
      <Grid>
        <Box align="stretch" pad={{ horizontal: 'large' }} margin={{top: '200px'}}>
          <Grid
            areas={[
              { name: 'main1', start: [0, 0], end: [0, 0] },
              { name: 'main2', start: [1, 0], end: [1, 0] },
            ]}
            columns={['auto', 'auto']}
            rows={['auto']}
            gap="small"
            pad="medium"
            fill
          >
            <Employees />
            {props.formIsOpen && <FormLayout key={props.selectedEmployeeId} />}
          </Grid>
        </Box>
      </Grid>
    </Main>
  );
}

ReduxExample.propTypes = {
  formIsOpen: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  formIsOpen: state.formIsOpen,
  selectedEmployeeId: state.selectedEmployeeId
    ? state.selectedEmployeeId
    : 'none',
});

const actions = {};

export default connect(mapStateToProps, actions)(ReduxExample);
