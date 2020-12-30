import Axios from 'axios';
import { Box, Button, DataTable, Heading, Layer, Text } from 'grommet';
import { Dislike, Like, Sync, User, UserAdd, UserFemale } from 'grommet-icons';
import { DateTime } from 'luxon';
import React, { useState } from 'react';
import { useQuery, useMutation, queryCache } from 'react-query';
import Spinner from '../../../Components/Grommet/Spinner';
import { token } from '../utils';
import FormUser from './FormUser';

function Users() {
  // Hooks first...
  const [open, setOpen] = useState(false);

  const {
    // status,
    // isFetching,
    isLoading,
    error: queryError,
    data: users,
  } = useQuery('fetchUsers', async () => {
    const { data } = await Axios.get(
      `https://gorest.co.in/public-api/users?page=70`
    );
    return data.data;
  });

  const [postUser] = useMutation(
    (data) =>
      Axios.post('https://gorest.co.in/public-api/users', data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
    {
      onSuccess: () => {
        // Query Invalidations
        queryCache.invalidateQueries('fetchUsers');

        onClose();
        console.log('User created successfully');
        console.info(
          '%c Invalidating cache. React-Query will refetch data again to sincronize with server.',
          'background: #222; color: #bada55'
        );
      },
      onError: (error) => {
        console.error(error);
      },
    }
  );

  const onOpen = () => setOpen(true);
  const onClose = () => setOpen(undefined);

  const onSubmit = (values) => {
    console.log('values', values);
    postUser({
      ...values,
      status: values.status ? 'Active' : 'Inactive',
    });
  };

  const onRefresh = () => {
    // Query Invalidations
    queryCache.invalidateQueries('fetchUsers');
  };

  return (
    <>
      {queryError && (
        <Heading margin="medium" color="status-critial">
          Oops!!! an error has ocurred :(
        </Heading>
      )}
      {isLoading ? (
        <Box pad="large" margin="large">
          <Spinner />
        </Box>
      ) : (
        <>
          <Box direction="row" gap="medium" margin={{ vertical: 'medium' }}>
            <Button icon={<UserAdd />} label="Add User" onClick={onOpen} />
            <Button icon={<Sync />} label="Refresh Data" onClick={onRefresh} />
          </Box>

          <DataTable
            background={{
              header: 'controls',
              body: ['white', 'light-2'],
              footer: 'dark-3',
            }}
            columns={[
              {
                property: 'id',
                header: <Text>Id</Text>,
                render: (datum) => <Text size="small">{datum.id}</Text>,
                primary: true,
              },
              {
                property: 'name',
                header: <Text>Name</Text>,
                render: (datum) => <Text size="small">{datum.name}</Text>,
              },
              // {
              //   property: 'description',
              //   header: <Text>Description</Text>,
              //   render: (datum) => <Text size="small">{datum.description}</Text>,
              // },
              // {
              //   property: 'image',
              //   header: <Text>Preview</Text>,
              //   render: (datum) => (
              //     <Box height="xsmall" width="xxsmall">
              //       <Image fit="cover" src={datum.image} />
              //     </Box>
              //   ),
              // },
              {
                property: 'email',
                header: <Text>Email</Text>,
                render: (datum) => <Text size="small">{datum.email}</Text>,
              },
              {
                property: 'gender',
                header: <Text>Gender</Text>,
                render: (datum) =>
                  datum.gender === 'Male' ? (
                    <User color="brand" size="medium" />
                  ) : (
                    <UserFemale color="secondary" size="medium" />
                  ),
              },
              {
                property: 'created_at',
                header: <Text>Created At</Text>,
                render: (datum) => (
                  <Text size="small">
                    {DateTime.fromISO(datum.created_at).toLocaleString(
                      DateTime.DATETIME_MED
                    )}
                  </Text>
                ),
              },
              {
                property: 'updated_at',
                header: <Text>Updated At</Text>,
                render: (datum) => (
                  <Text size="small">
                    {DateTime.fromISO(datum.updated_at).toLocaleString(
                      DateTime.DATETIME_MED
                    )}
                  </Text>
                ),
              },
              {
                property: 'status',
                header: <Text>Status</Text>,
                render: (datum) =>
                  datum.status === 'Active' ? (
                    <Like color="brand" size="medium" />
                  ) : (
                    <Dislike color="default" size="medium" />
                  ),
              },
            ]}
            data={users}
          />
        </>
      )}

      {open && (
        <Layer
          position="right"
          full="vertical"
          modal
          onClickOutside={onClose}
          onEsc={onClose}
        >
          <FormUser
            onSubmit={({ value }) => onSubmit(value)}
            onClose={onClose}
          />
        </Layer>
      )}
    </>
  );
}

export default Users;
