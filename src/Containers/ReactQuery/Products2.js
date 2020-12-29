import Axios from 'axios';
import { Box, DataTable, Heading, Text } from 'grommet';
import { StatusDisabled, StatusGood } from 'grommet-icons';
import React from 'react';
import { useQuery } from 'react-query';
import Spinner from '../../Components/Grommet/Spinner';

function Products2() {
  const {
    // status,
    // isFetching,
    isLoading,
    error: queryError,
    data: products,
  } = useQuery('fetchProducts', async () => {
    const { data } = await Axios.get(
      `https://gorest.co.in/public-api/products`
    );
    return data.data;
  });

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
        <DataTable
          background={{
            header: 'harmonie-5',
            body: ['white', 'harmonie-1'],
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
              property: 'price',
              header: <Text>Price</Text>,
              render: (datum) => <Text size="small">$ {datum.price}</Text>,
            },
            {
              property: 'discount_amount',
              header: <Text>Discount Amount</Text>,
              render: (datum) => (
                <Text size="small">$ {datum.discount_amount}</Text>
              ),
            },
            {
              property: 'status',
              header: <Text>Status</Text>,
              render: (datum) =>
                datum.status ? (
                  <StatusGood color="brand" size="medium" />
                ) : (
                  <StatusDisabled color="default" size="medium" />
                ),
            },
          ]}
          data={products}
        />
      )}
    </>
  );
}

export default Products2;
