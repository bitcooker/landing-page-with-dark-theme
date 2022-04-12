import './App.css';

import Navbar from './sections/Navbar';
import Header from './sections/Header';
import Partners from './sections/Partners';
import Service from './sections/Service';
import Details from './sections/Details';
import Features from './sections/Features';
import Pricing from './sections/Pricing';
import Future from './sections/Future';
import Testimonial from './sections/Testimonial';
import Newsletter from './sections/Newsletter';
import Footer from './sections/Footer';

function App() {
  return <article>
    <Navbar />
    <Header />
    <Partners />
    <Service />
    <Details />
    <Features />
    <Pricing />
    <Future />
    <Testimonial />
    <Newsletter />
    <Footer />
  </article>
}

export default App;
