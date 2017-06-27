/**
 * Created by shinest on 06/02/2017.
 */

import { handleActions } from 'redux-actions';
import { UiState } from '../../constants/models'
import { showSpinner, hideSpinner, showErrorMessage, hideErrorMessage } from '../../actions'
import { SHOW_ERROR_MESSAGE } from '../../constants/actionTypes'

const uiReducers = handleActions({
    [showSpinner]: (state) => (
        state.set('spinnerVisible', true)
    ),
    [hideSpinner]: (state) => (
        state.set('spinnerVisible', false)
    ),
    [SHOW_ERROR_MESSAGE]: (state, {message}) => (
        state.set('errorMessageVisible', true).set('errorMessage', message)
    ),
    [hideErrorMessage]: (state) => (
        state.set('errorMessageVisible', false)
    ),

}, UiState);

export default uiReducers;