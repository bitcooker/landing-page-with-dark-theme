import css from './Footer.module.css';

import {FaFacebookSquare} from 'react-icons/fa';
import {FaTwitterSquare} from 'react-icons/fa';
import {FaLinkedin} from 'react-icons/fa';


export default function Footer() {
    return <footer className={`padding ${css.footer}`}>
        <div className={css.links}>
            <div className={css.div1}>
                <h3>The Next Design</h3>
                <p>The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times.</p>
                <div className={css.social}>
                    <FaFacebookSquare />
                    <FaTwitterSquare />
                    <FaLinkedin />
                </div>
            </div>
            <div className={css.div2}>
                <h3>Company</h3>
                <p>About</p>
                <p>Terms of Use</p>
                <p>Privacy Policy</p>
                <p>How it Works</p>
                <p>Contact Us</p>
            </div>
            <div className={css.div2}>
                <h3>Get Help</h3>
                <p>Support Center</p>
                <p>24h Service</p>
                <p>Quick Chat</p>
            </div>
            <div className={css.div2}>
                <h3>Support</h3>
                <p>FAQ</p>
                <p>Policy</p>
                <p>Business</p>
            </div>
            <div className={css.div2}>
                <h3>Contact</h3>
                <p>WhatsApp</p>
                <p>Support 24</p>
            </div>
        </div>

        <hr className={css.hr} />

        <div className={css.copyright}>
            <div>Copyrigth @2022 - radanjovic</div>
            <div>Created by: Radan Jovic</div>
        </div>
    </footer>
}