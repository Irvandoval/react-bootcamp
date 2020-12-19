import React, { useState } from 'react';

function Album({ album, handleOnClick }) {
  const [open, setOpen] = useState(false);

  const onClick = () => {
    handleOnClick(album.id);
    setOpen((isOpen) => !isOpen);
  };

  return (
    <div key={album.id} onClick={onClick} className="Blog-Album">
      <span>
        <strong>{album.title}</strong>
      </span>

      {open && (
        <div className="Blog-Photos">
          {album.photos &&
            album.photos.map &&
            album.photos.map((photo) => {
              return (
                <div key={photo.id} className="Blog-Photo">
                  <span>
                    <strong>Title: </strong>
                    {photo.title}
                  </span>
                  <img src={photo.thumbnailUrl} alt={photo.title} width="45" />
                </div>
              );
            })}
        </div>
      )}
    </div>
  );
}

export default Album;
