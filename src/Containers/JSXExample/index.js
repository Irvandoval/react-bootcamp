import {
  Box,
  Button,
  Grid,
  Heading,
  List,
  Select,
  Text,
  TextInput,
} from 'grommet';
import React, { useState } from 'react';

/**
 * Moving JSX Example to its own menu item
 */
function JSXExample() {
  const [backgroundColor, setBackgroundColor] = useState('yellow');
  const [colors, setColors] = useState([
    'red',
    'blue',
    'green',
    'lightgreen',
    'cyan',
    'purple',
    'black',
    'gray',
    'magenta',
    'pink',
    'lightblue',
    'orange',
  ]);

  const continents = ['America', 'Europe', 'Asia', 'Oceania', 'Africa'];

  let content = null;
  switch (backgroundColor) {
    case 'black':
      content = <Black />;
      break;
    case 'magenta':
      content = <Magenta />;
      break;
    case 'blue':
      content = <Blue />;
      break;
    case 'lightgreen':
      content = <Lightgreen />;
      break;
    default:
  }

  const handleKeyDown = (event) => {
    if (event.keyCode === 13) {
      setColors((oldColors) => [...oldColors, event.target.value]);
    }
  };

  return (
    <Grid>
      <Box align="stretch" pad={{ horizontal: 'large' }}>
        <Heading margin="none" color="brand">
          Hello, this is not an HTML5 file
          {`... `}
          It's JSX
        </Heading>

        <br />

        <Heading margin="none" color="controls" level="3">
          Look, here is a list of continents
        </Heading>
        <List data={continents} />

        <br />
        <hr />

        <div>
          <Heading margin="none" color="controls" level="3">
            Look, you can change the background color of the container
          </Heading>
          <div>
            {colors.map((color) => {
              return (
                <Button
                  key={color}
                  type="button"
                  size="small"
                  margin="xsmall"
                  onClick={(event) => setBackgroundColor(color)}
                  label={`${color.charAt(0).toUpperCase()}${color.slice(1)}`}
                  color={color}
                />
              );
            })}
          </div>

          <Box pad="medium" width="medium" background={backgroundColor}>
            <Text
              size="large"
              color={backgroundColor === 'black' ? 'primary' : 'secondary'}
            >
              {`${backgroundColor
                .charAt(0)
                .toUpperCase()}${backgroundColor.slice(1)}`}
            </Text>
          </Box>
        </div>

        <br />
        <hr />

        <div>
          <Heading margin="none" color="controls" level="3">
            Look, you can render different elements based on the color you
            choose
          </Heading>
          <Select
            name="choose-color"
            id="choose-color"
            value={backgroundColor}
            onChange={({ option }) => setBackgroundColor(option)}
            options={colors}
            placeholder=" --- Select a color --- "
          />
          You selected: <strong>{backgroundColor}</strong>
          {content}
        </div>

        <Heading color="controls" level="4">
          Add a new color
        </Heading>
        <TextInput
          placeholder="You can add a color here..."
          onKeyDown={handleKeyDown}
        />
      </Box>
    </Grid>
  );
}

function Black() {
  return <div style={{ height: 60, width: 60, backgroundColor: 'black' }} />;
}

function Magenta() {
  return (
    <div
      style={{
        height: 60,
        width: 260,
        backgroundColor: 'magenta',
        WebkitBorderRadius: 18,
      }}
    />
  );
}

function Blue() {
  return (
    <div
      style={{
        height: 60,
        width: 60,
        backgroundColor: 'blue',
        transform: 'rotate(45deg)',
      }}
    />
  );
}

function Lightgreen() {
  return (
    <div
      style={{
        height: 60,
        width: 60,
        backgroundColor: 'lightgreen',
        borderRadius: '5px 20px 5px',
      }}
    />
  );
}

export default JSXExample;
