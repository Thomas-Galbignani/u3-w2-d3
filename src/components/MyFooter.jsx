import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import {
  BsFacebook,
  BsInstagram,
  BsTwitterX,
  BsYoutube,
} from 'react-icons/bs';

const MyFooter= () => {
  return (
    <footer className="mt-auto pt-3 bg-black text-light ">
      <Container>
        <Row className="justify-content-center">
          <Col xs={12}>
            <Row>
              <Col className="mb-2 d-flex justify-content-center justify-content-md-start">
                <BsFacebook className="footer-icon me-3" />
                <BsInstagram className="footer-icon me-3" />
                <BsTwitterX className="footer-icon me-3" />
                <BsYoutube className="footer-icon" />
              </Col>
            </Row>
            <Row xs={2} sm={2} md={4} lg={4} className="g-0">
              <Col>
                <div>
                  <p className="mb-1">
                    <a href="#" alt="footer link" className="text-secondary  text-decoration-none small">
                      Audio and Subtitles
                    </a>
                  </p>
                  <p className="mb-1">
                    <a href="#" alt="footer link" className="text-secondary text-decoration-none small">
                      Media Center
                    </a>
                  </p>
                  <p className="mb-1">
                    <a href="#" alt="footer link" className="text-secondary text-decoration-none small">
                      Privacy
                    </a>
                  </p>
                  <p className="mb-1">
                    <a href="#" alt="footer link" className="text-secondary text-decoration-none small">
                      Contact Us
                    </a>
                  </p>
                </div>
              </Col>
              <Col>
                <div>
                  <p className="mb-1">
                    <a href="#" alt="footer link" className="text-secondary text-decoration-none small">
                      Audio Description
                    </a>
                  </p>
                  <p className="mb-1">
                    <a href="#" alt="footer link" className="text-secondary text-decoration-none small">
                      Investor Relations
                    </a>
                  </p>
                  <p className="mb-1">
                    <a href="#" alt="footer link" className="text-secondary text-decoration-none small">
                      Legal Notices
                    </a>
                  </p>
                </div>
              </Col>
              <Col>
                <div>
                  <p className="mb-1">
                    <a href="#" alt="footer link" className="text-secondary text-decoration-none small">
                      Help Center
                    </a>
                  </p>
                  <p className="mb-1">
                    <a href="#" alt="footer link" className="text-secondary text-decoration-none small">
                      Jobs
                    </a>
                  </p>
                  <p className="mb-1">
                    <a href="#" alt="footer link" className="text-secondary text-decoration-none small">
                      Cookie Preferences
                    </a>
                  </p>
                </div>
              </Col>
              <Col>
                <div>
                  <p className="mb-1">
                    <a href="#" alt="footer link" className="text-secondary text-decoration-none small">
                      Gift Cards
                    </a>
                  </p>
                  <p className="mb-1">
                    <a href="#" alt="footer link" className="text-secondary text-decoration-none small">
                      Terms of Use
                    </a>
                  </p>
                  <p className="mb-1">
                    <a href="#" alt="footer link" className="text-secondary text-decoration-none small">
                      Corporate Information
                    </a>
                  </p>
                </div>
              </Col>
            </Row>
            <Row>
              <Col className="mt-3 text-center text-md-start">
                <Button
                  variant="outline-secondary"
                  size="sm"
                  className="rounded-0 footer-button"
                >
                  Service Code
                </Button>
              </Col>
            </Row>
            <Row>
              <Col className="mt-2 text-center text-md-start">
              <p className="copyright text-secondary small">&copy; 1997-2023 Netflix, Inc.</p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default MyFooter;