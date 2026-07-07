import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaCheckCircle, FaArrowRight } from 'react-icons/fa';
import { company } from '../../utils/data';
import Hero from '../../components/Hero/Hero';
import Services from '../../components/Services/Services';
import Destinations from '../../components/Destinations/Destinations';
import WhyChooseUs from '../../components/WhyChooseUs/WhyChooseUs';
import Fleet from '../../components/Fleet/Fleet';
import CTA from '../../components/CTA/CTA';
import './Home.css';

const highlights = [
  'Reliable taxi services across Dehradun & Uttarakhand',
  'Professional & verified drivers',
  'Well-maintained, sanitized vehicles',
  '24/7 customer support',
  'Transparent pricing with no hidden charges',
];

export default function Home() {
  return (
    <motion.div
      className="home-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <Hero />

      {/* About Section inline in Home for now to match layout */}
      <section className="section about-section">
        <div className="container">
          <div className="about__grid">
            
            <motion.div 
              className="about__image-wrapper"
              initial={{ opacity: 1, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <img
                src="https://i.pinimg.com/736x/6f/a3/6a/6fa36aa2c367da06b2a4c8ae1cf9ee02.jpg"
                alt="Travel in Uttarakhand"
                className="about__image"
              />
            </motion.div>

            <motion.div 
              className="about__content"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <span className="section-tag">About AVENTO</span>
              <h2 className="section-title">Beyond Every Journey</h2>
              <p className="about__desc">
                {company.name} is a Dehradun-based premium travel company providing reliable taxi services,
                airport transfers, outstation travel, Char Dham Yatra packages, and customized travel solutions
                across Uttarakhand. With over 12 years of experience, we are committed to making every journey
                safe, comfortable, and memorable.
              </p>
              
              <ul className="about__highlights">
                {highlights.map((item, i) => (
                  <motion.li 
                    key={i} 
                    className="about__highlight"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + (i * 0.1) }}
                  >
                    <FaCheckCircle className="about__highlight-icon" />
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
              
              <Link to="/about" className="btn btn-outline about__btn">
                Read More <FaArrowRight />
              </Link>
            </motion.div>
            
          </div>
        </div>
      </section>

      <Services />
      <Destinations />
      <WhyChooseUs />
      <Fleet />
      <CTA />
    </motion.div>
  );
}
