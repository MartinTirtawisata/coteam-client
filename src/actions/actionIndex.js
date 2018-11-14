import {SubmissionError} from 'redux-form';
import {API_BASE_URL} from '../config';
import {normalizeResponseErrors} from './utils';

export const createSocialCard = (card) => dispatch => {
    return fetch(`${API_BASE_URL}/social-card`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(
            card
        )
    }).then(res => {
        return normalizeResponseErrors(res)
    }).then(res => {
        return res.json()
    }).catch(err => {
        const {reason, message, location} = err;
        if (reason === "ValidationError"){
            return Promise.reject(new SubmissionError({
                [location]: message
            }))
        };
    })
}

export const editSocialCard = (card, socialCardId) => dispatch => {
    return fetch(`${API_BASE_URL}/social-card/${socialCardId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(card)
    }).then (res => normalizeResponseErrors(res))
    .then(res => res.json())
    .catch(err => {
        const {reason, message, location} = err;
        if (reason === "ValidationError"){
            return Promise.reject(new SubmissionError({
            [location]: message
            }))
        };
    })
}

export const deleteSocialCard = (socialCardId) => dispatch => {
    return fetch(`${API_BASE_URL}/social-card/${socialCardId}`, {
        method: 'DELETE'
    }).then (res => normalizeResponseErrors(res))
    .then(res=> res.json())
    .catch(err => {
        const {reason, message, location} = err;
        if (reason === "ValidationError"){
            return Promise.reject(new SubmissionError({
                [location]: message
            }))
        }
    })
}

export const FETCH_PROTECTED_CARD_SUCCESS = "FETCH_PROTECTED_CARD_SUCCESS";
export const fetchProtectedCardSuccess = card => ({
    type: FETCH_PROTECTED_CARD_SUCCESS,
    card
});

export const FETCH_PROTECTED_CARD_ERROR = "FETCH_PROTECTED_CARD_ERROR";
export const fetchProtectedCardError = error => ({
    type: FETCH_PROTECTED_CARD_ERROR,
    error
})

export const fetchProtectedCard = () => (dispatch, getState) => {
    const authToken = getState().auth.authToken
    // console.log(authToken);
    return fetch(`${API_BASE_URL}/social-card`,
        {method: 'GET',
        headers: {
            Authorization: `Bearer ${authToken}`
        }
    }).then(res => {
        // console.log(normalizeResponseErrors(res))
        return normalizeResponseErrors(res)
    }).then(res => {
        // console.log(res.json())
        return res.json()
    }).then((card) => {
        console.log(card)
        return dispatch(fetchProtectedCardSuccess(card))
    }).catch(err => {
        dispatch(fetchProtectedCardError(err))
    })
}

// export const fetchSurvey = () => dispatch => {
//     fetch(`${API_BASE_URL}/survey`).then(res => {
//         if(!res.ok){
//             return Promise.reject(res.statusText);
//         }
//         return res.json();
//     }).then(survey => {
//         dispatch(fetchSurveySuccess(survey));
//     })
// }