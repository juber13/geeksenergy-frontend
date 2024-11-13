import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Loader from "../components/Loader";
import Cookies from 'js-cookie'

const Login = () => {
     const [userInfo, setUserInfo] = useState({email: "juberkhan0707@gmail.com",password: "123"});
     const [loading, setLoading] = useState(false);
     const navigate = useNavigate();

     const handleChange = (e) => {
       const { name, value } = e.target;
       setUserInfo({ ...userInfo, [name]: value });
       console.log(userInfo);
     };

     const loginUser = async (e) => {
       e.preventDefault();
       try {
         setLoading(true);
         const { data } = await axios.post("http://localhost:5050/api/user/login",userInfo);
         Cookies.set("token",data.token);
         toast.success("User logged in Successfully");
         navigate("/");
       } catch (err) {
         toast.error("Something went wrong");
         console.log(err);
       } finally {
         setLoading(false);
       }
     };

  return (
    <div className='container mt-5 p-4 col-lg-3 col-md-6 col-sm-8 col-11 mx-auto bg-white rounded shadow'>
      <h2 className='text-center display-4 mb-4 text-dark'>Login</h2>
      <form className='mb-3' onSubmit={loginUser}>
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
          <label htmlFor='password' className='form-label font-weight-bold'>
            Password
          </label>
          <input
            type='password'
            className='form-control'
            id='password'
            name='password'
            onChange={handleChange}
            placeholder='Enter your password'
            required
          />
        </div>
        <div>
          <p>
            Don't have an account? <Link to='/register'>Register</Link>
          </p>
        </div>
        <button type='submit' className='btn btn-primary w-100'>
          {loading ? <Loader text={"Logging"} /> : "Login"}
        </button>
      </form>
    </div>
  );
};

export default Login;
