import css from './Future.module.css';

import FutureCard from '../components/FutureCard';
import {BsFillCheckCircleFill} from 'react-icons/bs';

import icon1 from '../assets/future-icon1.png';
import icon2 from '../assets/future-icon2.png';
import icon3 from '../assets/future-icon3.png';
import icon4 from '../assets/future-icon4.png';

export default function Future() {
    return <section className={`padding ${css.future}`}>
        <div className={css.text}>
            <h3>Future of support with new shape</h3>
            <p>Discuss your goals, determine success metrics, identify problems</p>
            <div><div><BsFillCheckCircleFill /> UX design content strategy</div>
            <div><BsFillCheckCircleFill /> Development bring</div></div>
            <button type='button'>Get Started</button>
        </div>

        <div className={css.cards}>
            <FutureCard icon={icon1} title='Web Design' description='One for all and all for one, Muskehounds are always ready.' />
            <FutureCard icon={icon2} title='Ad-Creatives' description='Alphabet Village and the subline of her own road.' />
            <FutureCard icon={icon3} title='Automation' description='Little Blind Text should turn around and return.' />
            <FutureCard icon={icon4} title='Infographics' description='Nothing the copy said could convince her.' />
        </div>
    </section>
}