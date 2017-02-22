/**
 * Created by shinest on 10/01/2017.
 */


import { GET_HOME_SUCCESS,GET_ABOUT_SUCCESS } from '../constants/actionTypes';

import { callApi } from '../utils';

export const getHomePosts = (page = 1) => {
    let uri = `home/${page}`;
    console.log(uri);
    return callApi(uri, GET_HOME_SUCCESS);
};

export const getAboutInfo = (type) => {
    let uri = `about/${type}`;
    console.log(uri);
    return callApi(uri, GET_ABOUT_SUCCESS);
};