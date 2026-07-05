import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';
import './Destinations.css';

const destinations = [
  {
    id: 1,
    name: 'Mussoorie',
    desc: 'Queen of the Hills, offering breathtaking views of the Doon Valley.',
    image: 'https://i.pinimg.com/736x/57/c5/2c/57c52c61bedf8bafaa0b0087cd7af11a.jpg'
  },
  {
    id: 2,
    name: 'Rishikesh',
    desc: 'The Yoga Capital of the World, situated on the banks of the holy Ganges.',
    image: 'https://i.pinimg.com/736x/95/16/05/9516059d0b57c5210fe69165830075ec.jpg'
  },
  {
    id: 3,
    name: 'Haridwar',
    desc: 'An ancient city and important Hindu pilgrimage site in North India.',
    image: 'https://i.pinimg.com/736x/39/07/17/390717d24262088001753404f781fc56.jpg'
  },
  {
    id: 4,
    name: 'Kedarnath',
    desc: 'A majestic and holy town in the Himalayas, revered by millions.',
    image: 'https://i.pinimg.com/1200x/5c/53/89/5c538971b5a8995e8f5d10fe0705c22e.jpg'
  },
  {
    id: 5,
    name: 'Badrinath',
    desc: 'One of the most important pilgrimage centers in India.',
    image: 'https://i.pinimg.com/736x/71/bd/bc/71bdbc07b5c12801e37c0344233fc385.jpg'
  },
  {
    id: 6,
    name: 'Nainital',
    desc: 'A glittering jewel in the Himalayan necklace, blessed with scenic lakes.',
    image: 'https://i.pinimg.com/736x/07/de/0e/07de0eb0362c2dbd5f40e4f18f19850c.jpg'
  }
];

export default function Destinations() {
  return (
    <section className="section destinations-section">
      <div className="container">
        <div className="section-header text-center">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Popular Destinations
          </motion.h2>
          <motion.p 
            className="section-subtitle mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Discover the most beautiful and spiritually uplifting places in Uttarakhand with our premium travel packages.
          </motion.p>
        </div>

        <div className="destinations__grid">
          {destinations.map((dest, index) => (
            <motion.div 
              key={dest.id}
              className="destinations__card"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="destinations__img-wrapper">
                <img src={dest.image} alt={dest.name} className="destinations__img" />
                <div className="destinations__overlay">
                  <div className="destinations__content">
                    <h3 className="destinations__name">{dest.name}</h3>
                    <p className="destinations__desc">{dest.desc}</p>
                    <button className="destinations__btn">
                      Explore <FaArrowRight />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
