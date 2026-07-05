import { motion } from 'framer-motion';
import { bookingSteps } from '../../utils/data';
import './BookingProcess.css';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.2 },
  },
};

const stepVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export default function BookingProcess() {
  return (
    <section className="section booking-section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <span className="section-tag">How It Works</span>
          <h2 className="section-title">Book in 4 Easy Steps</h2>
          <p className="section-subtitle">
            Getting your premium ride is simple. Follow these steps and
            you&apos;ll be on your way in no time.
          </p>
        </motion.div>

        <motion.div
          className="booking-steps"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {bookingSteps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.id}
                className="booking-step"
                variants={stepVariants}
              >
                <div className="booking-step-number">
                  <span>0{step.id}</span>
                </div>
                <div className="booking-step-line-wrapper">
                  <div className="booking-step-line" />
                </div>
                <div className="booking-step-content">
                  <div className="booking-step-icon-wrapper">
                    <Icon className="booking-step-icon" />
                  </div>
                  <h3 className="booking-step-title">{step.title}</h3>
                  <p className="booking-step-desc">{step.description}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
