import { Box, Grid } from 'grommet';
import React, { useEffect, useState } from 'react';
import ClassExample from '../Components/ClassExample';
import ClassWithLifeCycleExample from '../Components/ClassWithLifeCycleExample';
import ClassWithStateExample from '../Components/ClassWithStateExample';
import FunctionExample from '../Components/FunctionExample';
import FunctionWithStateExample from '../Components/FunctionWithStateExample';

function Main() {
  const [clear, setClear] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setClear(true);
    }, 16000);

    return () => {
      /**
       * Clear the timer, or you'll get an error
       * timer will continue working even after component
       * has been unmounted, to avoid that lacky of memory, we use
       * the cleaunp of useEffect
       */
      clearTimeout(timer);
    };
  }, []);

  return (
    <Grid>
      <Box align="stretch" pad={{ horizontal: 'large' }}>
        <Grid
          areas={[
            { name: 'main1', start: [0, 0], end: [0, 0] },
            { name: 'main2', start: [0, 1], end: [0, 1] },
            { name: 'main3', start: [0, 2], end: [0, 2] },
            { name: 'main4', start: [0, 3], end: [0, 3] },
            { name: 'main5', start: [0, 4], end: [0, 4] },
          ]}
          columns={['large']}
          rows={['flex', 'flex', 'flex', 'flex', 'flex']}
          gap="small"
          fill
        >
          <Box gridArea="main1" background="secondary" pad="medium">
            <ClassExample />
          </Box>
          <Box gridArea="main2" background="secondary" pad="medium">
            <ClassWithStateExample />
          </Box>
          {!clear && (
            <Box gridArea="main3" background="primary" pad="medium">
              <ClassWithLifeCycleExample />
            </Box>
          )}
          <Box gridArea="main4" background="secondary" pad="medium">
            <FunctionExample />
          </Box>
          {!clear && (
            <Box gridArea="main5" background="primary" pad="medium">
              <FunctionWithStateExample />
            </Box>
          )}
        </Grid>
      </Box>
    </Grid>
  );
}

export default Main;
