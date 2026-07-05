import { motion } from 'framer-motion';
import { FaPhoneAlt } from 'react-icons/fa';
import './CallButton.css';

export default function CallButton() {
  return (
    <motion.a
      href="tel:+917456918807"
      className="call-btn"
      aria-label="Call Now"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: 'spring', stiffness: 260, damping: 20, delay: 0.3 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <FaPhoneAlt size={20} />
      <span className="call-btn__tooltip">Call Now</span>
    </motion.a>
  );
}
