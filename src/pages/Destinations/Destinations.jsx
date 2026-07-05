import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaMapMarkerAlt, FaRoad, FaClock, FaSearch, FaArrowRight } from 'react-icons/fa';
import { destinations } from '../../utils/data';
import './Destinations.css';

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5 } },
  exit: { opacity: 0, y: -20, scale: 0.95, transition: { duration: 0.3 } },
};

export default function Destinations() {
  const [search, setSearch] = useState('');

  const filtered = destinations.filter((d) =>
    d.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <motion.div
      className="destinations-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <section className="page-banner">
        <div className="container">
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            Popular Destinations
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.15 }}>
            Discover the beauty of Uttarakhand with AVENTO
          </motion.p>
        </div>
      </section>

      <section className="section destinations-section">
        <div className="container">
          <div className="destinations__search">
            <FaSearch className="destinations__search-icon" />
            <input
              type="text"
              placeholder="Search destinations..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <AnimatePresence mode="wait">
            {filtered.length === 0 ? (
              <motion.div
                className="destinations__empty"
                key="empty"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <p>No destinations found matching your search.</p>
              </motion.div>
            ) : (
              <motion.div
                className="destinations__grid"
                key={search}
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                <AnimatePresence mode="popLayout">
                  {filtered.map((d) => (
                    <motion.div
                      key={d.id}
                      className="destinations__card"
                      layout
                      variants={cardVariants}
                      exit="exit"
                    >
                      <div className="destinations__card-image">
                        <img src={d.image} alt={d.name} loading="lazy" />
                        <div className="destinations__card-badge">
                          <FaMapMarkerAlt />
                          <span>{d.name}</span>
                        </div>
                      </div>
                      <div className="destinations__card-body">
                        <p className="destinations__card-desc">{d.description}</p>
                        <div className="destinations__card-info">
                          <div className="destinations__info-item">
                            <FaRoad />
                            <span>{d.distance}</span>
                          </div>
                          <div className="destinations__info-item">
                            <FaClock />
                            <span>{d.duration}</span>
                          </div>
                        </div>
                        <button className="btn btn-outline destinations__explore-btn">
                          Explore <FaArrowRight />
                        </button>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </motion.div>
  );
}
