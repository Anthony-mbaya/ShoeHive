import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

export default function Signup(){
    const { register,handleSubmit,formState:{errors}, } = useForm();
    const submitFun =(userData)=> {
        localStorage.setItem(userData.email, JSON.stringify({
            firstName:userData.firstName,
            lastName: userData.lastName,
            password:userData.password
        }));
        console.log(JSON.parse(localStorage.getItem(userData.email)))
    }

    return(
        <div className='form-container'>
        <form onSubmit={handleSubmit(submitFun)} className='form'>
        <h2>Sign up page</h2>
        <input  type="text" placeholder='First Name' {...register('firstName')}/>
        <input   type="text" placeholder='Last Name'{...register('lastName')} />
            <input type='email' placeholder='Your Email Address' {...register('email')} />
            <input type='password' placeholder='Your Password' {...register('password')} />
            <input type='submit' className='sub' />
            <Link to="/login" className="underline underline-offset-2 text-blue-500 hover:text-purple-500">Login</Link>
        </form>
        
        </div>
    )

}
