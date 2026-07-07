import { motion } from 'framer-motion';
import { FaBullseye, FaEye, FaShieldAlt, FaHandshake, FaHeart, FaClock } from 'react-icons/fa';
import { achievements } from '../../utils/data';
import WhyChooseUs from '../../components/WhyChooseUs/WhyChooseUs';
import CTA from '../../components/CTA/CTA';
import './About.css';

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const values = [
  { id: 1, icon: FaShieldAlt, title: 'Safety', description: 'Your safety is our top priority. All vehicles are GPS-tracked, insured, and regularly maintained.' },
  { id: 2, icon: FaHandshake, title: 'Reliability', description: 'Trusted by 5000+ travelers. We deliver on our promises with punctual and professional service.' },
  { id: 3, icon: FaHeart, title: 'Transparency', description: 'No hidden charges. Clear pricing, detailed invoices, and upfront communication at every step.' },
  { id: 4, icon: FaClock, title: 'Customer First', description: '24/7 support, flexible bookings, and personalized solutions tailored to your needs.' },
];

export default function About() {
  return (
    <motion.div
      className="about-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <section className="page-banner">
        <div className="container">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            About AVENTO
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            Beyond Every Journey — Your trusted travel partner since 2013
          </motion.p>
        </div>
      </section>

      <section className="section story-section">
        <div className="container">
          <div className="story__grid">
            <motion.div
              className="story__content"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="section-tag">Our Story</span>
              <h2 className="section-title">The AVENTO Journey</h2>
              <p className="story__text">
                Founded in 2013 in the heart of Dehradun, AVENTO Global Travel Solutions began with a simple vision — 
                to transform the way people travel across Uttarakhand. What started with a small fleet of 5 cars 
                has grown into a premier travel company trusted by thousands.
              </p>
              <p className="story__text">
                Our mission is to provide safe, reliable, and comfortable travel solutions at competitive prices. 
                From local city rides to the sacred Char Dham Yatra, from airport transfers to corporate travel 
                management — we handle every journey with the same dedication and professionalism.
              </p>
              <p className="story__text">
                With a fleet of 50+ well-maintained vehicles, experienced drivers, and round-the-clock customer 
                support, we are committed to making every journey memorable and stress-free.
              </p>
            </motion.div>
            <motion.div
              className="story__image"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img
                src="https://i.pinimg.com/736x/6f/a3/6a/6fa36aa2c367da06b2a4c8ae1cf9ee02.jpg"
                alt="AVENTO team collaboration"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section mission-section">
        <div className="container">
          <div className="mission__grid">
            <motion.div
              className="mission__card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="mission__icon">
                <FaBullseye />
              </div>
              <h3 className="mission__title">Our Mission</h3>
              <p className="mission__text">
                To provide safe, reliable, and comfortable travel solutions that exceed expectations, 
                while promoting tourism and connectivity across Uttarakhand.
              </p>
            </motion.div>
            <motion.div
              className="mission__card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
            >
              <div className="mission__icon">
                <FaEye />
              </div>
              <h3 className="mission__title">Our Vision</h3>
              <p className="mission__text">
                To be Uttarakhand's most trusted travel partner, setting industry standards for quality, 
                safety, and customer satisfaction in every journey we undertake.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section values-section">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="section-tag">Core Values</span>
            <h2 className="section-title">What Drives Us</h2>
            <p className="section-subtitle">
              Our guiding principles that shape every aspect of our service
            </p>
          </motion.div>

          <motion.div
            className="values__grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <motion.div key={value.id} className="values__card" variants={itemVariants}>
                  <div className="values__card-icon">
                    <Icon />
                  </div>
                  <h3 className="values__card-title">{value.title}</h3>
                  <p className="values__card-desc">{value.description}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      <section className="section timeline-section">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="section-tag">Our Journey</span>
            <h2 className="section-title">Company Timeline</h2>
            <p className="section-subtitle">
              Milestones that shaped AVENTO into what it is today
            </p>
          </motion.div>

          <div className="timeline">
            <div className="timeline__line" />
            {achievements.map((item, index) => (
              <motion.div
                key={item.year}
                className={`timeline__item ${index % 2 === 0 ? 'timeline__item--left' : 'timeline__item--right'}`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="timeline__content">
                  <div className="timeline__dot-wrapper">
                    <div className="timeline__dot" />
                  </div>
                  <span className="timeline__year">{item.year}</span>
                  <h3 className="timeline__title">{item.title}</h3>
                  <p className="timeline__desc">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <WhyChooseUs />

      <CTA />
    </motion.div>
  );
}
