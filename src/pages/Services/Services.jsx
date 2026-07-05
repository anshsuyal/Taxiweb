import { motion } from 'framer-motion';
import { FaCheckCircle, FaArrowRight } from 'react-icons/fa';
import { services, company } from '../../utils/data';
import CTA from '../../components/CTA/CTA';
import './Services.css';

const serviceImages = {
  local: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=600&q=80',
  airport: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=600&q=80',
  outstation: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=600&q=80',
  chardham: 'https://images.unsplash.com/photo-1621961458348-013f03d89d2d?w=600&q=80',
  tours: 'https://images.unsplash.com/photo-1501785888041-af3ef425b470?w=600&q=80',
  corporate: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80',
  family: 'https://images.unsplash.com/photo-1549633030-91b9e3e5e13e?w=600&q=80',
  wedding: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=600&q=80',
  luxury: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=600&q=80',
};

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const sectionVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Services() {
  return (
    <motion.div
      className="services-page"
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
            Our Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            Comprehensive travel solutions across Uttarakhand
          </motion.p>
        </div>
      </section>

      <motion.div
        className="services-detailed"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.05 }}
      >
        {services.map((service, index) => {
          const Icon = service.icon;
          const isEven = index % 2 === 0;
          const imageUrl = serviceImages[service.slug];

          return (
            <motion.section
              key={service.id}
              id={service.slug}
              className={`service-detail ${isEven ? 'service-detail--even' : 'service-detail--odd'}`}
              variants={sectionVariants}
            >
              <div className="container">
                <div className="service-detail__grid">
                  <div className={`service-detail__image ${isEven ? '' : 'service-detail__image--order-2'}`}>
                    <div className="service-detail__image-wrapper">
                      <img src={imageUrl} alt={service.title} loading="lazy" />
                      <div className="service-detail__image-overlay" />
                      <div className="service-detail__image-icon">
                        <Icon />
                      </div>
                    </div>
                  </div>
                  <div className={`service-detail__content ${isEven ? '' : 'service-detail__content--order-1'}`}>
                    <span className="section-tag">{service.title}</span>
                    <h2 className="service-detail__title">{service.title}</h2>
                    <p className="service-detail__desc">{service.description}</p>
                    <ul className="service-detail__benefits">
                      {service.benefits.map((benefit, i) => (
                        <li key={i} className="service-detail__benefit">
                          <FaCheckCircle className="service-detail__benefit-icon" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                    <a
                      href={company.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary service-detail__btn"
                    >
                      Book Now <FaArrowRight />
                    </a>
                  </div>
                </div>
              </div>
            </motion.section>
          );
        })}
      </motion.div>

      <CTA />
    </motion.div>
  );
}
