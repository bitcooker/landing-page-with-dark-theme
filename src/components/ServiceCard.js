import css from './ServiceCard.module.css';

export default function ServiceCard({icon, title, description,}) {

    return <div className={css.card}>
        <img src={icon} alt='icon' />
        <div className={css.text}>
            <h6>{title}</h6>
            <p>{description}</p>
        </div>
    </div>
}