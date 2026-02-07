import Hero from './home/partials/hero';
import Stats from './home/partials/stats';
import Skills from './home/partials/skills';
import Comparison from './home/partials/comparison';
import Experience from './home/partials/experience';
import Portfolio from './home/partials/portfolio';
import Testimonials from './home/partials/testimonials';
import FAQ from './home/partials/faq';
import Contact from './home/partials/contact';
import Footer from './home/partials/footer';

export default function Home() {
  return (
    <div className='font-family-sans bg-black'>
      <Hero />
      <Stats />
      <Skills />
      <Comparison />
      <Experience />
      <Portfolio />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
}
