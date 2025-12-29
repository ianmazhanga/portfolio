import { motion, useInView, type Variants } from 'framer-motion';
import { useRef } from 'react';
import './Projects.css';
import Hyperspeed from '../../components/Hyperspeed/Hyperspeed';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const projects = [
    {
      id: 1,
      title: 'Nike E-Commerce Website',
      description: 'Modern e-commerce website built with React, TypeScript, and Tailwind CSS. Features responsive design, product showcase, and clean UI/UX.',
      tech: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
      image: '👟',
      github: 'https://github.com/ianmazhanga/nike-website',
      live: '#',
    },
    {
      id: 2,
      title: 'Dashboard Project',
      description: 'Interactive dashboard application with data visualization and analytics. Built with modern web technologies for optimal performance.',
      tech: ['TypeScript', 'CSS', 'JavaScript'],
      image: '📊',
      github: 'https://github.com/ianmazhanga/DashBoard-project',
      live: '#',
    },
    {
      id: 3,
      title: 'Q-- Project',
      description: 'TypeScript-based web application with modern frontend architecture and responsive design.',
      tech: ['TypeScript', 'JavaScript', 'CSS', 'HTML'],
      image: '⚡',
      github: 'https://github.com/ianmazhanga/Q--project',
      live: '#',
    },
    {
      id: 4,
      title: 'Learn JavaScript',
      description: 'Educational project focused on learning and practicing JavaScript concepts and modern development techniques.',
      tech: ['TypeScript', 'JavaScript'],
      image: '📚',
      github: 'https://github.com/ianmazhanga/learn-javascript',
      live: '#',
    },
    {
      id: 5,
      title: 'Next.js Application',
      description: 'Full-stack application built with Next.js framework, featuring server-side rendering and modern React patterns.',
      tech: ['Next.js', 'React', 'TypeScript'],
      image: '🚀',
      github: 'https://github.com/ianmazhanga/nextjs',
      live: '#',
    },
    {
      id: 6,
      title: 'React Web App',
      description: 'Modern web application built with React and TypeScript, featuring clean architecture and responsive design.',
      tech: ['React', 'TypeScript', 'CSS'],
      image: '⚛️',
      github: 'https://github.com/ianmazhanga/my-react-app',
      live: '#',
    },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section className="projects" ref={ref}>
      <div className="hyperspeed-background">
        <Hyperspeed
          effectOptions={{
            distortion: 'turbulentDistortion',
            length: 400,
            roadWidth: 10,
            islandWidth: 2,
            lanesPerRoad: 3,
            fov: 90,
            fovSpeedUp: 150,
            speedUp: 2,
            colors: {
              roadColor: 0x080808,
              islandColor: 0x0a0a0a,
              background: 0x000000,
              shoulderLines: 0x131318,
              brokenLines: 0x131318,
              leftCars: [0xd856bf, 0x6750a2, 0xc247ac],
              rightCars: [0x03b3c3, 0x0e5ea5, 0x324555],
              sticks: 0x03b3c3
            }
          }}
        />
      </div>

      <div className="projects-container">
        <motion.div
          className="projects-header"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1>My Projects</h1>
          <p>Here are some of the projects I've built to showcase my skills and passion for web development.</p>
        </motion.div>

        <motion.div
          className="projects-grid"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="project-card"
              variants={itemVariants}
              whileHover={{ y: -10 }}
            >
              <div className="project-icon">{project.image}</div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-tech">
                {project.tech.map((tech, index) => (
                  <span key={index} className="tech-tag">{tech}</span>
                ))}
              </div>
              <div className="project-links">
                <motion.a
                  href={project.github}
                  className="project-link"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  GitHub
                </motion.a>
                <motion.a
                  href={project.live}
                  className="project-link primary"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Live Demo
                </motion.a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
