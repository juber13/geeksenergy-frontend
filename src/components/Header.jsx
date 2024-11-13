import React from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Cookies from 'js-cookie';

const Header = () => {
    const navigate = useNavigate();
  
  const handleLogout = async() => {
      try{
        Cookies.remove('token');
        toast.success('Logout Successfully');
        navigate('/login');
      }catch(error){
        console.log(error)
      }
  };

  return (
    <div className='flex text-end w-100 border px-4 py-2 bg-blue-500 text-white'>
       <button onClick={handleLogout} className='btn btn-danger px-4 py-2 rounded-lg font-semibold hover:bg-red-700 transition-colors'>Logout</button>
    </div>  )
}

export default Header