import { motion } from 'framer-motion';
import { FaWhatsapp, FaShieldAlt, FaCar, FaClock, FaMoneyBillWave } from 'react-icons/fa';
import { company } from '../../utils/data';
import './Hero.css';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] } },
};

const features = [
  { icon: <FaClock />, title: 'Available 24×7' },
  { icon: <FaShieldAlt />, title: 'Safe Journey' },
  { icon: <FaCar />, title: 'Professional Drivers' },
  { icon: <FaMoneyBillWave />, title: 'Transparent Pricing' },
];

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__background"></div>
      <div className="hero__grid container">
        
        {/* Left Content */}
        <motion.div 
          className="hero__content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="hero__badge" variants={itemVariants}>
            <span className="hero__badge-dot"></span>
            Trusted Taxi & Travel Partner
          </motion.div>
          
          <motion.h1 className="hero__title" variants={itemVariants}>
            Explore Uttarakhand <br /> with <span className="text-gradient">AVENTO</span>
          </motion.h1>
          
          <motion.p className="hero__subtitle" variants={itemVariants}>
            Safe <span className="hero__dot">•</span> Reliable <span className="hero__dot">•</span> Comfortable
            <br />
            <span className="hero__desc">Experience premium travel solutions with Dehradun's finest fleet. From airport transfers to majestic Char Dham Yatras.</span>
          </motion.p>
          
          <motion.div className="hero__actions" variants={itemVariants}>
            <a href={company.whatsapp} target="_blank" rel="noopener noreferrer" className="btn btn-accent">
              Get Instant Quote
            </a>
            <a href={company.whatsapp} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              <FaWhatsapp size={20} /> WhatsApp Now
            </a>
          </motion.div>
          
          <motion.div className="hero__contact" variants={itemVariants}>
            <span>Or call us directly at:</span>
            <a href={`tel:${company.phone.replace(/\s+/g, '')}`} className="hero__phone">
              {company.phone}
            </a>
          </motion.div>
        </motion.div>

        {/* Right Content - Visuals */}
        <motion.div 
          className="hero__visuals"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <div className="hero__image-wrapper">
            <img 
              src="https://i.pinimg.com/736x/f5/d4/07/f5d4073ed4a5d6988570ce221c24354e.jpg" 
              alt="Premium SUV" 
              className="hero__main-image"
            />
            
            {/* Floating feature cards */}
            {features.map((feat, index) => (
              <motion.div 
                key={index}
                className={`hero__floating-card glass-panel hero__float-${index + 1}`}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 + (index * 0.15), duration: 0.6 }}
                whileHover={{ y: -5, scale: 1.05 }}
              >
                <div className="hero__float-icon">{feat.icon}</div>
                <span className="hero__float-title">{feat.title}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
      
      {/* Decorative Lines */}
      <div className="hero__decor hero__decor-1"></div>
      <div className="hero__decor hero__decor-2"></div>
    </section>
  );
}
