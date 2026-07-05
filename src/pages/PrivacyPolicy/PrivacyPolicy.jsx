import { motion } from 'framer-motion';
import { company } from '../../utils/data';
import './PrivacyPolicy.css';

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const sections = [
  {
    id: 1,
    title: 'Information We Collect',
    content: 'We collect information you provide directly when booking our services, including your name, phone number, email address, pickup and drop locations, travel dates, and payment details. We also automatically collect certain technical information when you visit our website, such as your IP address, browser type, device information, and browsing behavior through cookies and similar technologies. Additionally, we may collect information from third-party sources such as payment processors, analytics providers, and social media platforms when you interact with our services.',
  },
  {
    id: 2,
    title: 'How We Use Your Information',
    content: 'We use the information we collect to process your bookings, communicate with you about your reservations, provide customer support, and improve our services. Your contact information allows us to send booking confirmations, driver details, and important updates about your travel. We may also use your information to send promotional offers, travel tips, and newsletters with your consent. Technical data helps us analyze website usage patterns, enhance user experience, and maintain the security and integrity of our platform.',
  },
  {
    id: 3,
    title: 'Information Sharing',
    content: 'We do not sell, trade, or rent your personal information to third parties. We may share your information with trusted partners who assist us in operating our website, processing payments, and delivering services, provided they agree to keep your information confidential and use it solely for the purposes we specify. We may also disclose your information when required by law, to enforce our terms and conditions, or to protect the rights, property, or safety of {company.name}, our customers, or others.',
  },
  {
    id: 4,
    title: 'Data Security',
    content: 'We implement a variety of security measures to maintain the safety of your personal information when you place a booking or enter, submit, or access your information. These include encryption of sensitive data transmitted via Secure Socket Layer (SSL) technology, regular malware scanning, and restricted access to personal information on a need-to-know basis. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security of your data.',
  },
  {
    id: 5,
    title: 'Your Rights',
    content: 'You have the right to access, update, correct, or delete your personal information held by us at any time. You may withdraw consent for marketing communications by unsubscribing or contacting us directly. You also have the right to request a copy of the data we hold about you, object to certain processing activities, and request restriction of processing in certain circumstances. To exercise any of these rights, please contact us using the information provided below.',
  },
  {
    id: 6,
    title: 'Contact Us',
    content: `If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us at ${company.email} or call us at ${company.phone}. You may also write to us at our registered address: ${company.address}. We will respond to your inquiry within a reasonable timeframe and work to address any concerns you may have.`,
  },
];

export default function PrivacyPolicy() {
  return (
    <motion.div
      className="privacy-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <section className="page-banner">
        <div className="container">
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            Privacy Policy
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.15 }}>
            How we handle your information
          </motion.p>
        </div>
      </section>

      <section className="section legal-section">
        <div className="container">
          <motion.div
            className="legal__intro"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="legal__effective-date">Last Updated: January 1, 2024</p>
            <p className="legal__intro-text">
              At {company.name}, we take your privacy seriously. This Privacy Policy explains how we collect, use,
              disclose, and safeguard your personal information when you visit our website or use our travel services.
              Please read this policy carefully to understand our practices regarding your personal data.
            </p>
          </motion.div>

          <motion.div
            className="legal__sections"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {sections.map((section) => {
              const processedContent = section.content.replace(/\{company\.name\}/g, company.name);
              return (
                <motion.div key={section.id} className="legal__section" variants={itemVariants}>
                  <h2 className="legal__section-title">{section.title}</h2>
                  <p className="legal__section-text">{processedContent}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}
