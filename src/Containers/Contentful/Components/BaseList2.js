import {
  Avatar,
  Box,
  Card,
  CardBody,
  CardHeader,
  Grid,
  Heading,
  Image,
  Stack,
  Text,
} from 'grommet';
import React from 'react';

const avatarSrc =
  '//s.gravatar.com/avatar/b7fb138d53ba0f573212ccce38a7c43b?s=80';

function BaseList2({ items }) {
  return (
    <Box pad="xxsmall" height="medium">
      <Grid
        gap="medium"
        rows="medium"
        columns={{ count: 'fit', size: ['small', 'medium'] }}
      >
        {items.map((item) => (
          <Card width="medium" key={item.id}>
            {/* Stacked CardBody and CardHeader on top of each other 
      in that order */}
            <Stack anchor="bottom-left">
              <CardBody height="medium">
                <Image
                  fit="cover"
                  src={item.image.file.url}
                  a11yTitle="item reference image"
                />
              </CardBody>
              <CardHeader
                pad={{ horizontal: 'small', vertical: 'small' }}
                // https://gist.github.com/lopspower/03fb1cc0ac9f32ef38f4#all-hex-value-from-100-to-0-alpha
                background="#000000A0"
                width="medium"
                justify="start"
              >
                <Avatar src={avatarSrc} a11yTitle="avatar" />
                <Box>
                  <Heading level="3" margin="none">
                    {item.title}
                  </Heading>
                  <Text size="small">{item.skillLevel}</Text>
                </Box>
              </CardHeader>
            </Stack>
          </Card>
        ))}
      </Grid>
    </Box>
  );
}

export default BaseList2;
