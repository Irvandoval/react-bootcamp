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
    <div className="App-examples">
      <div className="Jsx-example">
        <h1
          style={{
            color: '#d62811',
            textAlign: 'center',
            borderBottom: '2px solid orange',
          }}
        >
          Hello, this is not an HTML5 file
          {`... `}
          It's JSX
        </h1>

        <br />

        <h3>Look, here is a list of continents</h3>
        <ul>
          {continents.map((continent) => {
            return <li key={continent}>{continent}</li>;
          })}
        </ul>

        <br />
        <hr />

        <div>
          <h3>Look, you can change the background color of the container</h3>
          <div>
            {colors.map((color) => {
              return (
                <button
                  key={color}
                  type="button"
                  style={{
                    backgroundColor: color,
                    ...(color === 'black' && { color: 'white' }),
                    ...(color === backgroundColor && {
                      border: '6px solid yellow',
                    }),
                  }}
                  onClick={(event) => setBackgroundColor(color)}
                >
                  {`${color.charAt(0).toUpperCase()}${color.slice(1)}`}
                </button>
              );
            })}
          </div>

          <div
            style={{
              marginTop: 15,
              height: 60,
              width: 160,
              padding: 10,
              backgroundColor,
              ...(backgroundColor === 'black' && { color: 'white' }),
            }}
          >
            {`${backgroundColor.charAt(0).toUpperCase()}${backgroundColor.slice(
              1
            )}`}
          </div>
        </div>

        <br />
        <hr />

        <div>
          <h3>
            Look, you can render different elements based on the color you
            choose
          </h3>
          <select
            name="choose-color"
            id="choose-color"
            value={backgroundColor}
            onChange={(event) => setBackgroundColor(event.target.value)}
          >
            <option value=""></option>
            {colors.map((color) => {
              return (
                <option key={color} value={color}>
                  {`${color.charAt(0).toUpperCase()}${color.slice(1)}`}
                </option>
              );
            })}
          </select>
          You selected: <strong>{backgroundColor}</strong>
          {content}
        </div>

        <h4>Add a new color</h4>
        <input type="text" onKeyDown={handleKeyDown} />
      </div>
    </div>
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
