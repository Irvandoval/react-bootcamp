import Axios from 'axios';
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { PostUserContext }from './Context';

const Form = () => {
  const { handleSubmit, register, errors } = useForm();
  const {newUser: [, setNewUser]} = useContext(PostUserContext);

  const onSubmit = async (fields) => {
    const myData = { ...fields, status: 'Active' };
    const { data: { data } } = await Axios.patch('https://gorest.co.in/public-api/users', myData, {
      headers: {
        Authorization: `Bearer 15044097632ad0d30f3380f8da2354db383b4b086acdd67813e816ca3b39c1a4`
      }
    });

    console.log(data);
    setNewUser(data);
  }

  return (
    <form style={{
      display: 'grid',
      border: '1px solid gray',
      backgroundColor: 'lightgray',
      margin: '24px'
    }} 
    onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="name" className='FormGroup'>
        Name {' '}
        <input
          type="text"
          name="name"
          placeholder="Name"
          ref={register({
            required: 'Required',
          })}
        />
        {errors.name?.message}
      </label>
      <label htmlFor="email" className='FormGroup'>
        Email {' '}
        <input
          type="email"
          name="email"
          placeholder="email"
          ref={register({
            required: 'Required',
          })}
        />
        {errors.email && errors.email.message}
      </label>
      <label htmlFor="gender" className='FormGroup'>
        Gender {' '}
        <select name='gender' id='gender' ref={register({ required: true })}>
          <option value="">Select</option>
          <option value='Male'>Male</option>
          <option value='Female'>Female</option>
        </select>
        {errors.gender && errors.gender.message}
      </label>
      <button type="submit">Add</button>
    </form>)
}

export default Form;