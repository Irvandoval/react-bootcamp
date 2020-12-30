import { Box, Button, Grid } from 'grommet';
import { Apps } from 'grommet-icons';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Profile from './Profile';
import SidebarLayer from './SidebarLayer';
import { fetchData, onCreate, onRemove, onUpdate } from './thunks';
import { setData } from '../../redux/reducers/appSlice';

function Profiles() {
  const [openSidebar, setOpenSidebar] = useState(false);
  const profiles = useSelector((state) => state.app.profiles);
  const dispatch = useDispatch();

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(fetchData());
    }, 500);

    return () => {
      /**
       * Clear the timer, or you'll get an error
       * timer will continue working even after component
       * has been unmounted, to avoid that lacky of memory, we use
       * the cleaunp of useEffect
       */
      clearTimeout(timer);

      console.log('Removing profiles for testing purpose.');
      dispatch(setData([]));
    };
  }, [dispatch]);

  const handleCreate = (values) => {
    dispatch(onCreate(values));
  };

  const handleUpdate = (id, values) => {
    dispatch(onUpdate(id, values));
  };

  const handleRemove = (id) => {
    dispatch(onRemove(id));
  };

  return (
    <Grid>
      <Box align="start">
        <Button
          icon={<Apps size="large" />}
          hoverIndicator={true}
          onClick={() => setOpenSidebar((isOpen) => !isOpen)}
          margin="medium"
        />
      </Box>

      <Box pad="xsmall" direction="row-responsive" gap="medium" wrap>
        {profiles.map((profile) => {
          return (
            <Profile
              key={profile.id}
              profile={profile}
              onRemove={handleRemove}
            />
          );
        })}
      </Box>

      {openSidebar && (
        <SidebarLayer
          onClose={() => setOpenSidebar(false)}
          handleCreate={handleCreate}
          handleUpdate={handleUpdate}
        />
      )}
    </Grid>
  );
}

export default Profiles;
