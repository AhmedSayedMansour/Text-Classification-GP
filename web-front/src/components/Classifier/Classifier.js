import React, { Component } from 'react';
import Logo from '../Logo.js';
import { getClass, addHistory } from '../../API/HistoryApi';
import ModalPage from '../ModalPage/ModalPage'
import AlertBox from '../AlertBox/AlertBox.js';
import ClassifyingSpinner from '../ClassifyingSpinner/ClassifyingSpinner';
import { Button,Row,Col,Container } from 'react-bootstrap';
import './Classifier.css';
export default class Classifier extends Component {


    constructor(props) {
        super(props);
        this.state = {
            txt: '',
            class: '',
            algorithm: 'SVM',
            disabled: false,
            loading: false,
            showModal: false,
            modalTitle: '',
            modalHead: '',
            modalBody: '',
            showAlert: false,
            alertHead: '',
            alertBody: '',
            isRight: false
        }

    }
    classify = () => {
        const params = {
            'text': this.state.txt,
            'option': this.state.algorithm
        };
        this.setState({ loading: true, showAlert: false })

        this.setState({ loading: true })

        if (this.state.txt === '' || !this.state.txt.replace(/\s/g, '').length) {
            this.setState({
                loading: false,
                showAlert: true,
                alertHead: 'Empty input',
                alertBody: 'You can\'t put empty or spaces only input to classify'
            });
            document.getElementById('textBox').focus();
        } else {
            getClass(params).then(response => {

                this.setState({
                    class: response.data.class,
                    loading: false,
                    showAlert:false,
                    disabled: true
                })

            }).catch(error => {
                this.setState({
                    loading: false,
                    showModal: true,
                    modalTitle: 'Oops,Error happen!!',
                    modalHead: error.message,
                    modalBody: 'Please try again later'

                });
            })

        }

    }


    handleInput = (e) => {
        this.setState({
            txt: e.target.value,
        })
    }
    handleSelect = (e) => {
        this.setState({
            algorithm: e.target.value,
        })
    }
    hideModal = () => {
        this.setState({
            loading: false,
            showModal: false,
            modalTitle: '',
            modalHead: '',
            modalBody: ''
        });
    }
    closeAlert = () => {
        this.setState({
            loading: false,
            showAlert: false,
            alertHead: '',
            alertBody: ''
        });
    }
    rightResult = () => {
        const params1 = { text: this.state.txt, tag: this.state.class, algorithm: this.state.algorithm, isTagRight: true }
        addHistory(params1)
        this.setState(
            {
                txt: '',
                class: '',
                algorithm: 'SVM',
                isRight: true,
                disabled: false,
            }
        );
    }
    wrongResult = () => {
        const params1 = { text: this.state.txt, tag: this.state.class, algorithm: this.state.algorithm, isTagRight: false }
        addHistory(params1)
        this.setState(
            {
                class: '',
                algorithm: 'SVM',
                isRight: false,
                disabled: false,
            }
        );
    }
    render() {

        let alertBox = this.state.showAlert ?
            <AlertBox head={this.state.alertHead}
                body={this.state.alertBody}
                close={this.closeAlert.bind(this)} /> : '';


        let classBox = this.state.class !== '' ?
            <Row >
                <Col xs={2}/>
                <Col >
                    <div className='result'><span>class: </span>{this.state.class}</div>

                </Col>
                <Col >
                    <div className='resultButtons'>
                        <Button variant="success" onClick={()=>{this.rightResult()}}>Right?!<br />Classify another</Button>
                        {'    '}
                        <Button variant="danger" onClick={()=>{this.wrongResult()}} >Wrong?!<br />Try another algorithm</Button>
                    </div>
                </Col>
                
            </Row>
            : <Row >
                <Col xs={4}/>
                <Col >
                    <button className='button'
                        onClick={
                            () => this.classify()} >
                        classify
                    </button>
                </Col>
            </Row>;
        let content = this.state.loading ?
            <Container >
                <Row >
                    <Col md={{ span: 6, offset: 3 }}>
                        <div className='spinner' >
                            <  ClassifyingSpinner />
                        </div>
                    </Col>
                </Row>
            </Container> : (
                <>
                <header className="site-header">
                    <Logo style={{position:"fixed"}}/>
                </header>
                    <Container >
                        

                        <Row >
                        <Col xs={2}/>
                            <Col >
                                <label className='label' >
                                    Choose an algorithm:
                                </label>
                                <select className='selector'
                                    onChange={this.handleSelect.bind(this)}
                                    value={this.state.algorithm}
                                    disabled={this.state.disabled}
                                >
                                    <option value="SVM" > SVM </option>
                                    <option value="Naive Bayes" > Naive Bayes </option>
                                    <option value="Linear SVC" > Linear SVC </option>
                                    <option value="Random Forest" > Random Forest </option>
                                    <option value="CNN" > CNN </option>
                                    <option value="Fine Tuned BERT" > Fine Tuned BERT </option>
                                    
                                </select>
                            </Col>
                            <Col xs={2}/>
                        </Row>
                        <Row >
                        <Col xs={2}/>

                            <Col >
                                {alertBox}
                                <label className='label' >
                                    Put your content:
                                </label>
                                <textarea placeholder='leave your text here to classify'
                                    className='textArea'
                                    rows='6'
                                    onChange={this.handleInput.bind(this)}
                                    value={this.state.txt}
                                    id='textBox' disabled={this.state.disabled} />
                            </Col>
                            <Col xs={2}/>
                        </Row>
                        {classBox}
                        <ModalPage show={this.state.showModal}
                            title={this.state.modalTitle}
                            head={this.state.modalHead}
                            body={this.state.modalBody}
                            onHide={
                                () => this.hideModal()}
                        />

                    </Container>
                </>);

        return (
            <div className='content'>
                {content}
            </div>
            
        );
    }

}