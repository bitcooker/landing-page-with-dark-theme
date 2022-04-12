import css from './Testimonial.module.css';

import TestimonialCard from '../components/TestimonialCard';

import pic1 from '../assets/profile-pic1.png';
import pic2 from '../assets/profile-pic2.png';
import pic3 from '../assets/profile-pic3.png';

import slideButtons from '../assets/slide-buttons.svg';

export default function Testimonial() {
    return <section className={css.testimonial}>
        <h2>What our happy clients say</h2>
        <p>Things  that make it the best place to start trading</p>
        <div className={css.flex}>
            <TestimonialCard image={pic2} name='Robin Ayala Doe' comment='From the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast.' />
            <TestimonialCard image={pic1} name='John De Marli' comment='Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.' />
            <TestimonialCard image={pic3} name='Rowhan Smith' comment='When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, the headline ' />
        </div>
        <div className={css.buttons}>
            <img src={slideButtons} alt='slide buttons' />
        </div>
    </section>
}