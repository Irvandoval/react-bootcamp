import { Box, Grid } from 'grommet';
import React from 'react';
import CalcStateExample from './CalcStateExample';
import ClassCalcStateExample from './ClassCalcStateExample';
import StateExample from './StateExample';

function StateVsProps() {
  return (
    <Grid>
      <Box align="stretch" pad={{ horizontal: 'large' }}>
        <Grid
          areas={[
            { name: 'main1', start: [0, 0], end: [1, 0] },
            { name: 'main2', start: [0, 1], end: [0, 1] },
            { name: 'main3', start: [1, 1], end: [1, 1] },
          ]}
          columns={['large', 'large']}
          rows={['flex', 'auto']}
          gap="small"
          fill
        >
          <Box gridArea="main1" background="primary" pad="medium">
            <StateExample />
          </Box>

          <Box gridArea="main2" background="secondary" pad="medium">
            <CalcStateExample />
          </Box>

          <Box gridArea="main3" background="secondary" pad="medium">
            <ClassCalcStateExample />
          </Box>
        </Grid>
      </Box>
    </Grid>
  );
}

export default StateVsProps;
