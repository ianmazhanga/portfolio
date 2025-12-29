import { motion, useInView, type Variants } from 'framer-motion';
import { useRef } from 'react';
import DotGrid from '../../components/DotGrid/DotGrid';
import './Experience.css';

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const workExperience = [
    {
      id: 1,
      title: 'Self-Taught Web Developer',
      company: 'Independent',
      period: 'Ongoing',
      responsibilities: [
        'Developed and maintained multiple web applications using React and TypeScript',
        'Collaborated with backend developers to ensure seamless integration',
        'Utilized Git and GitHub for version control and code collaboration',
        'Built responsive and interactive user interfaces with modern web technologies',
      ],
    },
  ];

  const education = [
    {
      id: 1,
      institution: 'Coding with Mosh',
      degree: 'Web Development Certification',
      period: 'Completed',
      description: 'Comprehensive web development course covering modern technologies and best practices',
    },
    {
      id: 2,
      institution: 'Self-Taught',
      degree: 'Continuous Learning',
      period: 'Ongoing',
      description: 'Independently learning and building projects to expand skills and knowledge',
    },
  ];

  const skills = {
    languages: ['JavaScript', 'TypeScript', 'HTML', 'CSS'],
    frameworks: ['React', 'Framer Motion', 'Three.js'],
    tools: ['Git', 'GitHub', 'Visual Studio Code', 'npm'],
    other: ['Responsive Design', 'Version Control', 'Teamwork', 'Problem Solving'],
  };

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
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section className="experience" ref={ref}>
      <div className="dot-grid-background">
        <DotGrid
          dotSize={4}
          gap={30}
          baseColor="#4fd1c5"
          activeColor="#38b2ac"
          proximity={120}
          speedTrigger={80}
          shockRadius={200}
          shockStrength={4}
          resistance={600}
          returnDuration={1.8}
        />
      </div>
      <div className="experience-container">
        <motion.div
          className="experience-header"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1>Experience & Education</h1>
          <p>My journey in web development, skills, and continuous learning</p>
        </motion.div>

        <motion.div
          className="experience-content"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {/* Work Experience */}
          <motion.div className="section-block" variants={itemVariants}>
            <h2 className="section-title">Work Experience</h2>
            {workExperience.map((job) => (
              <div key={job.id} className="timeline-item">
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <h3>{job.title}</h3>
                  <p className="company">{job.company}</p>
                  <p className="period">{job.period}</p>
                  <ul className="responsibilities">
                    {job.responsibilities.map((resp, index) => (
                      <li key={index}>{resp}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Education */}
          <motion.div className="section-block" variants={itemVariants}>
            <h2 className="section-title">Education & Certifications</h2>
            {education.map((edu) => (
              <div key={edu.id} className="timeline-item">
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <h3>{edu.degree}</h3>
                  <p className="company">{edu.institution}</p>
                  <p className="period">{edu.period}</p>
                  <p className="description">{edu.description}</p>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Skills */}
          <motion.div className="section-block" variants={itemVariants}>
            <h2 className="section-title">Technical Skills</h2>
            <div className="skills-grid">
              <div className="skill-category">
                <h4>Languages</h4>
                <div className="skill-tags">
                  {skills.languages.map((skill, index) => (
                    <span key={index} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>
              <div className="skill-category">
                <h4>Frameworks & Libraries</h4>
                <div className="skill-tags">
                  {skills.frameworks.map((skill, index) => (
                    <span key={index} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>
              <div className="skill-category">
                <h4>Tools & Technologies</h4>
                <div className="skill-tags">
                  {skills.tools.map((skill, index) => (
                    <span key={index} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>
              <div className="skill-category">
                <h4>Other Skills</h4>
                <div className="skill-tags">
                  {skills.other.map((skill, index) => (
                    <span key={index} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Professional Development */}
          <motion.div className="section-block" variants={itemVariants}>
            <h2 className="section-title">Professional Development</h2>
            <div className="development-card">
              <div className="dev-icon">📚</div>
              <h3>Monthly Workshops</h3>
              <p>Attend workshops at the end of every month to stay updated with industry trends and emerging technologies</p>
            </div>
          </motion.div>

          {/* Interests */}
          <motion.div className="section-block" variants={itemVariants}>
            <h2 className="section-title">Hobbies & Interests</h2>
            <div className="interests-grid">
              <div className="interest-card">
                <div className="interest-icon">⛳</div>
                <h4>Golfing</h4>
              </div>
              <div className="interest-card">
                <div className="interest-icon">🚗</div>
                <h4>Cars & Automotive Culture</h4>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
