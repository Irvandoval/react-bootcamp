import { Box, Heading } from 'grommet';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import JSONPretty from 'react-json-pretty';
import 'react-json-pretty/themes/adventure_time.css';
import { getEntry } from '../sdk';

function Record() {
  // We can use the `useParams` hook here to access
  // the dynamic pieces of the URL.
  let { id } = useParams();
  const {
    // status,
    // isFetching,
    // isLoading,
    // error: queryError,
    data: entry,
  } = useQuery(`fetchRecord-${id}`, async () => {
    const entry = await getEntry(id);

    console.log(
      `%cEntry fetched using... "${id}":`,
      'background: #eee; color: #444;',
      entry
    );
    return entry;
  });

  return (
    <Box width="xxlarge">
      <Heading level="3" margin={{ vertical: 'medium' }}>
        ID: {id}
      </Heading>

      {entry && <JSONPretty id="json-pretty" data={entry}></JSONPretty>}
    </Box>
  );
}

export default Record;
