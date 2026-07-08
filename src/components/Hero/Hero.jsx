import { useState, useRef, useCallback } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FaPhoneAlt, FaWhatsapp, FaCheckCircle } from 'react-icons/fa';
import { company } from '../../utils/data';
import './Hero.css';
import heroBg from '../../assets/image.jpeg';

const fadeUpVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: 0.2 + i * 0.15, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

const headingVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15, delayChildren: 0.3 },
  },
};

const headingLineVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

const glassPanelVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, delay: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

const listItems = [
  "24×7 Service",
  "Verified Drivers",
  "Airport Transfers",
  "Safe & Comfortable Journey",
  "Transparent Pricing"
];

function useMouseParallax(sensitivity = 20) {
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const ref = useRef(null);

  const handleMouse = useCallback((e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * sensitivity;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * sensitivity;
    setOffset({ x, y });
  }, [sensitivity]);

  return { ref, offset, handleMouse };
}

export default function Hero() {
  const { ref: heroRef, offset, handleMouse } = useMouseParallax(15);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const contentY = useTransform(scrollYProgress, [0, 0.3], [0, -40]);

  return (
    <section ref={heroRef} className="hero" onMouseMove={handleMouse}>
      <motion.div
        className="hero__bg"
        style={{
          backgroundImage: `url(${heroBg})`,
          scale: bgScale,
          x: offset.x * 0.5,
          y: offset.y * 0.5,
        }}
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      />
      <div className="hero__overlay" />

      <motion.div className="hero__content container" style={{ y: contentY }}>
        <div className="hero__left">
          <motion.span
            className="hero__badge"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <span className="hero__badge-dot" />
            Trusted Taxi & Travel Partner
          </motion.span>

          <motion.h1
            className="hero__heading"
            variants={headingVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.span className="hero__heading-line" variants={headingLineVariants}>
              Explore
            </motion.span>
            <motion.span className="hero__heading-line" variants={headingLineVariants}>
              Uttarakhand
            </motion.span>
            <motion.span className="hero__heading-line" variants={headingLineVariants}>
              with <span className="hero__heading-gold">AVENTO</span>
            </motion.span>
          </motion.h1>

          <motion.p
            className="hero__description"
            variants={fadeUpVariants}
            custom={1}
            initial="hidden"
            animate="visible"
          >
            Experience the pinnacle of luxury travel with Uttarakhand's finest fleet.
            From seamless airport transfers to majestic Char Dham Yatras, we curate every journey to perfection.
          </motion.p>

          <motion.div
            className="hero__actions"
            variants={fadeUpVariants}
            custom={2}
            initial="hidden"
            animate="visible"
          >
            <a
              href={company.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="btn hero__btn hero__btn--primary"
            >
              <span className="btn__ripple" />
              Book your ride
            </a>
            <a
              href={company.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="btn hero__btn hero__btn--secondary"
            >
              <FaWhatsapp size={20} />
              WhatsApp Now
            </a>
          </motion.div>

          <motion.div
            className="hero__contact"
            variants={fadeUpVariants}
            custom={3}
            initial="hidden"
            animate="visible"
          >
            <span className="hero__contact-label">Or call us directly at:</span>
            <a href={`tel:${company.phone.replace(/\s+/g, '')}`} className="hero__phone">
              <FaPhoneAlt className="hero__phone-icon" />
              {company.phone}
            </a>
          </motion.div>
        </div>

        <div className="hero__right">
          <motion.div 
            className="hero__glass-panel"
            variants={glassPanelVariants}
            initial="hidden"
            animate="visible"
          >
            <h3 className="hero__glass-title">Why Choose Us</h3>
            <ul className="hero__features-list">
              {listItems.map((item, index) => (
                <motion.li 
                  key={index} 
                  className="hero__feature-item"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                >
                  <FaCheckCircle className="hero__feature-icon" />
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
