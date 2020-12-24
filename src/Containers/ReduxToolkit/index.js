import { Box, Grid, Main } from 'grommet';
import React from 'react';
import Profiles from './Profiles';

function ReduxToolkit() {
  return (
    <Main pad="medium">
      <Grid>
        <Box align="stretch" pad={{ horizontal: 'large' }}>
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
            <Profiles />
          </Grid>
        </Box>
      </Grid>
    </Main>
  );
}

export default ReduxToolkit;
