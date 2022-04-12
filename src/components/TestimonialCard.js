import css from './TestimonialCard.module.css';

import quotes from '../assets/quotes.svg';
import stars from '../assets/stars.svg';

export default function TestimonialCard({image, name, comment}) {
    return <div className={css.container}><div className={css.card}>
        <img className={css.profile} src={image} alt='profile photo' />
        <img className={css.quotes} src={quotes} alt='quotes' />
        <img className={css.stars} src={stars} alt='rating' />
        <h6>{name}</h6>
        <p>{comment}</p>
    </div></div>
    
}