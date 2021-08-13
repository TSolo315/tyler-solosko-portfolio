import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import Hero from './Hero/Hero';
import About from './About/About';
import Projects from './Projects/Projects';
import Contact from './Contact/Contact';
import ContactForm from './Contact/ContactForm';
import Footer from './Footer/Footer';

import { PortfolioProvider } from '../context/context';

import { aboutData, projectsData, contactData, footerData } from '../mock/data';

Modal.setAppElement('#___gatsby');

function App() {
  const [about, setAbout] = useState({});
  const [projects, setProjects] = useState([]);
  const [contact, setContact] = useState({});
  const [footer, setFooter] = useState({});
  const [modalIsOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setAbout({ ...aboutData });
    setProjects([...projectsData]);
    setContact({ ...contactData });
    setFooter({ ...footerData });
  }, []);

  function closeModal() {
    setIsOpen(false);
  }

  const customStyles = {
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      backgroundColor: '#0B172A',
      padding: '40px',
    },
  };

  return (
    <PortfolioProvider value={{ about, projects, contact, footer }}>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Contact Modal"
      >
        <ContactForm />
      </Modal>
      <Hero />
      <About />
      <Projects />
      <Contact setModalOpen={setIsOpen} />
      <Footer />
    </PortfolioProvider>
  );
}

export default App;
