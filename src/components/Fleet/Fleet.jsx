import { motion } from 'framer-motion';
import { FaUserFriends, FaSuitcase, FaSnowflake, FaArrowRight } from 'react-icons/fa';
import { company } from '../../utils/data';
import './Fleet.css';

const vehicles = [
  {
    id: 1,
    name: 'Premium Sedan',
    desc: 'Swift Dzire, Honda Amaze, or similar',
    image: 'https://i.pinimg.com/736x/48/1f/2e/481f2e8c044582acacda7df7a39a2cb3.jpg',
    capacity: 7,
    luggage: 2,
    ac: true,
  },
  {
    id: 2,
    name: 'Luxury SUV',
    desc: 'Toyota Fortuner or similar',
    image: 'https://i.pinimg.com/736x/e1/f8/32/e1f8329b24a539516201dd03437aef6f.jpg',
    capacity: 7,
    luggage: 4,
    ac: true,
  },
  {
    id: 3,
    name: 'Maruti Ertiga',
    desc: 'Comfortable family MUV',
    image: 'https://i.pinimg.com/1200x/e8/5a/d9/e85ad9c367ef9525526c1bf430a43014.jpg',
    capacity: 7,
    luggage: 3,
    ac: true,
  },
  {
    id: 4,
    name: 'Toyota Innova',
    desc: 'Reliable & spacious long-distance cruiser',
    image: 'https://i.pinimg.com/1200x/9f/87/23/9f872317bbc6424216d82b6dbc4790ef.jpg',
    capacity: 7,
    luggage: 4,
    ac: true,
  },
  {
    id: 5,
    name: 'Innova Crysta',
    desc: 'Premium MUV for ultimate comfort',
    image: 'https://i.pinimg.com/1200x/97/3b/55/973b5575ddc955381e3b3b6ef3c228b5.jpg',
    capacity: 7,
    luggage: 4,
    ac: true,
  },
  {
    id: 6,
    name: 'Tempo Traveller',
    desc: 'Perfect for group tours and Char Dham Yatra',
    image: 'https://i.pinimg.com/736x/2a/7d/e5/2a7de5327f1e2ab6f5f6c6b94b35b996.jpg',
    capacity: 7,
    luggage: 8,
    ac: true,
  }
];

export default function Fleet() {
  return (
    <section className="section fleet-section">
      <div className="container">
        <div className="section-header text-center">
          <motion.span 
            className="section-tag"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Our Fleet
          </motion.span>
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Travel in Luxury & Style
          </motion.h2>
          <motion.p 
            className="section-subtitle mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Choose from our wide range of well-maintained, premium vehicles designed to make your journey as comfortable as possible.
          </motion.p>
        </div>

        <div className="fleet__grid">
          {vehicles.map((vehicle, index) => (
            <motion.div 
              key={vehicle.id}
              className="fleet__card glass-panel hover-lift"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="fleet__image-container">
                <img src={vehicle.image} alt={vehicle.name} className="fleet__image" />
              </div>
              
              <div className="fleet__content">
                <h3 className="fleet__name">{vehicle.name}</h3>
                <p className="fleet__desc">{vehicle.desc}</p>
                
                <div className="fleet__features">
                  <div className="fleet__feature">
                    <FaUserFriends /> <span>{vehicle.capacity}</span>
                  </div>
                  <div className="fleet__feature">
                    <FaSuitcase /> <span>{vehicle.luggage}</span>
                  </div>
                  {vehicle.ac && (
                    <div className="fleet__feature">
                      <FaSnowflake /> <span>A/C</span>
                    </div>
                  )}
                </div>

                <a href={company.whatsapp} target="_blank" rel="noopener noreferrer" className="btn btn-outline fleet__btn">
                  Book Now <FaArrowRight />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
