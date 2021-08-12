import React from 'react';
import PropTypes from 'prop-types';
import Fade from 'react-reveal/Fade';
import { Container } from 'react-bootstrap';
import Title from '../Title/Title';

const Contact = (props) => {
  function openModal() {
    props.setModalOpen(true);
  }

  return (
    <section id="contact">
      <Container>
        <Title title="Contact" />
        <Fade bottom duration={1000} delay={800} distance="30px">
          <div className="contact-wrapper">
            <p className="contact-wrapper__text">Would you like to work with me? Awesome!</p>
            <a
              target="_blank"
              rel="noopener noreferrer"
              role="button"
              tabIndex={0}
              className="cta-btn cta-btn--resume"
              onClick={openModal}
            >
              Talk to Me
            </a>
          </div>
        </Fade>
      </Container>
    </section>
  );
};
Contact.propTypes = {
  setModalOpen: PropTypes.func.isRequired,
};

export default Contact;
