import {SubmissionError} from 'redux-form';

// import {API_BASE_URL} from '../config';
let API_BASE_URL = 'https://rocky-castle-33666.herokuapp.com/api'
import {normalizeResponseErrors} from './utils';

export const registerUser = user => dispatch => {
    return fetch(`${API_BASE_URL}/users/register`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(user)
    })
    .then(res => normalizeResponseErrors(res))
    .then(res => res.json())
    .catch(err => {
        const {reason, message, location} = err;
        if (reason === "ValidationError"){
            return Promise.reject(new SubmissionError({
                [location]: message
            }))
        };
    });
}