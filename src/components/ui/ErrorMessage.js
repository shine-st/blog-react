/**
 * Created by shinest on 21/06/2017.
 */

import React, { Component } from 'react';

import ReactDOM from 'react-dom';
import { Alert, Button, Col } from 'react-bootstrap'


const ErrorMessage = ({visible, handleAlertDismiss, message}) => (
    <Col md={12}>
        {visible ?
            (<Alert
                bsStyle="danger"
                onDismiss={handleAlertDismiss}
            >
                <h6>Oh snap! You got an error!</h6>
                <p>{message}</p>
            </Alert>)
            : ''}
            </Col>
)


export default ErrorMessage;