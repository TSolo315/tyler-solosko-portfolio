import React, { useContext, useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col, ProgressBar } from 'react-bootstrap';
import Title from '../Title/Title';
import AboutImg from '../Image/AboutImg';
import PortfolioContext from '../../context/context';

const About = () => {
  const { about } = useContext(PortfolioContext);
  const { img, paragraphOne, paragraphTwo, paragraphThree, resume } = about;

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <section id="about">
      <Container>
        <Title title="About Me" />
        <Row className="about-wrapper">
          <Col md={6} sm={12}>
            <Fade bottom duration={1000} delay={600} distance="30px">
              <div className="about-wrapper__image">
                <AboutImg alt="profile picture" filename={img} />
              </div>
            </Fade>
          </Col>
          <Col md={6} sm={12}>
            <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
              <div className="about-wrapper__info">
                <p className="about-wrapper__info-text">
                  {paragraphOne ||
                    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi neque, ipsa animi maiores repellendu distinctioaperiam earum dolor voluptatum consequatur blanditiis inventore debitis fuga numquam voluptate architecto itaque molestiae."}
                </p>
                <p className="about-wrapper__info-text">
                  {paragraphTwo ||
                    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi neque, ipsa animi maiores repellendu distinctioaperiam earum dolor voluptatum consequatur blanditiis inventore debitis fuga numquam voluptate architecto itaque molestiae."}
                </p>
                <p className="about-wrapper__info-text">
                  {paragraphThree || "Lorem ipsum dolor sit, amet consectetur adipisicing elit asd asd asd asd asd asd asd asd asd."}
                </p>
                {resume && (
                  <span className="d-flex mt-3">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cta-btn cta-btn--resume"
                      href={resume}
                    >
                      Resume
                    </a>
                  </span>
                )}
              </div>
            </Fade>
          </Col>
        </Row>
        <hr className="progress-divider" />
        <Fade bottom duration={1000} delay={300} distance="0px">
          <h2 className="progress-title">Proficiencies</h2>
        </Fade>
        <Row className="about-wrapper">
          <Fade bottom duration={1000} delay={600} distance="30px">
            <div className="progress-box">
              <h3 className="pb-4 font-weight-bold shadowed-text-title">Primary</h3>
              <h4 className="progress-text font-weight-bold">HTML</h4>
              <div className="mb-3">
                <ProgressBar now={100} className="progress-bar-2 bg-custom-progress" />
              </div>
              <h4 className="progress-text font-weight-bold">CSS</h4>
              <div className="mb-3">
                <ProgressBar now={95} className="progress-bar-2 bg-custom-progress" />
              </div>
              <h4 className="progress-text font-weight-bold">Javascript</h4>
              <div className="mb-3">
                <ProgressBar now={80} className="progress-bar-2 bg-custom-progress" />
              </div>
              <h4 className="progress-text font-weight-bold">Python</h4>
              <div className="mb-3">
                <ProgressBar now={80} className="progress-bar-2 bg-custom-progress" />
              </div>
              <h4 className="progress-text font-weight-bold">SQL</h4>
              <div className="mb-3">
                <ProgressBar now={75} className="progress-bar-2 bg-custom-progress" />
              </div>
            </div>
            <div className="progress-box ml-5">
              <h3 className="pb-4 font-weight-bold shadowed-text-title">Auxiliary</h3>
              <h4 className="progress-text font-weight-bold">SASS</h4>
              <div className="mb-3">
                <ProgressBar now={100} className="progress-bar-2 bg-custom-progress" />
              </div>
              <h4 className="progress-text font-weight-bold">react.js</h4>
              <div className="mb-3">
                <ProgressBar now={90} className="progress-bar-2 bg-custom-progress" />
              </div>
              <h4 className="progress-text font-weight-bold">Django</h4>
              <div className="mb-3">
                <ProgressBar now={90} className="progress-bar-2 bg-custom-progress" />
              </div>
              <h4 className="progress-text font-weight-bold">Django Rest Framework</h4>
              <div className="mb-3">
                <ProgressBar now={80} className="progress-bar-2 bg-custom-progress" />
              </div>
              <h4 className="progress-text font-weight-bold">jQuery</h4>
              <div className="mb-3">
                <ProgressBar now={80} className="progress-bar-2 bg-custom-progress" />
              </div>
            </div>
            <div>
              <p className="about-wrapper__info-text">
                Additional proficiencies include: git, selenium, Typescript, Bootstrap, Bulma, Ant Design, tkinter, AutoHotkey.
              </p>
            </div>
          </Fade>
        </Row>
      </Container>
    </section>
  );
};

export default About;
