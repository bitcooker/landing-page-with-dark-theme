import css from './Header.module.css';
import ball from '../assets/header-photo.svg';
import tagline from '../assets/header-tagline.svg';
import ButtonSign from '../components/ButtonSign';



export default function Header() {
    return <section className={`padding ${css.header}`}>
        <div className={css.text}>
            <div className={css.tagline}><img src={tagline} alt='#' /> Jump start your growth</div>
            <h1>We boost the growth for <span>Startup</span> to Fortune 500 Companies </h1>
            <p>Get the most accurate leads, sales peopele training and conversions, tools and more — all within the same one billing.</p>
            <div className={css.input}>
                <input type='text' placeholder='Email address' />
                <button type='button'><ButtonSign /></button>
            </div>
        </div>
        <div className={css.image}>
            <img src={ball} alt='header photo' />
        </div>
    </section>
}