/**
 * Created by shinest on 10/01/2017.
 */

import { GET_POST_SUCCESS } from '../constants/actionTypes';
import { callApi } from '../utils/api';

export const getPosts = (path, update) => {
    let uri = `post/${path}`;
    return callApi(uri, GET_POST_SUCCESS, update);
};