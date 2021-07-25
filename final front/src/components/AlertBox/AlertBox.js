import React from 'react';
import { Alert } from 'react-bootstrap';
import './AlertBox.css'
const AlertBox = (props) => {
  return (
    <div className='alertBox'>
      <Alert  variant="danger" onClose={props.close} dismissible>
      {props.body}
      </Alert>
     
    </div>
  );
}
export default AlertBox;