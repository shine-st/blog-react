/**
 * Created by shinest on 30/12/2016.
 */
import HomeHeader from '../components/home/HomeHeader'
import HomeContent from '../components/home/HomeContent'
import {connect} from 'react-redux'
import React, {PropTypes} from 'react'
import { getHomePosts } from '../actions';

const HomeContainer = ({currentPage, page, initHomePosts}) => {
    // console.log(currentPage.get('post_meta_list'));
    if ((currentPage.get('post_meta_list').isEmpty()) || currentPage.get('page') != page)
        initHomePosts(page);

    return (<div>
        <HomeHeader />
        <HomeContent
            metaList={currentPage.get('post_meta_list')}
            page={page}
        />
    </div>);
}


const mapStateToProps = (state, ownProps) => {
    console.log(state.getIn(['home', 'currentPage']).get('post_meta_list').isEmpty());
    return {
        currentPage: state.getIn(['home', 'currentPage']),
        page: ownProps.params.page
    };
}


export default connect(
    mapStateToProps,
    dispatch => ({
        initHomePosts: (page) => (dispatch(getHomePosts(page)))
    })
)(HomeContainer)