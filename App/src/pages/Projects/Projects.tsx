import { motion, useInView, type Variants } from 'framer-motion';
import { useRef } from 'react';
import './Projects.css';
import Hyperspeed from '../../components/Hyperspeed/Hyperspeed';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  // Projects list - featuring Mwenz Group client work
  const projects = [
    {
      id: 1,
      title: 'Mwenz Group - Fuel Supply Company Website',
      description: 'Commercial client project - Full-featured corporate website developed for Mwenz Group, a fuel supply company serving mining, construction, and agricultural industries. Implemented multi-page architecture with Services, About, and Contact pages, dark/light theme toggle for accessibility, fully responsive design across all devices, and advanced performance optimizations including lazy loading and code splitting for optimal load times.',
      tech: ['React', 'TypeScript', 'Framer Motion', 'React Router', 'Vite'],
      image: '⛽',
      github: 'https://github.com/ianmazhanga/mwenz-group',
      live: 'https://ianmazhanga.github.io/mwenz-group/',
    },
    {
      id: 2,
      title: 'Nike E-Commerce Website',
      description: 'Built a fully responsive e-commerce interface with product filtering, dynamic cart functionality, and smooth animations. Implemented Tailwind CSS utility-first approach reducing custom CSS by 60%. Optimized images and assets for fast load times.',
      tech: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
      image: '👟',
      github: 'https://github.com/ianmazhanga/nike-website',
      live: 'https://ianmazhanga.github.io/nike-website/',
    },
    {
      id: 3,
      title: 'Dashboard Project',
      description: 'Developed an interactive analytics dashboard with real-time data visualization. Implemented reusable chart components and optimized rendering performance for handling large datasets. Features clean data presentation and intuitive navigation.',
      tech: ['TypeScript', 'CSS', 'JavaScript'],
      image: '📊',
      github: 'https://github.com/ianmazhanga/DashBoard-project',
      live: 'https://ianmazhanga.github.io/DashBoard-project/',
    },
    {
      id: 4,
      title: 'Portfolio Website',
      description: 'Engineered a high-performance portfolio with Three.js 3D animations, achieving smooth 60fps rendering. Implemented custom particle systems, interactive backgrounds, and Framer Motion page transitions. Optimized bundle size through code splitting.',
      tech: ['React', 'TypeScript', 'Three.js', 'Framer Motion', 'Vite'],
      image: '💼',
      github: 'https://github.com/ianmazhanga/portfolio',
      live: 'https://ianmazhanga.github.io/portfolio/',
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
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  GitHub
                </motion.a>
                <motion.a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
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
