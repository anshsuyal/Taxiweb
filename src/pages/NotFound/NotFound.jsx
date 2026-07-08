import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaTaxi,
  FaArrowLeft,
  FaWhatsapp,
} from "react-icons/fa";
import { company } from "../../utils/data";
import "./NotFound.css";

export default function NotFound() {
  return (
    <div className="notfound">

      {/* Background Lights */}
      <div className="light light1"></div>
      <div className="light light2"></div>
      <div className="light light3"></div>

      {/* Floating Particles */}
      <div className="particles">
        {[...Array(20)].map((_, i) => (
          <span key={i}></span>
        ))}
      </div>

      <motion.div
        className="card404"
        initial={{ opacity: 0, scale: .8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: .8 }}
      >

        <motion.div
          className="taxi"
          animate={{
            x: [-300, 300, -300],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <FaTaxi />
        </motion.div>

        <motion.h1
          className="title404"
          animate={{
            rotateX: [0, 15, 0],
            rotateY: [0, -15, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
          }}
        >
          404
        </motion.h1>

        <h2>Oops! Route Not Found</h2>

        <p>
          Looks like the destination you're trying to reach doesn't exist.
          Let's take you back home.
        </p>

        <div className="buttons">

          <Link to="/" className="homeBtn">
            <FaArrowLeft />
            Home
          </Link>

          <a href={company.whatsapp} target="_blank" rel="noopener noreferrer" className="rideBtn">
            <FaWhatsapp />
            Book Ride
          </a>

        </div>

      </motion.div>

    </div>
  );
}