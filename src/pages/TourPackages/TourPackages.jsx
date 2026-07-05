import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaClock, FaCheckCircle, FaLeaf, FaSnowflake, FaMountain, FaWhatsapp } from 'react-icons/fa';
import { tourPackages, company } from '../../utils/data';
import CTA from '../../components/CTA/CTA';
import './TourPackages.css';

const categoryMap = {
  'Char Dham Yatra': 'Pilgrimage',
  'Haridwar Pilgrimage': 'Pilgrimage',
  'Mussoorie Getaway': 'Getaway',
  'Rishikesh Retreat': 'Getaway',
  'Nainital Escape': 'Getaway',
  'Tehri Lake Resort': 'Getaway',
  'Auli Adventure': 'Adventure',
  'Chopta Trek': 'Adventure',
  'Jim Corbett Safari': 'Wildlife',
};

const categories = ['All', 'Pilgrimage', 'Adventure', 'Getaway', 'Wildlife'];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  exit: { opacity: 0, scale: 0.95, transition: { duration: 0.3 } },
};

function getSeasonIcon(season) {
  if (season.toLowerCase().includes('december') || season.toLowerCase().includes('winter') || season.toLowerCase().includes('snow')) return FaSnowflake;
  if (season.toLowerCase().includes('round')) return FaLeaf;
  return FaMountain;
}

export default function TourPackages() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = tourPackages.filter((pkg) => {
    if (activeCategory === 'All') return true;
    return categoryMap[pkg.name] === activeCategory;
  });

  return (
    <motion.div
      className="tour-packages-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <section className="page-banner">
        <div className="container">
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            Tour Packages
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.15 }}>
            Explore the best of Uttarakhand with our curated tour packages
          </motion.p>
        </div>
      </section>

      <section className="section packages-section">
        <div className="container">
          <div className="packages__categories">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`packages__cat-btn ${activeCategory === cat ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            {filtered.length === 0 ? (
              <motion.div
                className="packages__empty"
                key="empty"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <p>No packages found in this category.</p>
              </motion.div>
            ) : (
              <motion.div
                className="packages__grid"
                key={activeCategory}
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                <AnimatePresence mode="popLayout">
                  {filtered.map((pkg) => {
                    const SeasonIcon = getSeasonIcon(pkg.bestSeason);
                    return (
                      <motion.div
                        key={pkg.id}
                        className="packages__card"
                        layout
                        variants={cardVariants}
                        exit="exit"
                      >
                        <div className="packages__card-image">
                          <img src={pkg.image} alt={pkg.name} loading="lazy" />
                          <div className="packages__card-overlay">
                            <span className="packages__card-category">{categoryMap[pkg.name]}</span>
                          </div>
                          <span className="packages__card-duration">
                            <FaClock /> {pkg.duration}
                          </span>
                        </div>
                        <div className="packages__card-body">
                          <h3 className="packages__card-title">{pkg.name}</h3>
                          <ul className="packages__card-highlights">
                            {pkg.highlights.slice(0, 4).map((h, i) => (
                              <li key={i}>
                                <FaCheckCircle /> {h}
                              </li>
                            ))}
                          </ul>
                          <div className="packages__card-meta">
                            <div className="packages__card-season">
                              <SeasonIcon />
                              <span>{pkg.bestSeason}</span>
                            </div>
                            <span className="packages__card-price">{pkg.price}</span>
                          </div>
                          <a
                            href={company.whatsapp}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-whatsapp packages__book-btn"
                          >
                            <FaWhatsapp /> Book Now
                          </a>
                        </div>
                      </motion.div>
                    );
                  })}
                </AnimatePresence>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      <CTA />
    </motion.div>
  );
}
