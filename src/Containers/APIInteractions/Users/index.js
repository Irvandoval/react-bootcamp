import Axios from 'axios';
import {
  Box,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Heading,
  Text,
} from 'grommet';
import { User, UserFemale } from 'grommet-icons';
import { DateTime } from 'luxon';
import React from 'react';
import { useQuery } from 'react-query';
import Spinner from '../../../Components/Grommet/Spinner';

function Users() {
  const { isLoading, error: isError, data: users } = useQuery(
    'fetchUsers',
    async () => {
      const { data } = await Axios.get(`https://gorest.co.in/public-api/users?page=66`);
      return data.data;
    }
  );

  return (
    <>
      {isError && (
        <Heading margin="medium" color="status-critial">
          Oops!!! an error has ocurred :(
        </Heading>
      )}
      {isLoading ? (
        <Box pad="large" margin="large">
          <Spinner />
        </Box>
      ) : (
        <Box pad="xsmall" direction="row-responsive" gap="small" wrap>
          {users.map((user) => {
            return (
              <Box
                align="stretch"
                border={{ color: 'dark-1', size: 'xxsmall' }}
                pad="small"
                round="medium"
                elevation="medium"
                margin="xsmall"
                direction="row"
                gap="small"
                key={user.id}
              >
                <Card height="xsmall" background="light-3">
                  <CardHeader pad="small">
                    {user.gender === 'Male' ? (
                      <User color="brand" size="medium" />
                    ) : (
                      <UserFemale color="secondary" size="medium" />
                    )}
                    <Text>{user.name}</Text>
                  </CardHeader>
                  <CardBody pad={{ horizontal: 'small' }}>
                    <Text color="brand" weight="bold">
                      {user.email}
                    </Text>
                  </CardBody>
                  <CardFooter
                    pad={{ horizontal: 'small' }}
                    background="harmonie-6"
                  >
                    <Text color="brand">Member since</Text>
                    <Text>
                      {DateTime.fromISO(user.created_at).toLocaleString(
                        DateTime.DATETIME_MED
                      )}
                    </Text>
                  </CardFooter>
                </Card>
              </Box>
            );
          })}
        </Box>
      )}
    </>
  );
}

export default Users;
