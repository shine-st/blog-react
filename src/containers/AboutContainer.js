/**
 * Created by shinest on 30/12/2016.
 */
import AboutHeader from '../components/about/AboutHeader'
import AboutContent from '../components/about/AboutContent'
import { connect } from 'react-redux'
import React, { PropTypes } from 'react'
import { getAboutInfo } from '../actions';

class AboutContainer extends React.Component {

    constructor(props) {
        super(props);
        props.getAboutInfo(props.type, props.update);
    }


    render() {
        return (<div>
            <AboutHeader
                title={this.props.title}
            />
            <AboutContent
                content={this.props.content}
            />
        </div>);
    }
}

const mapStateToProps = (state, ownProps) => {

    return {
        title: state.getIn(['about', 'title']),
        content: state.getIn(['about', 'content']),
        type: ownProps.params.type,
        update: ownProps.location.query.update ? true : false
    };
}


export default connect(
    mapStateToProps,
    dispatch => ({
        getAboutInfo: (type, update) => (dispatch(getAboutInfo(type, update)))
    })
)(AboutContainer)