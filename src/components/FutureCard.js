import css from './FutureCard.module.css';

export default function FutureCard({icon, title, description}) {
    return <div className={css.card}>
        <div className={css.img}><img src={icon} alt='icon' /></div>
        <div className={css.title}>{title}</div>
        <div className={css.description}>{description}</div>
        <div className={css.cta}>LEARN MORE</div>
    </div>
}