import React, { useState } from 'react';
import {
  Anchor,
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  Collapsible,
  Heading,
  Image,
  Paragraph,
} from 'grommet';
import { FormDown, FormUp, Favorite, ShareOption } from 'grommet-icons';
import { useHistory } from 'react-router-dom';

function Item({ item }) {
  const [open, setOpen] = useState(false);
  const [favorite, setFavorite] = useState(false);
  const history = useHistory();

  const ExpandButton = ({ ...rest }) => {
    const Icon = open ? FormUp : FormDown;
    return (
      <Button
        hoverIndicator="light-4"
        icon={<Icon color="brand" />}
        {...rest}
      />
    );
  };

  const goToSinglePage = (id) => {
    history.push(`/contentful/entries/${id}`);
  };

  return (
    <Card elevation="large" width="medium">
      <CardBody height="small">
        <Image
          fit="cover"
          src={item.image.file.url}
          a11yTitle="item reference image"
        />
      </CardBody>
      <Box pad={{ horizontal: 'medium' }} responsive={false}>
        <Heading level="3" margin={{ vertical: 'medium' }}>
          {item.title}
        </Heading>
        <Paragraph margin={{ top: 'none' }}>{item.shortDescription}</Paragraph>
      </Box>
      <CardFooter>
        <Box direction="row" align="center" gap="small">
          <Button
            icon={<Favorite color={favorite ? 'red' : undefined} />}
            hoverIndicator
            onClick={() => {
              setFavorite((fav) => !fav);
            }}
          />
          <Button
            icon={<ShareOption color="plain" />}
            hoverIndicator
            onClick={() => goToSinglePage(item.id)}
          />
          <Anchor href={item.url} label="Explore" target="_blank" />
        </Box>
        <ExpandButton onClick={() => setOpen((isOpen) => !isOpen)} />
      </CardFooter>
      <Collapsible open={open}>
        <Paragraph margin="medium" color="dark-3">
          {item.description}
        </Paragraph>
      </Collapsible>
    </Card>
  );
}

export default Item;
