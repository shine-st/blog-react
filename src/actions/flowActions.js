/**
 * Created by shinest on 11/01/2017.
 */
import { createAction } from 'redux-actions';
import {
    FAIL
} from '../constants/actionTypes';

export const fail = createAction(FAIL);