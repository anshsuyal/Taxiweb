import { motion } from 'framer-motion';
import { FaBullseye, FaEye, FaShieldAlt, FaHandshake, FaHeart, FaClock } from 'react-icons/fa';
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
            Your Trusted Travel Partner Across Uttarakhand — Safe, Reliable & Comfortable Journeys
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
               Avento Global Travel Solutions was founded with a simple vision—to redefine the way people travel across Uttarakhand by offering safe, comfortable, and dependable transportation services. We understand that every journey is unique, whether it’s a family vacation, a spiritual pilgrimage, a business trip, or a weekend getaway. That’s why we focus on delivering personalized travel experiences with a commitment to quality, punctuality, and customer satisfaction.</p>

<p>From seamless airport transfers and local sightseeing tours to Char Dham Yatra, hill station trips, corporate travel, and customized outstation journeys, Avento offers complete travel solutions tailored to every traveler’s needs. Our experienced and courteous drivers, clean and well-maintained vehicles, and transparent pricing ensure that every ride is smooth, secure, and stress-free.</p>

<p>We believe that great journeys are built on trust, reliability, and attention to detail. Every booking is handled with professionalism, ensuring our customers receive timely service, comfortable rides, and complete peace of mind throughout their journey. Whether you’re exploring the breathtaking beauty of Mussoorie, Rishikesh, Nainital, Auli, Jim Corbett, or embarking on the sacred Char Dham Yatra, our team is dedicated to making your travel experience effortless and memorable.</p>

<p>At Avento, we don’t just provide transportation—we create travel experiences that leave lasting memories. With a customer-first approach, 24×7 support, flexible booking options, and an unwavering commitment to excellence, we strive to become the most trusted travel partner for individuals, families, and businesses across Uttarakhand. Every mile we travel reflects our promise of safety, comfort, transparency, and exceptional service, ensuring that every journey with Avento is one you’ll always remember.
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
                To deliver safe, comfortable, and transparent travel services with professional drivers, 
                well-maintained vehicles, and 24×7 customer support across Uttarakhand.
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
                To become Uttarakhand’s most trusted travel brand by delivering exceptional service,
                fair pricing, and memorable travel experiences.
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

      <WhyChooseUs />

      <CTA />
    </motion.div>
  );
}
