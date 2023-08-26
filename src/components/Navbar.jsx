import { Link } from 'react-router-dom';
import '../assets/styles/Navbar.css'


export default function Navbar() {
    return (
        <nav>
            <ul className='div-nav'>
                <li className='nav-item page-title'>
                    <h1><Link to='/'>Pixel Draw</Link></h1>
                </li>
                <li className='nav-item'>
                    <Link to='/login'>
                        Iniciar sesión
                    </Link>
                </li>
            </ul>
        </nav>
    )
}