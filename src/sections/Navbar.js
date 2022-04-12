import css from './Navbar.module.css';
import logo from '../assets/logo.svg';

export default function Navbar() {
    return <nav className={css.navbar}>
            <div className={css.logo}>
                <img src={logo} alt='company_logo' />
            </div>
            <div className={css.links}>
                <ul className={css.list}>
                    <li><a href='#'>About Us</a></li>
                    <li><a href='#'>Our Service</a></li>
                    <li><a href='#'>The Team</a></li>
                    <li><a href='#'>Portfolio</a></li>
                    <li><a href='#'><button>Get In Touch</button></a></li>
                </ul>
            </div>
        </nav>

}