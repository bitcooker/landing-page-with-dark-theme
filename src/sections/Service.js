import css from './Service.module.css';

import i1 from '../assets/service-icon1.png';
import i2 from '../assets/service-icon2.svg';

import ServiceContainer from '../components/ServiceContainer';

export default function Service() {
    return <section className={`padding ${css.service}`}>

        <div className={css.text}>
            <p>ACHIEVE MORE</p>
            <h3>Purpose of a convoy is to keep your team</h3>
        </div>
        <ServiceContainer icon={i1} title='Built for impact' text='We identify and nurture a truly diverse team of designers, developers and marketers' />
        <ServiceContainer icon={i2} title='In sync with you' text='We work the way you do by adapting to your workflows and rhythm we aim to blend in for a seamless.' />
    </section>
}