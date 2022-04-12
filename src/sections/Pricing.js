import css from './Pricing.module.css';

export default function Pricing() {
    return <section className={`padding ${css.pricing}`}>
    <div>
        <div className={css.card}>
            <h3>Pricing</h3>
            <div>
                <div>
                    <p className={css.text}>Starter</p>
                    <p className={css.price}>$4,000/mo</p>
                </div>
                <div>
                    <p className={css.text}>Business</p>
                    <p className={css.price}>$7,500/mo</p>
                </div>
            </div><br /><br /><br />
            <div className={css.input}>
            <div>1</div><input type='range' min='1' max='50' value='4' /><div>50+</div>
            </div>
            <br /><br /><br />
        </div>

        <div className={css.button}>
            <div className={css.buttonText}>Ready to get started?</div>
            <div className={css.buttonButton}><button type='button'>Get Started</button></div>
        </div>
    </div>
    </section>
}