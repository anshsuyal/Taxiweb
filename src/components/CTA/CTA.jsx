import { motion } from 'framer-motion';
import { FaWhatsapp, FaPhoneAlt } from 'react-icons/fa';
import { company } from '../../utils/data';
import './CTA.css';

export default function CTA() {
  return (
    <section className="cta-section">
      <div className="cta__overlay"></div>
      <div className="container cta__container">
        <motion.div 
          className="cta__content"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="cta__tag">Your Journey Begins Here</span>
          <h2 className="cta__title">Ready for Your Next Journey?</h2>
          <p className="cta__subtitle">
            Travel safely and luxuriously with {company.name}. Let us make your next trip unforgettable.
          </p>
          
          <div className="cta__actions">
            <a href={company.whatsapp} target="_blank" rel="noopener noreferrer" className="btn btn-accent cta__btn">
              <FaWhatsapp size={20} /> Book on WhatsApp
            </a>
            <a href={`tel:${company.phone.replace(/\s+/g, '')}`} className="btn btn-outline cta__btn cta__btn-call">
              <FaPhoneAlt /> Call Now
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
