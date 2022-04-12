import css from './Details.module.css';
import ServiceCard from '../components/ServiceCard';

import icon1 from '../assets/details-icon1.png';
import icon2 from '../assets/details-icon2.png';
import icon3 from '../assets/details-icon3.png';

export default function Details() {
    return <section className={`padding ${css.details}`}>
        <div className={css.intro}>
            <h2>How can we help your business?</h2>
            <p>When you resell besnik, you build trust and increase</p>
        </div>
        <div className={css.cards}>
           <ServiceCard icon={icon1} title='Find out what you need' description='We present you a proposal and discuss nitty- gritty like' /> 
           <ServiceCard icon={icon2} title='Work out the details'  description='Communication protocols apart from engagement models' /> 
           <ServiceCard icon={icon3} title='We get to work fast' description='Protocols apart from engage models, pricing billing' /> 
        </div>
        <div className={css.button}>
            <button type='button'>Become a partner</button>
        </div>
        
    </section>
}