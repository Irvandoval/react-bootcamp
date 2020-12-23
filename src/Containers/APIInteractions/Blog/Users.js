import Axios from 'axios';
import {
  Box,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Grid,
  Text,
} from 'grommet';
import { User } from 'grommet-icons';
import React, { useContext, useEffect } from 'react';
import Albums from './Albums';
import { BlogContext } from './Context';
import Posts from './Posts';

function Users() {
  const {
    users: [users, setUsers],
    selectedUser: [selectedUser, setSelectedUser],
  } = useContext(BlogContext);

  useEffect(() => {
    Axios.get('https://jsonplaceholder.typicode.com/users')
      .then((result) => {
        setUsers(result.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [setUsers]);

  return (
    <Box pad="xsmall" direction="row-responsive" gap="small" wrap>
      {selectedUser ? (
        <Grid>
          <Box align="stretch" pad={{ horizontal: 'large' }}>
            <Grid
              areas={[
                { name: 'main1', start: [0, 0], end: [0, 0] },
                { name: 'main2', start: [1, 0], end: [1, 0] },
              ]}
              columns={['large', 'large']}
              rows={['flex', 'auto']}
              gap="small"
              fill
            >
              <Posts />
              <Albums />
            </Grid>
          </Box>
        </Grid>
      ) : (
        users.map((user) => {
          return (
            <Box
              align="stretch"
              border={{ color: 'dark-1', size: 'xxsmall' }}
              pad={{ vertical: 'small', horizontal: 'medium' }}
              round="medium"
              elevation="medium"
              margin="xsmall"
              direction="row"
              gap="small"
              key={user.id}
              onClick={() => setSelectedUser(user)}
            >
              <Card height="small" background="light-3">
                <CardHeader pad="small">
                  <User color="plain" />
                  <Text>{user.name}</Text>
                </CardHeader>
                <CardBody pad="small">
                  <Text color="controls" weight="bold">
                    Username
                  </Text>
                  <Text> {user.username}</Text>
                </CardBody>
                <CardFooter pad={{ horizontal: 'small' }} background="dark-2">
                  <Text color="brand" weight="bold">
                    Email
                  </Text>
                  <Text> {user.email}</Text>
                </CardFooter>
              </Card>
            </Box>
          );
        })
      )}
    </Box>
  );
}

export default Users;
