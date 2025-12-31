import './hero.css';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Ballpit from '../Ballpit/Ballpit';
import TextType from '../TextType/TextType';

const Hero = () => {
  return (
    <section className="hero">
      {/* 3D Ballpit background */}
      <div className="ballpit-background">
        <Ballpit
          count={200}
          gravity={0.7}
          friction={0.8}
          wallBounce={0.95}
          followCursor={true}
        />
      </div>

      <div className="hero-overlay" />

      <div className="hero-content">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Hello, <span>I'm Ian Mazhanga</span>
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="hero-typing"
        >
          <TextType
            text={[
              "Software Developer",
              "React Specialist",
              "TypeScript Enthusiast",
              "Problem Solver"
            ]}
            typingSpeed={75}
            pauseDuration={1500}
            showCursor={true}
            cursorCharacter="|"
            as="span"
          />
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          I build modern, responsive, and interactive web applications using
          React & TypeScript.
        </motion.p>

        <motion.div
          className="hero-cta"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <Link to="/projects">
            <motion.button
              className="cta-button primary"
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(79, 209, 197, 0.5)' }}
              whileTap={{ scale: 0.95 }}
            >
              View My Work
            </motion.button>
          </Link>
          <Link to="/contact">
            <motion.button
              className="cta-button secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Me
            </motion.button>
          </Link>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{
          opacity: { delay: 1.5, duration: 0.5 },
          y: { repeat: Infinity, duration: 2, ease: 'easeInOut' },
        }}
      >
        <div className="mouse"></div>
      </motion.div>
    </section>
  );
};

export default Hero;
