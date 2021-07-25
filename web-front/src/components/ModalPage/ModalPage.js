import React from 'react';
import {Modal} from 'react-bootstrap';
const ModalPage =(props)=>{
    return(
        <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton className='Modalheader'>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className='Modalbody' >
        <h4>{props.head}</h4>
        <p>
         {props.body}
        </p>
      </Modal.Body>
    </Modal>
    );
}
export default ModalPage;