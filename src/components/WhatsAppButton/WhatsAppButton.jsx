import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';
import { company } from '../../utils/data';
import './WhatsAppButton.css';

export default function WhatsAppButton() {
  return (
    <motion.a
      href={company.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-btn"
      aria-label="Book on WhatsApp"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: 'spring', stiffness: 260, damping: 20, delay: 0.5 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <FaWhatsapp size={24} />
      <span className="whatsapp-btn__tooltip">Book on WhatsApp</span>
    </motion.a>
  );
}
