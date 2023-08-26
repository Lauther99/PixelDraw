import { Link } from 'react-router-dom';
import '../assets/styles/Navbar.css'


export default function Navbar () {
    return (
        <nav>
            <ul className='div-nav'>
                <p><Link to='/'>Pixel Draw</Link></p>
                <li className='nav-icon home-icon'>
                    <Link to='/' className='link-icon'>
                        <i className="fa-solid fa-house fa-xl"></i>
                    </Link>
                </li>
                <li className='nav-icon'>
                    <Link to='/login' className='link-icon'>
                        Iniciar sesión
                    </Link>
                </li>
            </ul>
        </nav>
    )
}