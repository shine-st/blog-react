/**
 * Created by shinest on 16/03/2017.
 */

import React, { Component } from 'react';
import { Button, Col, ControlLabel, Form, FormControl, FormGroup } from 'react-bootstrap'
import { mdToHtml } from '../../utils/markdown'

var HtmlToReactParser = require('html-to-react').Parser;

class EditPostContnet extends Component {

    constructor(props) {
        super(props)
    }


    isEmptyValidationState = (text) => (
        text.length > 0 ? 'success' : 'warning'
    )

    handleChange = (key) => (e) => {
        this.props.actions.changePostForm(key, e.target.value)
    }

    handleMdChange = (e) => {
        this.props.actions.changePostForm('md', e.target.value)
        this.props.actions.changePostForm('content', mdToHtml(e.target.value))
    }


    onSubmit = (evt) => {
        evt.preventDefault();
        this.props.actions.editPost(this.props.post)
    }


    generateTextForm = (id) =>
        (
            <FormGroup
                controlId={id}
                validationState={this.isEmptyValidationState(this.props.post[id])}
            >
                <Col componentClass={ControlLabel} sm={2}>
                    {id}
                </Col>
                <Col sm={6}>
                    <FormControl
                        type="text"
                        value={this.props.post[id]}
                        onChange={this.handleChange(id)}
                    />
                    <FormControl.Feedback/>
                </Col>

            </FormGroup>
        )


    render() {
        const post = this.props.post
        const parser = new HtmlToReactParser()

        return (
            <div className="container">
                <Form horizontal
                      onSubmit={this.onSubmit}
                >
                    {this.generateTextForm('title')}
                    {this.generateTextForm('subtitle')}
                    {this.generateTextForm('path')}

                    <FormGroup controlId="md">
                        <Col sm={6}>
                            <ControlLabel>Markdown</ControlLabel>
                            <FormControl
                                componentClass="textarea"
                                value={post.md}
                                onChange={this.handleMdChange}
                                style={{height: 800}}
                            />
                        </Col>
                        <Col sm={6}>
                            <ControlLabel>Preview</ControlLabel>
                            <div>
                                {parser.parse(post.content)}
                            </div>
                        </Col>
                    </FormGroup>


                    <FormGroup>
                        <Col sm={6}>
                            <Button type="submit" bsStyle="primary">
                                Update
                            </Button>
                        </Col>
                    </FormGroup>

                </Form>

            </div>
        )
    }
}


export default EditPostContnet;