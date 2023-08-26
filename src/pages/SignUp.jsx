import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import '../assets/styles/SignUpPage.css'

export default function SignUp () {
    const { register, handleSubmit } = useForm()
    const navigate = useNavigate()
    
    const submit = (data) => {
        console.log(data);
        navigate('/')
    }

    return (
        <div onSubmit={handleSubmit(submit)} className='sign-up-container'>
            <form action="" className='sign-up-form'>
                <h2>Sign up</h2>
                <p>Already have an account? <Link to='/login'>Log in</Link></p>
                <label>Email</label>
                <input type="text" className='form-item' {...register('email')} required />
                <label>First Name</label>
                <input type="text" className='form-item' {...register('firstName')} required />
                <label>Last Name</label>
                <input type="text" className='form-item' {...register('lastName')} required />
                <label>Password</label>
                <input type="password" className='form-item' {...register('password')} required />
                <label>Phone (10 characters)</label>
                <input type="tel" className='form-item' {...register("phone", { required: true, maxLength: 10, minLength: 10 })} required />
                <button>Sign up</button>
            </form>
        </div>
    )
}