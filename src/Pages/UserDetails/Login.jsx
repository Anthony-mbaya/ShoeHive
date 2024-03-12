import React from "react";
import { useForm } from 'react-hook-form';
import { Link } from "react-router-dom";

export const Login = () => {
    const { register,handleSubmit,formState:{errors} } = useForm();
    
    const submitFun =(userData)=> {
      const getdata = JSON.parse(localStorage.getItem(userData.email));
      if(getdata){
        if(getdata.password === userData.password){
          alert('logged in')
        }else{
          alert('email or password not match')
        }
      }else{
        alert('incorrect entry')
      }
    }
  return(
    <div className="form-container">
    <form onSubmit={handleSubmit(submitFun)} className="form">
    <h2>Login page</h2> 
        <input type="email" placeholder="Enter Email..." {...register('email')} />  
        <input type="password" placeholder="Password" {...register('password')} /> 
        <input type="submit" className="sub" />
    <Link to="/signup" className="underline underline-offset-2 text-blue-500 hover:text-purple-500">Sign Up</Link>
    </form>
    
    </div>
  )
};
