import './About.css';
import { motion, useInView, type Variants } from 'framer-motion';
import { useRef } from 'react';
import LightRays from '../LightRays/LightRays';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const technologies = [
    { name: 'React', color: '#61DAFB', icon: '⚛️' },
    { name: 'TypeScript', color: '#3178C6', icon: '📘' },
    { name: 'CSS', color: '#1572B6', icon: '🎨' },
    { name: 'HTML', color: '#E34F26', icon: '📄' },
    { name: 'JavaScript', color: '#F7DF1E', icon: '⚡' },
    { name: 'Git', color: '#F05032', icon: '🔧' },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: 'easeOut',
      },
    }),
  };

  return (
    <section className="about" ref={ref}>
      <div className="light-rays-background">
        <LightRays
          raysOrigin="top-center"
          raysColor="#4fd1c5"
          raysSpeed={0.8}
          lightSpread={1.2}
          rayLength={2.5}
          fadeDistance={1.2}
          saturation={1.0}
          followMouse={true}
          mouseInfluence={0.15}
        />
      </div>

      <motion.div
        className="about-content"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        <motion.h2 variants={itemVariants}>About Me</motion.h2>

        <motion.p variants={itemVariants}>
          I'm a self-taught Software Developer based in <strong>Johannesburg, South Africa</strong>,
          with a passion for building dynamic and user-friendly web applications.
        </motion.p>

        <motion.p variants={itemVariants}>
          I specialize in <strong>React</strong>, <strong>TypeScript</strong>,
          <strong> HTML</strong>, and <strong>CSS</strong>. I'm dedicated to continuous
          learning and growth, aiming to become a full-stack developer.
        </motion.p>

        <motion.p variants={itemVariants}>
          I enjoy turning ideas into real products, collaborating with teams,
          and staying updated with the latest industry trends through monthly workshops.
        </motion.p>
      </motion.div>

      <div className="about-visual">
        <div className="tech-cards">
          {technologies.map((tech, i) => (
            <motion.div
              key={tech.name}
              className="floating-card"
              custom={i}
              variants={cardVariants as any}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              whileHover={{
                scale: 1.1,
                rotate: [0, -5, 5, -5, 0],
                boxShadow: `0 10px 40px ${tech.color}40`,
              }}
              style={{
                borderColor: tech.color,
              }}
            >
              <span className="tech-icon">{tech.icon}</span>
              <span className="tech-name">{tech.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
