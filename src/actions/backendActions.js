/**
 * Created by shinest on 20/06/2017.
 */


import { CHANGE_LOGIN_FORM, SET_AUTH } from "../constants/actionTypes";

import { post } from "../utils/api";
import { Map } from "immutable";
import auth from "../utils/auth";

export const changeLoginForm = (key, value) => {
    let payload = Map().set(key, value)
    return {type: CHANGE_LOGIN_FORM, payload}
}

export const login = (body) => (dispatch) => {
    let uri = `backend/authenticate`;
    if (auth.isLogin()) {
        // browserHistory.push(location);
    }

    post(uri, body).then((json) => {
            const token = json.data.payload.token
            dispatch({type: SET_AUTH, payload: token})
            auth.store(token)
            // browserHistory.push(location);
        }
    ).catch((r) => dispatch(r))

}
