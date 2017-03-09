/**
 * Created by shinest on 10/01/2017.
 */


import { GET_HOME_SUCCESS,GET_ABOUT_SUCCESS } from '../constants/actionTypes';

import { callApi } from '../utils';

export const getHomePosts = (page, update) => {
    let uri = `home/${page}`;
    return callApi(uri, GET_HOME_SUCCESS, update);
};

export const getAboutInfo = (type, update) => {
    let uri = `about/${type}`;
    return callApi(uri, GET_ABOUT_SUCCESS, update);
};