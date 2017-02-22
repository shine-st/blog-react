/**
 * Created by shinest on 30/12/2016.
 */
import AboutHeader from '../components/about/AboutHeader'
import AboutContent from '../components/about/AboutContent'
import { connect } from 'react-redux'
import React, { PropTypes } from 'react'
import { getAboutInfo } from '../actions';

const AboutContainer = ({title, content, type, getAboutInfo}) => {
    if (!content)
        getAboutInfo(type);

    return (<div>
        <AboutHeader
            title={title}
        />
        <AboutContent
            content={content}
        />
    </div>);
}


const mapStateToProps = (state, ownProps) => {
    console.log('check');
    console.log(ownProps.params.path);
    return {
        title: state.getIn(['about', 'title']),
        content: state.getIn(['about', 'content']),
        type: ownProps.params.type
    };
}


export default connect(
    mapStateToProps,
    dispatch => ({
        getAboutInfo: (type) => (dispatch(getAboutInfo(type)))
    })
)(AboutContainer)