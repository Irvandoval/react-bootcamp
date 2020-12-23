import { Box, Image, Text } from 'grommet';
import React, { useState } from 'react';

function Album({ album, handleOnClick }) {
  const [open, setOpen] = useState(false);

  const onClick = () => {
    handleOnClick(album.id);
    setOpen((isOpen) => !isOpen);
  };

  return (
    <Box background="light-3" pad="xsmall">
      <Box
        align="stretch"
        border={{ color: 'dark-1', size: 'xxsmall' }}
        pad={{ vertical: 'small', horizontal: 'medium' }}
        round="medium"
        elevation="medium"
        margin="xsmall"
        gap="xsmall"
        onClick={onClick}
      >
        <Text weight="bold" size="xsmall">
          {album.title}
        </Text>
      </Box>

      {open && (
        <Box
          background="light-1"
          pad="xsmall"
          margin={{ left: 'large' }}
          round="small"
        >
          {album.photos &&
            album.photos.map &&
            album.photos.map((photo) => {
              return (
                <Box
                  align="stretch"
                  border={{ color: 'dark-1', size: 'xxsmall' }}
                  pad={{ vertical: 'small', horizontal: 'medium' }}
                  round="medium"
                  elevation="medium"
                  margin="xsmall"
                  gap="xsmall"
                  direction="row"
                  key={photo.id}
                >
                  <Text weight="bold" size="xsmall">
                    {photo.title}
                  </Text>
                  <Image
                    fit="contain"
                    src={photo.thumbnailUrl}
                    alt={photo.title}
                    height="25"
                  />
                </Box>
              );
            })}
        </Box>
      )}
    </Box>
  );
}

export default Album;
