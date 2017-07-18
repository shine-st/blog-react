/**
 * Created by shinest on 07/02/2017.
 */

import { handleActions } from 'redux-actions';
import { HomeState } from '../../constants/models'
import { GET_HOME_SUCCESS } from '../../constants/actionTypes';

const homeReducers = handleActions({
    GET_HOME_SUCCESS: (state, {payload}) => (
        // state.merge({page: payload.page})
        //     .merge({postMetaList: payload.post_meta_list})
        //     .merge({queryAt: payload.query_at})
        //     .merge({seo: payload.seo})
        state.merge({currentPage: payload})
    ),
    GET_ABOUT_SUCCESS: (state, {payload}) => (
        state.merge({title: payload.title})
            .merge({content: payload.content})
            .merge({queryAt: payload.query_at})
    )
}, HomeState);

export default homeReducers;