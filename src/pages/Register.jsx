import React, { useState } from 'react'

import axios from 'axios'
import {toast} from 'react-toastify'    
import Loader from '../components/Loader';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
 const [userInfo , setUserInfo] = useState({name : ""  , email : "" , password : "" , phone : "", profession : ""});
 const [loading , setLoading] = useState(false);    
 const navigate = useNavigate()    

 const handleChange = (e) => {
    const {name , value} = e.target;
    setUserInfo({...userInfo , [name] : value});
    console.log(userInfo)
 }  

 const registerUser = async (e) => {
    e.preventDefault();
    try {
        setLoading(true);
        const {data} = await axios.post('https://geeksenergy-backend.onrender.com/api/user/register' , userInfo);
        console.log(data)
        toast.success("User Registered Successfully");
        navigate('/login')    
    }catch(err){
        toast.error("Something went wrong");
        console.log(err)
    }finally{
        setLoading(false);
    }
 }

 

  return (
    <div className='container mt-5 p-4 col-lg-3 col-md-6 col-sm-8 col-11 mx-auto bg-white rounded shadow'>
      <h2 className='text-center display-4 mb-4 text-dark'>Register</h2>
      <form className='mb-3' onSubmit={registerUser}>
        <div className='mb-3'>
          <label htmlFor='name' className='form-label font-weight-bold'>
            Name
          </label>
          <input
            type='text'
            className='form-control'
            id='name'
            name='name'
            placeholder='Enter your name'
            onChange={handleChange}
            required
          />
        </div>

        <div className='mb-3'>
          <label htmlFor='email' className='form-label font-weight-bold'>
            Email
          </label>
          <input
            type='email'
            className='form-control'
            id='email'
            name='email'
            placeholder='Enter your email'
            onChange={handleChange}
            required
          />
        </div>

        <div className='mb-3'>
          <label htmlFor='phone' className='form-label font-weight-bold'>
            Phone
          </label>
          <input
            type='tel'
            className='form-control'
            id='phone'
            name='phone'
            placeholder='Enter your phone number'
            onChange={handleChange}
            required
          />
        </div>

        <div className='mb-3'>
          <label htmlFor='password' className='form-label font-weight-bold'>
            Password
          </label>
          <input
            type='password'
            className='form-control'
            id='password'
            name='password'
            placeholder='Enter your password'
            onChange={handleChange}
            required
          />
        </div>

        <div className='mb-3'>
          <label htmlFor='profession' className='form-label font-weight-bold'>
            Profession
          </label>
          <input
            type='text'
            className='form-control'
            id='profession'
            name='profession'
            placeholder='Enter your profession'
            onChange={handleChange}
            required
          />
        </div>

         <div>
           <p>Already have an account? <Link to="/login">Login</Link></p>
         </div>

        <button type='submit' className='btn btn-primary w-100'>
          {loading ? <Loader /> : "Register"}
        </button>
      </form>
    </div>
  );
};



export default Register



