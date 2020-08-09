import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { setAlert } from '../../actions/alert';
import PropTypes from 'prop-types';

const Register = ({ setAlert }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const { name, email, password, confirmPassword } = formData;
  const handleInputChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword)
      setAlert('Password do not match!!', 'danger');
    else {
      console.log('SUCCESS');
      //   const newUser = {
      //     name,
      //     email,
      //     password
      //   };
      //   console.log('....data....', newUser);
      //   try {
      //     const config = {
      //       headers: {
      //         'Content-Type': 'application/json'
      //       }
      //     };
      //     const body = JSON.stringify(newUser);
      //     console.log('.....body....', body);
      //     const response = await axios.post('/api/users', body, config);
      //     console.log('....response.....', response.data);
      //   } catch (error) {
      //     console.log('...error....', error.response.data);
      //   }
    }
  };
  return (
    <Fragment>
      <h1 className='large text-primary'>Sign Up</h1>
      <p className='lead'>
        <i className='fas fa-user'></i> Create Your Account
      </p>
      <form className='form' onSubmit={(event) => handleSubmit(event)}>
        <div className='form-group'>
          <input
            type='text'
            placeholder='Name'
            name='name'
            value={name}
            required
            autoComplete='off'
            onChange={(event) => handleInputChange(event)}
          />
        </div>
        <div className='form-group'>
          <input
            type='email'
            value={email}
            placeholder='Email Address'
            name='email'
            onChange={(event) => handleInputChange(event)}
          />
          <small className='form-text'>
            This site uses Gravatar so if you want a profile image, use a
            Gravatar email
          </small>
        </div>
        <div className='form-group'>
          <input
            type='password'
            placeholder='Password'
            name='password'
            minLength='6'
            value={password}
            onChange={(event) => handleInputChange(event)}
          />
        </div>
        <div className='form-group'>
          <input
            type='password'
            placeholder='Confirm Password'
            name='confirmPassword'
            minLength='6'
            value={confirmPassword}
            onChange={(event) => handleInputChange(event)}
          />
        </div>
        <input type='submit' className='btn btn-primary' value='Register' />
      </form>
      <p className='my-1'>
        Already have an account? <Link to='/login'>Sign In</Link>
      </p>
    </Fragment>
  );
};

Register.propTypes = {
  setAlert: PropTypes.func.isRequired
};
export default connect(null, { setAlert })(Register);
