/**
 * Created by shinest on 07/02/2017.
 */

import { handleActions } from 'redux-actions';
import { EditState } from '../../constants/models'
import { mdToHtml } from '../../utils/markdown'

const editReducers = handleActions({
    GET_BACKEND_POST_LIST_SUCCESS: (state, {payload}) => (
        state.merge({posts: payload})
    ),
    GET_BACKEND_EDIT_POST_SUCCESS: (state, {payload}) => {
        let meta = payload.post_meta_data
        return state.merge({
            post: {
                id: meta._id,
                title:  meta.title,
                path: meta.path,
                subtitle: meta.subtitle,
                categoryId: meta.category_id,
                md: payload.md,
                content: mdToHtml(payload.md)
        }})
    },
    CHANGE_POST_FORM: (state, {payload}) => (
        state.mergeDeep({post: payload})
    ),



}, EditState);

export default editReducers;


