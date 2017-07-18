/**
 * Created by shinest on 06/02/2017.
 */

import { handleActions } from 'redux-actions';
import { CategoriesState, CategoriesCountState } from '../../constants/models'
import { combineReducers } from 'redux'
import { GET_CATEGORIES_SUCCESS, GET_CATEGORIES_COUNT_SUCCESS } from '../../constants/actionTypes';


const categoriesReducers = handleActions({
    GET_CATEGORIES_SUCCESS: (state, {payload}) => (
        state.merge({page: payload.page})
            .merge({postMetaList: payload.post_meta_list})
            .merge({queryAt: payload.query_at})
            .merge({seo: payload.seo})
    )
}, CategoriesState);

const categoriesCountReducers = handleActions({
    GET_CATEGORIES_COUNT_SUCCESS: (state, {payload}) => (
        state.merge({display: payload.display})
            .merge({description: payload.description})
            .merge({postCount: payload.postCount})
    )
}, CategoriesCountState);

export default combineReducers({categoriesReducers, categoriesCountReducers});
