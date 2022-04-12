import css from './Newsletter.module.css';

import {BsFillArrowRightCircleFill} from 'react-icons/bs';

export default function Newsletter() {
    return <section className='padding'>
        <div className={css.card}>
            <div className={css.text}>
                <h5>Subscribe newsletter</h5>
                <p>The copy warned the Little Blind Text, that where it came from it would have been rewritten.</p>
            </div>
            <div className={css.input}>
                <input type='email' placeholder='Enter your email address' />
                <button type='button'><span className={css.first}>Discover</span> <span className={css.second}><BsFillArrowRightCircleFill /></span></button>
            </div>
        </div>
    </section>
}