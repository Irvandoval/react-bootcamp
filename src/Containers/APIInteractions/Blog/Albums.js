import Axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { BlogContext } from './Context';
import Album from './Album';
import { Box, Heading, Text } from 'grommet';

function Albums() {
  const {
    selectedUser: [selectedUser],
  } = useContext(BlogContext);
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    Axios.get(
      `https://jsonplaceholder.typicode.com/users/${selectedUser.id}/albums`
    )
      .then((result) => {
        setAlbums(result.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [selectedUser]);

  const fetchPhotos = (id) => {
    Axios.get(`https://jsonplaceholder.typicode.com/albums/${id}/photos`)
      .then((result) => {
        setAlbums((currentAlbums) =>
          currentAlbums.map((album) => {
            if (album.id === id) {
              return {
                ...album,
                photos: result.data,
              };
            }
            return album;
          })
        );
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <Box gridArea="main2" background="light-1" pad="xsmall">
      <Heading level="3" margin="none" color="dark-1">
        Hey look!, Here's a list of albums from{' '}
        <Text color="brand" weight="bold" size="8">
          {selectedUser.name}
        </Text>
      </Heading>

      <Box pad="xsmall">
        {albums.map((album) => {
          return (
            <Album key={album.id} album={album} handleOnClick={fetchPhotos} />
          );
        })}
      </Box>
    </Box>
  );
}

export default Albums;
