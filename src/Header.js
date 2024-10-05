import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <article>
            <nav className='navbar navbar-expand-md navbar-dark bg-transparent p-4'>
                <Link className='navbar-brand' to='/homepage'>Galactic Pioneers</Link>
                <button className='navbar-toggler' data-bs-toggle="collapse"
                    data-bs-target="#navbar-content">
                    <span className='navbar-toggler-icon'></span>
                </button>

                <div className='collapse navbar-collapse justify-content-end' id='navbar-content'>
                    <ul className='navbar-nav'>
                        <li className='nav-item'>
                            <Link className='nav-link' to="/homepage">Home</Link>
                        </li>
                        <li className='nav-item'>
                            <Link className='nav-link' to="/news">News</Link>
                        </li>
                        <li className='nav-item'>
                            <Link className='nav-link' to='/cosmic-explorer'>Cosmic Explorer</Link>
                        </li>
                        <li className='nav-item'>
                            <Link className='nav-link' to='/pha-explorer'>NEO Explorer</Link>
                        </li>
                        <li className='nav-item'>
                            <Link className='nav-link' to='/workspace'>Worksapce</Link>
                        </li>
                    </ul>
                </div>
            </nav>
            <header>
                <h1>WELCOME</h1>
                <h4>To Our Universe <span>Galactic Pioneers</span></h4>
                <p>We are a team of web developers / scientific researxhers</p>
                <Link className='btn btn-secondary' to='/login'>Login</Link>
            </header>
        </article>
    )
}

export default Header;