/**
 * Created by shinest on 06/02/2017.
 */

import { handleActions } from 'redux-actions';
import { PostState } from '../../constants/models'
import { GET_POST_SUCCESS } from '../../constants/actionTypes';

const postReducers = handleActions({
        GET_POST_SUCCESS: (state, {payload}) => (
            // state.merge({postMetaList: payload.post_meta_list})
            //     .merge({content: payload.content})
            //     .merge({queryAt: payload.query_at})
            //     .merge({seo: payload.seo})
            state.merge({post: payload})
// let post = {
//     postMetaData: payload.post_meta_data,
//     content: payload.content,
//     queryAt: payload.query_at,
//     seo: payload.seo
// };
// return state.merge({post: post});
        )
    },
    PostState
    )
    ;

export default postReducers;

// export const GET_POST_SUCCESS = 'GET_POST_SUCCESS';
// export const GET_HOME_INITIATE_SUCCESS = 'GET_HOME_INITIATE_SUCCESS';
// export const GET_HIERARCHY_SUCCESS = 'GET_HIERARCHY_SUCCESS';
