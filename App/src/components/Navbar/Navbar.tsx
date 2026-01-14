import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const isHomePage = location.pathname === '/' || location.pathname === '/portfolio' || location.pathname === '/portfolio/';

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

  const allNavItems = [
    { name: 'About', path: '/about', delay: 0.1 },      // bottom left
    { name: 'Projects', path: '/projects', delay: 0.2 }, // top left
    { name: 'Experience', path: '/experience', delay: 0.3 }, // top right
    { name: 'Contact', path: '/contact', delay: 0.4 }   // bottom right
  ];

  const leftNavItems = [
    { name: 'About', path: '/about', delay: 0.1 },
    { name: 'Projects', path: '/projects', delay: 0.2 }
  ];

  const centerNavItem = { name: 'Home', path: '/', delay: 0.3 };

  const rightNavItems = [
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

      {isHomePage ? (
        // Home page layout - spread across page with arrows
        <nav className="navbar-home-spread">
          {allNavItems.map((item) => (
            <motion.div
              key={item.path}
              className="navbar-item-with-arrow"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: item.delay }}
            >
              <motion.button
                className="navbar-link-fancy"
                onClick={() => handleNavigation(item.path)}
                whileHover={{
                  scale: 1.1,
                  textShadow: '0 0 30px rgba(79, 209, 197, 1)',
                }}
                whileTap={{ scale: 0.95 }}
              >
                {item.name}
              </motion.button>
              <motion.div
                className="navbar-arrow-down"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: item.delay + 0.2 }}
              >
                <svg width="60" height="30" viewBox="0 0 60 30" fill="none">
                  <path
                    d="M10 5 L30 20 L50 5"
                    stroke="url(#gradient-down)"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="arrow-down-shape"
                  />
                  <defs>
                    <linearGradient id="gradient-down" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#4fd1c5" />
                      <stop offset="50%" stopColor="#38b2ac" />
                      <stop offset="100%" stopColor="#4fd1c5" />
                    </linearGradient>
                  </defs>
                </svg>
              </motion.div>
            </motion.div>
          ))}
        </nav>
      ) : (
        // Other pages layout - normal navbar at top
        <nav className="navbar-floating">
          <div className={`navbar-menu-left ${isMenuOpen ? 'active' : ''}`}>
            {leftNavItems.map((item) => (
              <motion.div
                key={item.path}
                className="navbar-link-wrapper"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: item.delay }}
              >
                <motion.button
                  className="navbar-link-fancy"
                  onClick={() => handleNavigation(item.path)}
                  whileHover={{
                    scale: 1.1,
                    textShadow: '0 0 30px rgba(79, 209, 197, 1)',
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.name}
                </motion.button>
              </motion.div>
            ))}
          </div>

          <div className="navbar-center">
            <motion.div
              className="navbar-link-wrapper"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: centerNavItem.delay }}
            >
              <motion.button
                className="navbar-link-fancy navbar-link-home"
                onClick={() => handleNavigation(centerNavItem.path)}
                whileHover={{
                  scale: 1.1,
                  textShadow: '0 0 30px rgba(79, 209, 197, 1)',
                }}
                whileTap={{ scale: 0.95 }}
              >
                {centerNavItem.name}
              </motion.button>
            </motion.div>

            <motion.div
              className="navbar-arrow"
              initial={{ opacity: 0, scale: 0.5, rotate: 0 }}
              animate={{ opacity: 1, scale: 1, rotate: 360 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <svg width="50" height="50" viewBox="0 0 50 50" fill="none">
                <path
                  d="M25 5 L40 25 L25 45 L10 25 Z"
                  stroke="url(#gradient)"
                  strokeWidth="2"
                  fill="url(#gradient)"
                  className="arrow-shape"
                />
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#4fd1c5" />
                    <stop offset="100%" stopColor="#38b2ac" />
                  </linearGradient>
                </defs>
              </svg>
            </motion.div>
          </div>

          <div className={`navbar-menu-right ${isMenuOpen ? 'active' : ''}`}>
            {rightNavItems.map((item) => (
              <motion.div
                key={item.path}
                className="navbar-link-wrapper"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: item.delay }}
              >
                <motion.button
                  className="navbar-link-fancy"
                  onClick={() => handleNavigation(item.path)}
                  whileHover={{
                    scale: 1.1,
                    textShadow: '0 0 30px rgba(79, 209, 197, 1)',
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
      )}
    </>
  );
};

export default Navbar;
