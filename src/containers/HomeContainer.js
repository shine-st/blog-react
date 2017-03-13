/**
 * Created by shinest on 30/12/2016.
 */
import HomeHeader from '../components/home/HomeHeader'
import HomeContent from '../components/home/HomeContent'
import { connect } from 'react-redux'
import React, { PropTypes } from 'react'
import { getHomePosts } from '../actions';


class HomeContainer extends React.Component {

    constructor(props) {
        super(props);
        props.initHomePosts(props.page, props.update);
    }


    render() {
        return (<div>
            <HomeHeader />
            <HomeContent
                metaList={this.props.currentPage.get('post_meta_list')}
                page={this.props.page}
            />
        </div>);
    }
}


const mapStateToProps = (state, ownProps) => {
    return {
        currentPage: state.getIn(['home', 'currentPage']),
        page: ownProps.params.page,
        update: ownProps.location.query.update ? true : false
    };
}


export default connect(
    mapStateToProps,
    dispatch => ({
        initHomePosts: (page, update) => (dispatch(getHomePosts(page, update)))
    })
)(HomeContainer)