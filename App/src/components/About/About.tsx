import './About.css';
import { motion, useInView, type Variants } from 'framer-motion';
import { useRef } from 'react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const technologies = [
    { name: 'React', color: '#61DAFB', icon: '⚛️' },
    { name: 'TypeScript', color: '#3178C6', icon: '📘' },
    { name: 'Redux', color: '#764ABC', icon: '🔄' },
    { name: 'JavaScript', color: '#F7DF1E', icon: '⚡' },
    { name: 'Sass/SCSS', color: '#CC6699', icon: '🎨' },
    { name: 'HTML5', color: '#E34F26', icon: '📄' },
    { name: 'CSS3', color: '#1572B6', icon: '🎯' },
    { name: 'Git', color: '#F05032', icon: '🔧' },
    { name: 'Node.js', color: '#339933', icon: '🟢' },
    { name: 'Figma', color: '#F24E1E', icon: '🖼️' },
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
      <motion.div
        className="about-content"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        <motion.h2 variants={itemVariants}>About Me</motion.h2>

        <motion.p variants={itemVariants}>
          Frontend Engineer based in <strong>Johannesburg, South Africa</strong> with hands-on
          experience building scalable, component-driven web applications using React, TypeScript,
          and modern state management.
        </motion.p>

        <motion.p variants={itemVariants}>
          Skilled in translating <strong>Figma designs</strong> into responsive, accessible UIs,
          structuring clean and maintainable codebases, and integrating dynamic data from
          <strong> APIs</strong> and <strong>CMS platforms</strong>.
        </motion.p>

        <motion.p variants={itemVariants}>
          Comfortable working remotely and collaborating with designers and cross-functional teams.
          Actively growing expertise in <strong>Redux</strong>, headless CMS workflows, performance
          optimisation, and web accessibility best practices.
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
