import React from 'react';
import "./Footer.css";
import { Col, Container, Row } from 'react-bootstrap';

const Footer = () => {
    return (
        <div className="footer">
            <Container>
                <Row>
                    <Col>
                        <span className="footer-logo">Genius Car Mechanics</span>
                        <p className="footer-address">Nikunja-2, Khilkhet, Dhaka-1229<br />
                            +8801747979703 <br />
                            mdhasibulhasan.dev@gmail.com
                        </p>
                    </Col>
                    <Col className="footer-link">
                        <a href="">Home</a>
                        <a href="">Shop</a>
                        <a href="">About</a>
                        <a href="">Contact</a>
                        <a href="">Blog</a>
                    </Col>
                    <Col className="footer-link">
                        <a href="">Home</a>
                        <a href="">Shop</a>
                        <a href="">About</a>
                        <a href="">Contact</a>
                        <a href="">Blog</a>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Footer;