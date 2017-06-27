/**
 * Created by shinest on 17/02/2017.
 */

import { fail } from '../actions/flowActions';

import { showSpinner, hideSpinner, showErrorMessage } from '../actions/uiActions';

let config = require('Config')

export const callApi = (uri, actionType, update = false) => (
    (dispatch) => {
        // dispatch(showSpinner());
        console.log(`callApi with url: ${uri}?update=${update}`);

        fetch(`${config.api.host}/${uri}?update=${update}`)
            .then(response => response.json())
            .then((json) => {
                dispatch({type: actionType, payload: json.payload});
                // dispatch(hideSpinner());
            })
            .catch((error) => {
                console.error(error);
                dispatch(fail())
            });
    }
);

export const post = (uri, body) => (
    fetch(`${config.api.host}/${uri}`, {
        method: 'post',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    }).then(parseResp).then(checkStatus)
)

const parseResp = (resp) => (
    resp.json().then((json) => ({
            data: json,
            status: resp.status
        })
    ))


export const checkStatus = (resp) => {
    let action
    switch (resp.status) {
        case 200:
            return resp
        case 400:

            console.log(resp.body)
            action = showErrorMessage(resp.data.message)
            break;
        case 500:
        default:
            action = showErrorMessage(`500........${resp.data.message}`)
            break;
    }

    return Promise.reject(action)
}
