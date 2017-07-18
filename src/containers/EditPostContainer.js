/**
 * Created by shinest on 30/12/2016.
 */
import { connect } from 'react-redux'
import React from 'react'
import { allPosts, changePostForm, editPost, getPost } from '../actions';
import EditPostList from '../components/backend/EditPostList'
import EditPostContent from '../components/backend/EditPostContent'
import { bindActionCreators } from 'redux'
import ErrorMessage from '../components/ui/ErrorMessage'
import * as uiActions from '../actions/uiActions';


class EditPostContainer extends React.Component {

    constructor(props) {
        super(props);
    }

    static editPostListEnter(store) {
        return (nextState, replace, callback) => {
            console.log('edit post list onenter')
            Promise.all([
                allPosts(store.dispatch)
            ]).then(() => {
                callback()
            });
        }
    }

    static editPostEnter(store) {
        return (nextState, replace, callback) => {
            console.log('edit post onenter')
            Promise.all([
                getPost(nextState.params.id)(store.dispatch)
            ]).then(() => {
                callback()
            });
        }
    }


    // handleNextPage = (page) => (e) => {
    //     this.props.getHomePosts(page, false);
    // }


    render() {

        return (
            <div>
                {this.props.id ?
                    <EditPostContent
                        actions={this.props.actions}
                        post={this.props.post.toJS()}
                    /> : <EditPostList
                        actions={this.props.actions}
                        posts={this.props.posts.toJS()}
                    />}
                <ErrorMessage
                    visible={this.props.errorMessageVisible}
                    handleAlertDismiss={this.props.actions.hideErrorMessage}
                    message={this.props.errorMessage}
                />
            </div>);
    }
}


const mapStateToProps = (state, ownProps) => {
    return {
        posts: state.getIn(['edit', 'posts']),
        post: state.getIn(['edit', 'post']),
        id: ownProps.params.id
    }
}


const mapDispatchToProps = (dispatch) => {
    return {actions: bindActionCreators(Object.assign({}, {changePostForm}, {editPost}, {getPost}, uiActions), dispatch)}
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(EditPostContainer)
