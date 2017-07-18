/**
 * Created by shinest on 07/02/2017.
 */

import { handleActions } from 'redux-actions';
import { AboutState } from '../../constants/models'
import { GET_HOME_SUCCESS } from '../../constants/actionTypes';

const aboutReducers = handleActions({
    GET_ABOUT_SUCCESS: (state, {payload}) => (
        state.merge({title: payload.title})
            .merge({content: payload.content})
            .merge({queryAt: payload.query_at})
    )
}, AboutState);

export default aboutReducers;