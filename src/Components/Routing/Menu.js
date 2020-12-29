import { Box, Text } from 'grommet';
import React from 'react';
import { Link } from 'react-router-dom';
import { routes } from './utils';

function Menu() {
  return (
    <Box pad={{ horizontal: 'medium', vertical: 'small' }}>
      {routes.map((route) => {
        return (
          <Box key={route.to} pad={{ horizontal: 'medium', vertical: 'small' }}>
            <Link to={route.to} title={route.text}>
              {route.icon}
              <Text size="large" color="light-1" margin="small">
                {route.text}
              </Text>
            </Link>
          </Box>
        );
      })}
    </Box>
  );
}

export default Menu;
