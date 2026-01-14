import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavigation = (path: string) => {
    setIsTransitioning(true);
    setIsMenuOpen(false);

    setTimeout(() => {
      navigate(path);
      setTimeout(() => {
        setIsTransitioning(false);
      }, 500);
    }, 800);
  };

  const navItems = [
    { name: 'Home', path: '/', delay: 0.1 },
    { name: 'About', path: '/about', delay: 0.2 },
    { name: 'Projects', path: '/projects', delay: 0.3 },
    { name: 'Experience', path: '/experience', delay: 0.4 },
    { name: 'Contact', path: '/contact', delay: 0.5 }
  ];

  return (
    <>
      <AnimatePresence>
        {isTransitioning && (
          <motion.div
            className="page-transition"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            exit={{ scaleY: 0 }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          />
        )}
      </AnimatePresence>

      <nav className="navbar-floating">
        <motion.div
          className="navbar-logo"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          onClick={() => handleNavigation('/')}
        >
          <span className="logo-text">IM</span>
        </motion.div>

        <div className={`navbar-menu-floating ${isMenuOpen ? 'active' : ''}`}>
          {navItems.map((item) => (
            <motion.div
              key={item.path}
              className="navbar-link-wrapper"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: item.delay }}
            >
              <motion.button
                className="navbar-link-floating"
                onClick={() => handleNavigation(item.path)}
                whileHover={{
                  scale: 1.1,
                  textShadow: '0 0 20px rgba(79, 209, 197, 0.8)',
                }}
                whileTap={{ scale: 0.95 }}
              >
                {item.name}
              </motion.button>
            </motion.div>
          ))}
        </div>

        <div className="navbar-toggle" onClick={toggleMenu}>
          <span className={`bar ${isMenuOpen ? 'active' : ''}`}></span>
          <span className={`bar ${isMenuOpen ? 'active' : ''}`}></span>
          <span className={`bar ${isMenuOpen ? 'active' : ''}`}></span>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
