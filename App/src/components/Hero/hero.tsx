import './hero.css';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Particles from '../Particles/Particles';
import TextType from '../TextType/TextType';

const Hero = () => {
  return (
    <section className="hero">
      {/* Particles background */}
      <div className="particles-background">
        <Particles
          particleColors={['#4FD1C5', '#63B3ED', '#FC8181']}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
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

    </section>
  );
};

export default Hero;
