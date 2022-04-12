import css from './Features.module.css';

import {BsArrowRight} from 'react-icons/bs';

import photo1 from '../assets/features1.png';
import photo2 from '../assets/features2.png';

export default function Features() {
    return <section className={`padding ${css.features}`}>
        <div className={css.container}>
            <div>
                <img src={photo1} alt='photo' />
            </div>
            <div>
                <p className={css.schedule}>SCHEDULE</p>
                <h5>Great customer relationship starts here</h5>
                <p className={css.description}>80 days around the world, we’ll find a pot of gold just sitting where the rainbow’s ending. Time — we’ll fight against the time, and we’ll fly on the white wings of the wind.</p>
                <p className={css.link}>Learn more about publishing <BsArrowRight /></p>
            </div>
        </div>

        <div className={css.container}>
            <div>
                <p className={css.monitor}>MONITOR</p>
                <h5>Introducing best mobile carousels</h5>
                <p className={css.description}>Before the ship is really back. Round, round, all around the world. Round, all around the world. Round, all around the world. Round, all around the world.</p>
                <p className={css.link}>Learn more about monitoring <BsArrowRight /></p>
            </div>
            <div>
                <img src={photo2} alt='photo' />
            </div>
        </div>
    </section>
}