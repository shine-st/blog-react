/**
 * Created by shinest on 20/06/2017.
 */


import {
    CHANGE_LOGIN_FORM,
    CHANGE_POST_FORM,
    GET_BACKEND_EDIT_POST_SUCCESS,
    GET_BACKEND_POST_LIST_SUCCESS,
    SET_AUTH
} from "../constants/actionTypes";

import { get, post } from "../utils/api";
import { Map } from "immutable";
import auth from "../utils/auth";
import { browserHistory } from 'react-router';

export const changeLoginForm = (key, value) => {
    let payload = Map().set(key, value)
    return {type: CHANGE_LOGIN_FORM, payload}
}

export const changePostForm = (key, value) => {
    let payload = Map().set(key, value)
    return {type: CHANGE_POST_FORM, payload}
}

export const login = (body) => (dispatch) => {
    let uri = `backend/authenticate`;
    if (auth.isLogin()) {
        // browserHistory.push(location);
    }

    return post(uri, body).then((json) => {
            const token = json.data.payload.token
            dispatch({type: SET_AUTH, payload: token})
            auth.store(token)
            forwardTo("/backend/edit-post")
        }
    ).catch((r) => dispatch(r))
}

export const allPosts = (dispatch) => {
    let uri = `backend/post/all`;

    return get(uri).then((json) => {
            const posts = json.data.payload
            dispatch({type: GET_BACKEND_POST_LIST_SUCCESS, payload: posts})

            // browserHistory.push(location);
        }
    ).catch((r) => dispatch(r))
}

export const getPost = (id) => (dispatch) => {
    let uri = `backend/post/${id}`;

    return get(uri).then((json) => {
        console.log(' call return')
        console.log({type: GET_BACKEND_EDIT_POST_SUCCESS, payload: json.data.payload})
            dispatch({type: GET_BACKEND_EDIT_POST_SUCCESS, payload: json.data.payload})

            // browserHistory.push(location);
        }
    ).catch((r) => dispatch(r))
}


export const editPost = (body) => (dispatch) => {
    console.log("update in")
    let uri = `backend/post/${body.id}`;

    console.log(body)
    return post(uri, body).then((json) => {
            console.log(json)
            forwardTo("/backend/edit-post")
        }
    ).catch((r) => dispatch(r))
}

/**
 * Forwards the user
 * @param {string} location The route the user should be forwarded to
 */
function forwardTo(location) {
    console.log('forwardTo(' + location + ')');
    browserHistory.push('/#' + location);
}