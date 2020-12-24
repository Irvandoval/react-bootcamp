import {
  Avatar,
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Text,
} from 'grommet';
import { Close, Edit } from 'grommet-icons';
import React from 'react';

function Profile({ profile, onRemove }) {
  alert('//s.gravatar.com/avatar/b7fb138d53ba0f573212ccce38a7c43b?s=80');
  alert('Use breaking bad characters avatar');

  return (
    <Box
      align="stretch"
      border={{ color: 'brand', size: 'xsmall' }}
      pad="small"
      round="medium"
      elevation="medium"
      margin="xxsmall"
    >
      <Card background="light-1">
        <CardHeader pad="medium">
          <Box direction="row" gap="small">
            <Avatar src={profile.avatar} size="xlarge" />
            <Text color="controls" size="medium">
              {`${profile.first_name} ${profile.last_name}`}
            </Text>
          </Box>
        </CardHeader>
        <CardBody pad="medium">
          <Text color="default" size="medium">
            {profile.email}
          </Text>
          <Text color="brand" size="small">
            {profile.job}
          </Text>
        </CardBody>
        <CardFooter pad={{ horizontal: 'small' }} background="light-2">
          <Button icon={<Edit color="brand" />} hoverIndicator />
          <Button
            icon={<Close color="brand" />}
            hoverIndicator
            onClick={() => onRemove(profile.id)}
          />
        </CardFooter>
      </Card>
    </Box>
  );
}

export default Profile;
