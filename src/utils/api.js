/**
 * Created by shinest on 17/02/2017.
 */

import { fail } from '../actions/flowActions';

import { showSpinner, hideSpinner } from '../actions/uiActions';

let config = require('Config')

export const callApi = (uri, actionType, update = false) => (
    (dispatch) => {
        dispatch(showSpinner());
        console.log(`callApi with url: ${uri}?update=${update}`);

        fetch(`${config.api.host}/${uri}?update=${update}`)
            .then(response => response.json())
            .then((json) => {
                // console.log(json);
                dispatch({type: actionType, payload: json.payload});
                dispatch(hideSpinner());
            })
            .catch((error) => {
                console.error(error);
                dispatch(fail())
            });
    }
);