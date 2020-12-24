import Axios from 'axios';
import {
  setData,
  addUser,
  updateUser,
  removeUser,
} from '../../redux/reducers/appSlice';

export function fetchData() {
  return (dispatch) => {
    Axios.get('https://reqres.in/api/users')
      .then(({ data: { data } }) => {
        const modifiedData = data.map((item) => {
          return {
            ...item,
            job: 'Developer',
          };
        });
        dispatch(setData(modifiedData));
      })
      .catch((err) => {
        console.error(err);
      });
  };
}

export function onCreate(payload) {
  return (dispatch) => {
    Axios.post('https://reqres.in/api/users', {
      ...payload,
    })
      .then(({ data }) => {
        dispatch(addUser(data));
      })
      .catch((err) => {
        console.error(err);
      });
  };
}

export function onUpdate(id, payload) {
  return (dispatch) => {
    Axios.post(`https://reqres.in/api/users/${id}`, {
      ...payload,
    })
      .then(({ data }) => {
        dispatch(updateUser({ id, data }));
      })
      .catch((err) => {
        console.error(err);
      });
  };
}

export function onRemove(id, payload) {
  return (dispatch) => {
    Axios.delete(`https://reqres.in/api/users/${id}`, {
      ...payload,
    })
      .then(() => {
        dispatch(removeUser(id));
      })
      .catch((err) => {
        console.error(err);
      });
  };
}
