import Axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { BlogContext } from './Context';
import Album from './Album';

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
    <div className="Blog-Albums-Container">
      <h3>
        Hey look!, Here's a list of albums from{' '}
        <strong>{selectedUser.name}</strong>
      </h3>

      <div className="Blog-Albums">
        {albums.map((album) => {
          return (
            <Album key={album.id} album={album} handleOnClick={fetchPhotos} />
          );
        })}
      </div>
    </div>
  );
}

export default Albums;
