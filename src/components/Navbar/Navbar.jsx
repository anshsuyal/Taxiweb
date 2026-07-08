import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenu, HiX } from 'react-icons/hi';
import { FaWhatsapp, FaChevronDown } from 'react-icons/fa';
import { navLinks, company } from '../../utils/data';
import { useScrollPosition } from '../../hooks/useScrollPosition';
import './Navbar.css';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const scrollY = useScrollPosition();
  const location = useLocation();

  const isScrolled = scrollY > 50;

  useEffect(() => {
    setMobileOpen(false);
    setDropdownOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const mobileVariants = {
    hidden: { x: '100%' },
    visible: { x: 0, transition: { type: 'spring', damping: 25, stiffness: 200 } },
    exit: { x: '100%', transition: { duration: 0.2 } },
  };

  return (
    <nav className={`navbar${isScrolled ? ' navbar--scrolled' : ''}`}>
      <div className="navbar__inner container">
        <Link to="/" className="navbar__logo">
          <span className="navbar__logo-title">AVENTO</span>
          <span className="navbar__logo-sub">Global Travel Solutions</span>
        </Link>

        <div className="navbar__desktop">
          <ul className="navbar__links">
            {navLinks.map((link) => (
              <li
                key={link.path}
                className={`navbar__link-item${link.dropdown ? ' navbar__link-item--has-dropdown' : ''}`}
                onMouseEnter={() => link.dropdown && setDropdownOpen(true)}
                onMouseLeave={() => link.dropdown && setDropdownOpen(false)}
                aria-haspopup={link.dropdown ? "true" : undefined}
                aria-expanded={link.dropdown ? dropdownOpen : undefined}
              >
                <NavLink to={link.path} end className={({ isActive }) => `navbar__link${isActive ? ' navbar__link--active' : ''}`}>
                  {link.name}
                  {link.dropdown && <FaChevronDown className="navbar__chevron" />}
                </NavLink>
                {link.dropdown && dropdownOpen && (
                  <motion.ul
                    className="navbar__dropdown"
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.2 }}
                  >
                    {link.dropdown.map((sub) => (
                      <li key={sub.path}>
                        <NavLink to={sub.path} className="navbar__dropdown-link" onClick={() => setDropdownOpen(false)}>
                          {sub.name}
                        </NavLink>
                      </li>
                    ))}
                  </motion.ul>
                )}
              </li>
            ))}
          </ul>

          <div className="navbar__actions">
            <a href={company.whatsapp} target="_blank" rel="noopener noreferrer" className="navbar__btn">Book Now</a>
            <a href={company.whatsapp} target="_blank" rel="noopener noreferrer" className="navbar__whatsapp" aria-label="WhatsApp">
              <FaWhatsapp />
            </a>
          </div>
        </div>

        <button
          className="navbar__hamburger"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
        >
          {mobileOpen ? <HiX size={26} /> : <HiMenu size={26} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-menu"
            className="navbar__mobile"
            variants={mobileVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <ul className="navbar__mobile-links">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <NavLink
                    to={link.path}
                    end
                    className={({ isActive }) => `navbar__mobile-link${isActive ? ' navbar__mobile-link--active' : ''}`}
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.name}
                  </NavLink>
                  {link.dropdown && (
                    <ul className="navbar__mobile-dropdown">
                      {link.dropdown.map((sub) => (
                        <li key={sub.path}>
                          <NavLink
                            to={sub.path}
                            className="navbar__mobile-sub"
                            onClick={() => setMobileOpen(false)}
                          >
                            {sub.name}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
            <div className="navbar__mobile-actions">
              <a href={company.whatsapp} target="_blank" rel="noopener noreferrer" className="btn-primary" onClick={() => setMobileOpen(false)}>Book Now</a>
              <a href={company.whatsapp} target="_blank" rel="noopener noreferrer" className="navbar__whatsapp" aria-label="WhatsApp">
                <FaWhatsapp /> WhatsApp
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {mobileOpen && <div className="navbar__overlay" onClick={() => setMobileOpen(false)} />}
    </nav>
  );
}
