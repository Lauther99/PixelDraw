import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import '../assets/styles/SignUpPage.css'

export default function SignUp() {
    const { register, handleSubmit } = useForm()
    const navigate = useNavigate()

    const submit = (data) => {
        console.log(data);
        //navigate('/')
    }

    return (
        <div onSubmit={handleSubmit(submit)} className='sign-up-container'>
            <form action="" className='sign-up-form'>
                <h1>Crear cuenta</h1>
                <p>¿Ya tienes una cuenta? <Link to='/login'>ingresa aquí</Link></p>
                <div className="form-item">
                <label>Correo</label>
                    <input type="text"  {...register('email')} required />
                </div>
                <div className="form-item">
                <label>Nombres</label>
                    <input type="text"  {...register('firstName')} required />
                </div>
                <div className="form-item">
                <label>Apellidos</label>
                    <input type="text"  {...register('lastName')} required />
                </div>
                <div className="form-item">
                <label>Contraseña</label>
                    <input type="password"  {...register('password')} required />
                </div>
                <div className="form-item">
                <label>Repetir contraseña</label>
                    <input type="password"  {...register('password2')} required />
                </div>
                <button>Registrar</button>
            </form>
        </div>
    )
}