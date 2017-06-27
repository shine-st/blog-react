/**
 * Created by shinest on 07/02/2017.
 */

import { createAction } from 'redux-actions';
import { SHOW_SPINNER, HIDE_SPINNER, SHOW_ERROR_MESSAGE, HIDE_ERROR_MESSAGE } from '../constants/actionTypes';


export const showSpinner = createAction(SHOW_SPINNER);
export const hideSpinner = createAction(HIDE_SPINNER);

export const showErrorMessage = (message) => {
    console.log('show error message')
    console.log(message)
    return {type: SHOW_ERROR_MESSAGE, message: message}
}

export const hideErrorMessage = createAction(HIDE_ERROR_MESSAGE);