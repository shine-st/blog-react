/**
 * Created by shinest on 30/12/2016.
 */
import PostHeader from '../components/post/PostHeader'
import PostContent from '../components/post/PostContent'
import { connect } from 'react-redux'
import React, { PropTypes } from 'react'
import { getPosts } from '../actions';


class ContentContainer extends React.Component {

    constructor(props) {
        super(props);
        props.initPost(props.path, props.update);
    }

    render() {
        return (<div>
            <PostHeader
                title={this.props.metaData.get('title')}
                subtitle={this.props.metaData.get('subtitle')}
                createAt={this.props.metaData.get('create_at')}
            />
            <PostContent
                content={this.props.post.get('content')}
            />
        </div>);
    }
}


const mapStateToProps = (state, ownProps) => {
    return {
        post: state.getIn(['post', 'post']),
        metaData: state.getIn(['post', 'post']).get('post_meta_data'),
        path: ownProps.params.path,
        update: ownProps.location.query.update ? true : false
    };
}


export default connect(
    mapStateToProps,
    dispatch => ({
        initPost: (path, update) => (dispatch(getPosts(path, update)))
    })
)(ContentContainer)