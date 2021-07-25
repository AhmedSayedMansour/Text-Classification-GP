import React, { Component } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import Contact from '../Contact/Contact';
import ibrahim from '../../assests/img/our team/ibrahim.jpg';
import ahmedSM from '../../assests/img/our team/ahmedSM.jpg';
import ahmedSI from '../../assests/img/our team/ahmedSI.jpg';
import atef from '../../assests/img/our team/atef.jpg';
import ashraf from '../../assests/img/our team/ashraf.jpg';
import Dr from '../../assests/img/our team/Dr.jpg';
import TA from '../../assests/img/our team/TA.jpg';
class Credits extends Component {
    render() {
        return (
            <>
                <header className="site-header">
                    <h1 className="head">Our team</h1>
                </header>
                <Container >
                    <Row >
                        <Col >
                            <Contact name="Ahmed Sayed Mansour" title="senior student FCAI-CU" email="ahmed.mans20719@gmail.com" img={ahmedSM} />
                        </Col>
                        <Col >
                            <Contact name="Ahmed Sayed Ibrahim" title="senior student FCAI-CU" email="ahmed111522@gmail.com" img={ahmedSI} />
                        </Col>
                    </Row>
                    <Row >
                        <Col >
                            <Contact name="Atef Magdy Mitwally" title="senior student FCAI-CU" email="atefmagdy12@gmail.com" img={atef} />
                        </Col>
                        <Col >
                            <Contact name="Ashraf Samir Ali" title="senior student FCAI-CU" email="ashrafsamer423@gmail.com" img={ashraf} />
                        </Col>
                    </Row>
                    <Row >
                        <Col >
                            <Contact name="Ibrahim Ramadan Abdou" title="senior student FCAI-CU" email="ibrahemramadan130@gmail.com" img={ibrahim} />
                        </Col>
                        
                    </Row>
                </Container>
                <header className="site-header">
                    <h1 className="head">Under supervision</h1>
                </header>
                <Container >
                    <Row >
                        <Col >
                            <Contact name="Dr.Hesham Hassan" title="Prof at FCAI-CU" email="" img={Dr} />
                        </Col>
                        <Col >
                            <Contact name="Eng.Dalia Maher" title="TA at FCAI-CU" email="" img={TA}/>
                        </Col>
                    </Row>
                </Container>
            </>
        );
    }
}
export default Credits;