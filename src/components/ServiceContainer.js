import css from './ServiceContainer.module.css';

export default function ServiceContainer({icon, title, text}) {
    return <div className={css.container}>
        <div className={css.image}><img src={icon} alt='icon' /></div>
        <div className={css.text}><h6>{title}</h6>
        <p>{text}</p></div>
        
    </div>
}