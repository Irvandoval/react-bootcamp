import Axios from 'axios';
import React, { useState, useCallback, useEffect, useContext } from 'react';
import BaseList from '../Components/BaseList';
import { SearchContext } from '../Context/SearchContext';
import {
  ACCESS_TOKEN,
  BASE_URL,
  ENVIRONMENT,
  SPACE_ID,
  coursesTransformer,
  getEntries,
} from '../sdk';

const contentType = 'course';
const searchField = 'title';

function Courses() {
  const [courses, setCourses] = useState([]);
  const [searchString] = useContext(SearchContext);

  const retrieveCourses = useCallback(async () => {
    // const { data } = await Axios.get(
    //   `${BASE_URL}/spaces/${SPACE_ID}/environments/${ENVIRONMENT}/entries?access_token=${ACCESS_TOKEN}&content_type=${contentType}&fields.${searchField}[match]=${searchString}`
    // );
    // const entries = coursesTransformer(data.items);

    const entries = await getEntries({
      content_type: 'course',
      'fields.title[match]': searchString,
    });

    console.log(
      `%cCourses fetched using... "${searchString}":`,
      'background: #ccc; color: #444;',
      entries
    );

    setCourses(entries);
  }, [searchString]);

  useEffect(() => {
    retrieveCourses();
  }, [retrieveCourses]);

  return <BaseList items={courses} />;
}

export default Courses;
