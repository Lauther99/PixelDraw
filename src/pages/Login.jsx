import { useForm } from 'react-hook-form';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../assets/styles/LoginPage.css'

export default function Login() {
    const { register, handleSubmit } = useForm()
    const navigate = useNavigate()
    const [eyePassword, setEyePassword] = useState('password');

    const submit = (data) => {
        console.log(data);
        navigate('/')
    }

    const togglePassword = () => {
        eyePassword === 'password' ? setEyePassword('text') : setEyePassword('password')
    }

    //aqui va tu logica del componente
    return (
        <div className='login-container'>
            <form onSubmit={handleSubmit(submit)} className='login-form'>
                <h1>Bienvenido</h1>
                <p>o, <Link to='/signup'>regístrate aquí</Link></p>
                <div className='form-item'>
                    <label htmlFor="">Coreo</label>
                    <input type="email" placeholder='Correo'{...register('email')} required />
                </div>
                <div className='form-item'>
                    <label htmlFor="">Contraseña</label>
                    <input type={eyePassword} placeholder='Contraseña' {...register('password')} required />
                    <i className="fa-solid fa-eye" onClick={() => togglePassword()}></i>
                </div>
                <button>Iniciar sesión</button>
                <p>ó</p>
                <div className='btn-google'>
                    <i className="fa-brands fa-google"></i>
                    <p>Iniciar sesión con google</p>
                </div>
            </form>
        </div>
    )
}