import React, { useState } from 'react';
import {
  Box,
  Button,
  Collapsible,
  Grommet,
  Heading,
  Layer,
  ResponsiveContext,
} from 'grommet';
import { BrowserRouter as Router } from 'react-router-dom';
import Routing from './Components/Routing';
import Menu from './Components/Routing/Menu';
import { Apps, FormClose } from 'grommet-icons';

const theme = {
  global: {
    colors: {
      primary: '#ee4540',
      secondary: '#c72c41',
      brand: '#801336',
      controls: '#510a32',
      default: '#2d142c',
    },
    font: {
      family: 'sans-serif',
      size: '18px',
      height: '20px',
    },
  },
};

const AppBar = (props) => (
  <Box
    tag="header"
    direction="row"
    align="center"
    justify="between"
    background="brand"
    pad={{ left: 'medium', right: 'small', vertical: 'small' }}
    elevation="medium"
    style={{ zIndex: '1' }}
    {...props}
  />
);

function App() {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <Router>
      <Grommet theme={theme} full>
        <ResponsiveContext.Consumer>
          {(size) => (
            <Box fill>
              <AppBar>
                <Heading level="4" margin="none">
                  Hey look!, I'm using Groomet
                </Heading>

                <Button
                  icon={<Apps />}
                  onClick={() => setShowSidebar(!showSidebar)}
                />
              </AppBar>

              <Box direction="row" flex overflow={{ horizontal: 'hidden' }}>
                <Box flex align="baseline" justify="center" pad="medium">
                  <Routing />
                </Box>

                {!showSidebar || size !== 'small' ? (
                  <Collapsible direction="horizontal" open={showSidebar}>
                    <Box
                      flex
                      width="medium"
                      background="secondary"
                      elevation="small"
                      align="baseline"
                      justify="center"
                      fill="vertical"
                    >
                      <Menu />
                    </Box>
                  </Collapsible>
                ) : (
                  <Layer>
                    <Box
                      background="light-2"
                      tag="header"
                      justify="end"
                      align="center"
                      direction="row"
                    >
                      <Button
                        icon={<FormClose />}
                        onClick={() => setShowSidebar(false)}
                      />
                    </Box>
                    <Box
                      fill
                      background="default"
                      align="center"
                      justify="center"
                    >
                      <Menu />
                    </Box>
                  </Layer>
                )}
              </Box>
            </Box>
          )}
        </ResponsiveContext.Consumer>
      </Grommet>
    </Router>
  );
}

export default App;
