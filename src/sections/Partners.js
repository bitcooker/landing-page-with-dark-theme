import css from './Partners.module.css';

import amazon from '../assets/amazon.png';
import meundies from '../assets/meundies.png';
import sitepoint from '../assets/sitepoint.png';
import slack from '../assets/slack.png';
import woo from '../assets/woocommerce.png';

export default function Partners() {
    return <section className={`padding ${css.partners}`}>
        <div className={css.text}>Proud partners at Hubspot & Segment</div>
        <div><img src={slack} alt='logo' /></div>
        <div><img src={amazon} alt='logo' /></div>
        <div><img src={woo} alt='logo' /></div>
        <div><img src={meundies} alt='logo' /></div>
        <div><img src={sitepoint} alt='logo' /></div>
    </section>
}