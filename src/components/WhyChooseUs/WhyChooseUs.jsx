import { motion } from 'framer-motion';
import { FaUserTie, FaCheckDouble, FaMoneyBillWave, FaHeadset, FaClock, FaBroom, FaMousePointer, FaShieldAlt } from 'react-icons/fa';
import './WhyChooseUs.css';

const features = [
  { icon: <FaUserTie />, title: 'Professional Drivers', desc: 'Courteous, experienced, and highly trained chauffeurs.' },
  { icon: <FaCheckDouble />, title: 'Verified Drivers', desc: 'Background-checked drivers for your complete peace of mind.' },
  { icon: <FaMoneyBillWave />, title: 'Transparent Pricing', desc: 'No hidden costs. What you see is what you pay.' },
  { icon: <FaHeadset />, title: '24×7 Support', roundClock: true, desc: 'Round-the-clock customer service for any assistance.' },
  { icon: <FaClock />, title: 'On-Time Pickup', desc: 'Punctuality is our priority. We never keep you waiting.' },
  { icon: <FaBroom />, title: 'Clean Vehicles', desc: 'Immaculately maintained and sanitized cars.' },
  { icon: <FaMousePointer />, title: 'Easy Booking', desc: 'Seamless booking process via WhatsApp or Call.' },
  { icon: <FaShieldAlt />, title: 'Safe Journey', desc: 'Highest safety standards maintained on all routes.' },
];

export default function WhyChooseUs() {
  return (
    <section className="section why-choose-us">
      <div className="container">
        
        <div className="why-choose-us__layout">
          <div className="why-choose-us__header">
            <motion.span 
              className="section-tag"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              Why AVENTO
            </motion.span>
            <motion.h2 
              className="section-title"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              Experience the Gold Standard in Travel
            </motion.h2>
            <motion.p 
              className="why-choose-us__subtitle"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              We don't just offer rides; we offer an experience. Discover what makes us the preferred choice for premium travel in Uttarakhand.
            </motion.p>
          </div>

          <div className="why-choose-us__grid">
            {features.map((feature, index) => (
              <motion.div 
                key={index}
                className="why-choose-us__card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="why-choose-us__icon">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="why-choose-us__title">{feature.title}</h3>
                  <p className="why-choose-us__desc">{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
