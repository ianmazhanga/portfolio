import { useState } from 'react';
import { motion } from 'framer-motion';
import LaserFlow from '../../components/LaserFlow/LaserFlow';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission (you can add email service integration here)
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      icon: '📧',
      title: 'Email',
      value: 'ianmazhanga@gmail.com',
      link: 'mailto:ianmazhanga@gmail.com',
    },
    {
      icon: '📱',
      title: 'Phone',
      value: '078-207-2453',
      link: 'tel:0782072453',
    },
    {
      icon: '📍',
      title: 'Location',
      value: 'Johannesburg, Gauteng, South Africa',
      link: '#',
    },
  ];

  const socialLinks = [
    {
      name: 'GitHub',
      icon: '💻',
      url: 'https://github.com/ianmazhanga',
    },
    {
      name: 'LinkedIn',
      icon: '💼',
      url: 'https://www.linkedin.com/in/ian-mazhanga',
    },
    {
      name: 'Portfolio',
      icon: '🌐',
      url: 'https://ianmazhanga.github.io/portfolio',
    },
  ];

  return (
    <section className="contact">
      {/* LaserFlow effect at the top */}
      <div className="laser-flow-background">
        <LaserFlow
          horizontalBeamOffset={0.25}
          verticalBeamOffset={-0.3}
          color="#4fd1c5"
          fogIntensity={0.6}
          wispIntensity={3.0}
        />
      </div>

      <div className="contact-container">
        <motion.div
          className="contact-header"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1>Get In Touch</h1>
          <p>Have a question or want to work together? I'd love to hear from you!</p>
        </motion.div>

        <div className="contact-content">
          {/* Contact Form */}
          <motion.div
            className="contact-form-section"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="What's this about?"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message..."
                  rows={6}
                  required
                />
              </div>

              <motion.button
                type="submit"
                className="submit-button"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            className="contact-info-section"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h2>Contact Information</h2>
            <div className="contact-info-cards">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.link}
                  className="info-card"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="info-icon">{info.icon}</div>
                  <div className="info-content">
                    <h4>{info.title}</h4>
                    <p>{info.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            <div className="social-links">
              <h3>Connect with me</h3>
              <div className="social-grid">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <span className="social-icon">{social.icon}</span>
                    <span className="social-name">{social.name}</span>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
