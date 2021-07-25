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
                    <iframe src="https://drive.google.com/file/d/1GRB1r7GMenam_ADIZK9bX70LROvkamEH/preview" width="100%" height="350%" allow="autoplay"></iframe>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
