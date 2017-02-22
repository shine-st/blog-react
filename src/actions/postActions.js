/**
 * Created by shinest on 10/01/2017.
 */

import { GET_POST_SUCCESS } from '../constants/actionTypes';
import { callApi } from '../utils';

export const getPosts = (path) => {
    let uri = `post/${path}`;
    console.log(uri);
    return callApi(uri, GET_POST_SUCCESS);
};