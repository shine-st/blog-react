/**
 * Created by shinest on 16/03/2017.
 */

import React, { Component } from 'react';
import { Button, Col, ControlLabel, Form, FormControl, FormGroup } from 'react-bootstrap'


class Login extends Component {

    constructor(props) {
        super(props)

    }


    handleChange = (key) => (e) => {
        this.props.actions.changeLoginForm(key,e.target.value)
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

    onSubmit = (evt) => {
        evt.preventDefault();
        this.props.actions.login(this.props.loginForm)
    }

    render() {
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
            </div>
        )
    }
}


export default Login;