import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaCar } from 'react-icons/fa';
import './NotFound.css';

const floatAnimation = {
  y: [0, -12, 0],
  transition: {
    duration: 2.5,
    repeat: Infinity,
    ease: 'easeInOut',
  },
};

export default function NotFound() {
  return (
    <motion.div
      className="not-found-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className="not-found__content">
        <motion.div
          className="not-found__car"
          animate={floatAnimation}
        >
          <FaCar />
        </motion.div>

        <motion.h1
          className="not-found__title"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          404
        </motion.h1>

        <motion.h2
          className="not-found__heading"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
        >
          Page Not Found
        </motion.h2>

        <motion.p
          className="not-found__desc"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          Oops! The page you're looking for doesn't exist or has been moved.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.65 }}
        >
          <Link to="/" className="btn btn-primary not-found__btn">
            Back to Home
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
}
