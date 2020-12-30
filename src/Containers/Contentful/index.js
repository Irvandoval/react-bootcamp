import React, { useState } from 'react';
import { Tab, Tabs } from 'grommet';
import { Spotify, System, Ticket } from 'grommet-icons';
import { useLocation } from 'react-router-dom';
import Courses from './Courses';
import Records from './Records';
import Movies from './Movies';
import SearchProvider from './Context/SearchContext';
import SearchBar from './Components/SearchBar';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function Contentful() {
  const [activeIndex, setActiveIndex] = useState(0);
  let query = useQuery();

  // We can use the `useParams` hook here to access
  // the dynamic pieces of the URL.
  // To access the query params from a url, we need to use the react router useLocation hook.
  switch (query.get('tab')) {
    case 'records':
      // setActiveIndex(1);
      break;
    case 'movies':
      // setActiveIndex(2);
      break;
    default:
      break;
  }

  return (
    <SearchProvider>
      <SearchBar />

      <Tabs
        margin="medium"
        activeIndex={activeIndex}
        onActive={(index) => setActiveIndex(index)}
      >
        <Tab title="REST Courses (useEffect)" margin="medium" icon={<System />}>
          <Courses />
        </Tab>
        <Tab
          title="REST Records (React-Query)"
          margin="medium"
          icon={<Spotify />}
        >
          <Records />
        </Tab>
        <Tab
          title="REST Movies (Contentful SDK)"
          margin="medium"
          icon={<Ticket />}
        >
          <Movies />
        </Tab>
      </Tabs>
    </SearchProvider>
  );
}

export default Contentful;
