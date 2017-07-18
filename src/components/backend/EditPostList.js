/**
 * Created by shinest on 16/03/2017.
 */

import React, { Component } from 'react';
import { Link } from "react-router";
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table'

class EditPostList extends Component {

    constructor(props) {
        super(props)
    }


    linkFormat = (cell, row) => {
        let url = `/backend/edit-post/${row._id}`
        return (<Link to={url}>{cell}</Link>)
    }

    render() {
        return (
            <div className="container">
                <BootstrapTable data={this.props.posts} striped hover condensed>
                    <TableHeaderColumn dataField='_id' isKey hidden>ID</TableHeaderColumn>
                    <TableHeaderColumn dataField='title' dataFormat={this.linkFormat}>Title</TableHeaderColumn>
                    <TableHeaderColumn dataField='subtitle'>Subtitle</TableHeaderColumn>
                    <TableHeaderColumn dataField='path'>Path</TableHeaderColumn>
                    <TableHeaderColumn dataField='category_id'>Category Id</TableHeaderColumn>
                </BootstrapTable>
            </div>
        )
    }
}


export default EditPostList;