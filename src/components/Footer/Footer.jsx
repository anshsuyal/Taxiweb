import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { company, navLinks } from '../../utils/data';
import './Footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          
          {/* Brand Info */}
          <div className="footer__brand">
            <Link to="/" className="footer__logo">
              <span className="footer__logo-title">AVENTO</span>
              <span className="footer__logo-sub">Global Travel Solutions</span>
            </Link>
            <p className="footer__desc">
              Premium travel and taxi services across Dehradun and Uttarakhand. Experience luxury, safety, and reliability on every journey.
            </p>
            <div className="footer__socials">
              <a href="#" className="footer__social" aria-label="Facebook"><FaFacebookF /></a>
              <a href="#" className="footer__social" aria-label="Twitter"><FaTwitter /></a>
              <a href="#" className="footer__social" aria-label="Instagram"><FaInstagram /></a>
              <a href="#" className="footer__social" aria-label="LinkedIn"><FaLinkedinIn /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer__links-col">
            <h4 className="footer__title">Quick Links</h4>
            <ul className="footer__links">
              {navLinks.filter(l => !l.dropdown).map((link, index) => (
                <li key={index}>
                  <Link to={link.path}>{link.name}</Link>
                </li>
              ))}
              <li><Link to="/privacy-policy">Privacy Policy</Link></li>
              <li><Link to="/terms">Terms of Service</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div className="footer__links-col">
            <h4 className="footer__title">Our Services</h4>
            <ul className="footer__links">
              <li><Link to="/services">Airport Transfer</Link></li>
              <li><Link to="/services">Local Taxi</Link></li>
              <li><Link to="/services">Outstation Trips</Link></li>
              <li><Link to="/services">Corporate Travel</Link></li>
              <li><Link to="/services">Char Dham Yatra</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="footer__contact">
            <h4 className="footer__title">Contact Us</h4>
            <ul className="footer__contact-info">
              <li>
                <FaMapMarkerAlt className="footer__contact-icon" />
                <span>Dehradun, Uttarakhand, India</span>
              </li>
              <li>
                <FaPhoneAlt className="footer__contact-icon" />
                <a href={`tel:${company.phone.replace(/\s+/g, '')}`}>{company.phone}</a>
              </li>
              <li>
                <FaEnvelope className="footer__contact-icon" />
                <a href={`mailto:${company.email}`}>{company.email}</a>
              </li>
            </ul>
          </div>

        </div>

        <div className="footer__bottom">
          <p>&copy; {currentYear} {company.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
