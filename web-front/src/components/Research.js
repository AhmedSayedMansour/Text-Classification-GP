/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react';
import Logo from './Logo.js';
import { Row, Col, Container } from 'react-bootstrap';

export default function Research() {


    return (
        <>
            <header className="site-header">
                <Logo style={{ position: "fixed" }} />
            </header>
            <Container >
                <Row >
                    <Col >
                        <iframe src="https://drive.google.com/file/d/1S-AL49PzbaV2GV3C_cF98d-le3mY8PsT/preview" width="100%" height="350%" allow="autoplay"></iframe>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
