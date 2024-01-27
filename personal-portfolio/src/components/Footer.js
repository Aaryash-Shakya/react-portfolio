import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/aaryash-logo-white.png";
import navLinkedin from '../assets/img/nav-linkedin.svg';
import navGithub from '../assets/img/nav-github.svg';
import navInstagram from '../assets/img/nav-instagram.svg';

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
            <a href="https://www.linkedin.com/in/aaryash-shakya/" target="_blank" rel="noreferrer"><img src={navLinkedin} alt="Linkedin logo" /></a>
                <a href="https://github.com/Aaryash-Shakya" target="_blank" rel="noreferrer"><img src={navGithub} alt="Github logo" /></a>
                <a href="#"><img src={navInstagram} alt="Instagram logo" /></a>
            </div>
            <p>Copyright 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
