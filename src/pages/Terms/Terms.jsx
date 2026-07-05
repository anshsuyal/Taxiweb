import { motion } from 'framer-motion';
import { company } from '../../utils/data';
import './Terms.css';

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
    title: 'Acceptance of Terms',
    content: 'By accessing or using the services provided by {company.name}, you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, you should not use our website or services. These terms apply to all visitors, users, and customers who access or use our services, including but not limited to taxi bookings, airport transfers, outstation travel, tour packages, and any other transportation services we offer.',
  },
  {
    id: 2,
    title: 'Booking and Payment',
    content: 'All bookings made through our website, phone, or WhatsApp are subject to availability and confirmation. Prices quoted are indicative and may vary based on vehicle type, distance, duration, and seasonal demand. Payment can be made via cash, UPI, bank transfer, or card as agreed at the time of booking. A partial advance may be required for long-distance trips, tour packages, and Char Dham Yatra bookings to confirm the reservation. We reserve the right to refuse or cancel any booking at our discretion.',
  },
  {
    id: 3,
    title: 'Cancellation Policy',
    content: 'Cancellations made at least 2 hours before the scheduled pickup time are eligible for a full refund of any advance payment made. Cancellations made within 2 hours of the scheduled pickup may incur a cancellation charge equivalent to 25% of the fare or a minimum of ₹200, whichever is higher. No-shows (failure to appear at the pickup location at the scheduled time) will be charged the full fare. For tour packages and Char Dham Yatra, separate cancellation policies apply and will be communicated at the time of booking.',
  },
  {
    id: 4,
    title: 'User Responsibilities',
    content: 'As a user of our services, you agree to provide accurate and complete information when making a booking. You are responsible for ensuring that you are at the designated pickup location at the scheduled time. You must treat our drivers and vehicles with respect and comply with all applicable laws during your journey. Any damage to the vehicle caused by your actions or negligence will be your responsibility and may result in additional charges. We reserve the right to refuse service to any passenger who is abusive, intoxicated, or behaving in a manner that compromises safety.',
  },
  {
    id: 5,
    title: 'Limitation of Liability',
    content: '{company.name} shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from or related to the use of our services, including but not limited to delays caused by traffic, weather conditions, road closures, or force majeure events. Our total liability for any claim arising from the use of our services shall not exceed the total fare paid for the specific booking in question. We strongly recommend that customers purchase appropriate travel insurance for long-distance trips and tour packages.',
  },
  {
    id: 6,
    title: 'Governing Law',
    content: 'These Terms and Conditions shall be governed by and construed in accordance with the laws of India. Any disputes arising from or relating to these terms or the use of our services shall be subject to the exclusive jurisdiction of the courts in Dehradun, Uttarakhand. We make no representation that our services are appropriate or available for use in locations outside India, and accessing them from territories where their content is illegal is prohibited.',
  },
  {
    id: 7,
    title: 'Contact Information',
    content: `If you have any questions, concerns, or complaints regarding these Terms and Conditions, please contact us at ${company.email} or call ${company.phone}. You can also visit our office at ${company.address}. We are available from ${company.workingHours} and will respond to all inquiries promptly.`,
  },
];

export default function Terms() {
  return (
    <motion.div
      className="terms-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <section className="page-banner">
        <div className="container">
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            Terms & Conditions
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.15 }}>
            Please read these terms carefully
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
              Welcome to {company.name}. By accessing our website and using our travel and transportation services,
              you agree to the following Terms and Conditions. Please read them carefully before making a booking
              or using any of our services. These terms constitute a legally binding agreement between you and
              {company.name}.
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
