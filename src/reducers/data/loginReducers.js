/**
 * Created by shinest on 07/02/2017.
 */

import { handleActions } from 'redux-actions';
import { LoginState } from '../../constants/models'
import { CHANGE_LOGIN_FORM } from '../../constants/actionTypes';
import Immutable from 'immutable';

const loginReducers = handleActions({
    CHANGE_LOGIN_FORM: (state, {payload}) => (
        state.mergeDeep({loginForm: payload})
    ),
    SET_AUTH: (state, {token}) => (
        state.set('isLogin', true)
    )

}, LoginState);

export default loginReducers;