/**
 * Created by shinest on 16/03/2017.
 */

import React, { Component } from 'react';

import ReactDOM from 'react-dom';
import { Col, Form, FormGroup, ControlLabel, FormControl, HelpBlock, Button } from 'react-bootstrap'
// import {FieldGroup} from '../../utils/form'


class Login extends Component {

    constructor(props) {
        super(props)

    }


    handleChange = (key) => (e) => {
        this.props.actions.changeLoginForm(key,e.target.value)
        // let obj = {}
        // obj[key] = e.target.value
        // this.setState(obj);
    }

    getIdValidationState = () => {
        const length = this.props.loginForm.get('id').length

        if (length >= 5)
            return 'success'
        else if (length > 0)
            return 'warning'
    }

    getPasswordValidationState = () => {
        const length = this.props.loginForm.get('password').length

        if (length >= 8)
            return 'success'
        else if (length > 0)
            return 'warning'
    }

    onSubmit = (evt, password,dd,cc) => {
        evt.preventDefault();
        this.props.actions.login(this.props.loginForm)
        console.log(evt)
        console.log(password)
        console.log(dd)
        console.log(cc)
    }

    render() {
        let hr = React.createElement('hr', '', '');
        let backgroundImage = {
            backgroundImage: "url('res/img/home_bg.jpg')"
        }

        return (
            <div className="container">
                <Form horizontal
                      onSubmit={this.onSubmit}
                      action="localhost:9000/auth"
                      >
                    <FormGroup
                        controlId="id"
                        validationState={this.getIdValidationState()}
                    >
                        <Col componentClass={ControlLabel} sm={2}>
                            id
                        </Col>
                        <Col sm={6}>
                            <FormControl
                                type="text"
                                value={this.props.loginForm.get('id')}
                                onChange={this.handleChange('id')}
                            />
                            <FormControl.Feedback />
                        </Col>

                    </FormGroup>


                    <FormGroup
                        controlId="password"
                        validationState={this.getPasswordValidationState()}
                    >
                        <Col componentClass={ControlLabel} sm={2}>
                            password
                        </Col>
                        <Col sm={6}>
                            <FormControl
                                type="password"
                                value={this.props.loginForm.get('password')}
                                onChange={this.handleChange('password')}
                            />
                            <FormControl.Feedback />
                        </Col>
                    </FormGroup>

                    <FormGroup>
                        <Col smOffset={2} sm={6}>
                            <Button type="submit" bsStyle="primary">
                                Sign in
                            </Button>
                        </Col>
                    </FormGroup>

                </Form>
                {this.props.errorMessage}
            </div>
        )
    }
}


export default Login;