import Axios from 'axios';
import { Box, DataTable, Heading, Text } from 'grommet';
import { StatusDisabled, StatusGood } from 'grommet-icons';
import React, { useEffect, useState } from 'react';
import Spinner from '../../Components/Grommet/Spinner';

function Products() {
  const [isLoading, setLoading] = useState(false);
  const [isError, setError] = useState(false);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      setError(false);
      setLoading(true);

      try {
        const { data : { data } } = await Axios.get(
          `https://gorest.co.in/public-api/products`
        );
        setProducts(data);
      } catch (error) {
        setError(true);
        console.error(error);
      }
      setLoading(false);
    };
    fetchProducts();

    return () => {
      console.log(
        "Goodbye, I'm going to clean up. Say goodbye to your data :("
      );
    };
  }, []);

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
        <DataTable
          background={{
            header: 'brand',
            body: ['white', 'light-1'],
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

export default Products;
