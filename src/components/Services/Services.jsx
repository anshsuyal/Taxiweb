import { motion } from 'framer-motion';
import { FaPlaneDeparture, FaTaxi, FaCarSide, FaBuilding, FaOm, FaMapMarkedAlt, FaUsers, FaRing, FaWhatsapp } from 'react-icons/fa';
import { company } from '../../utils/data';
import './Services.css';

const services = [
  { id: 1, icon: <FaPlaneDeparture />, title: 'Airport Transfer', desc: 'Punctual and comfortable rides to and from Jolly Grant Airport.' },
  { id: 2, icon: <FaTaxi />, title: 'Local Taxi', desc: 'Explore Dehradun city with our premium local cab services.' },
  { id: 3, icon: <FaCarSide />, title: 'Outstation Taxi', desc: 'Safe and reliable outstation trips across North India.' },
  { id: 4, icon: <FaBuilding />, title: 'Corporate Travel', desc: 'Executive travel solutions for your business needs.' },
  { id: 5, icon: <FaOm />, title: 'Char Dham Yatra', desc: 'Spiritual journeys made comfortable with our expert drivers.' },
  { id: 6, icon: <FaMapMarkedAlt />, title: 'Tour Packages', desc: 'Customized Uttarakhand tour packages for a memorable vacation.' },
  { id: 7, icon: <FaUsers />, title: 'Family Travel', desc: 'Spacious SUVs and Tempo Travellers for large family trips.' },
  { id: 8, icon: <FaRing />, title: 'Wedding Travel', desc: 'Luxury vehicles for the bride, groom, and wedding guests.' },
];

export default function Services() {
  return (
    <section className="section services-section">
      <div className="container">
        
        <div className="section-header text-center">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Premium Services
          </motion.h2>
          <motion.p 
            className="section-subtitle mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Experience the highest standard of travel with our diverse range of services tailored to your needs.
          </motion.p>
        </div>

        <div className="services__grid">
          {services.map((service, index) => (
            <motion.div 
              key={service.id}
              className="services__card glass-panel hover-lift"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="services__card-icon">
                {service.icon}
              </div>
              <h3 className="services__card-title">{service.title}</h3>
              <p className="services__card-desc">{service.desc}</p>
              
              <a href={company.whatsapp} target="_blank" rel="noopener noreferrer" className="services__card-btn">
                <FaWhatsapp /> Book Now
              </a>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
