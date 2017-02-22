/**
 * Created by shinest on 30/12/2016.
 */
import PostHeader from '../components/post/PostHeader'
import PostContent from '../components/post/PostContent'
import { connect } from 'react-redux'
import React, { PropTypes } from 'react'
import { getPosts } from '../actions';

const ContentContainer = ({post, metaData, path, initPost}) => {
    if ((!post.get('content')) || metaData.get('path') != path)
        initPost(path);

    return (<div>
        <PostHeader
            title={metaData.get('title')}
            subtitle={metaData.get('subtitle')}
            createAt={metaData.get('create_at')}
        />
        <PostContent
            content={post.get('content')}
        />
    </div>);
}


const mapStateToProps = (state, ownProps) => {
    return {
        post: state.getIn(['post', 'post']),
        metaData: state.getIn(['post', 'post']).get('post_meta_data'),
        path: ownProps.params.path
    };
}


export default connect(
    mapStateToProps,
    dispatch => ({
        initPost: (path) => (dispatch(getPosts(path)))
    })
)(ContentContainer)