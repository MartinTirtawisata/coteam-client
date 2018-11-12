import {API_BASE_URL} from '../config';
import {normalizeResponseErrors} from './utils';

export const FETCH_PROTECTED_CARD_SUCCESS = "FETCH_PROTECTED_CARD_SUCCESS";
export const fetchCardSuccess = card => ({
    type: FETCH_PROTECTED_CARD_SUCCESS,
    card
});

export const FETCH_PROTECTED_CARD_ERROR = "FETCH_PROTECTED_CARD_ERROR";
export const fetchCardError = error => ({
    type: FETCH_PROTECTED_CARD_ERROR,
    error
})

export const fetchProtectedCard = () => dispatch => {
    const authToken = getState().auth.authToken
    return fetch(`${API_BASE_URL}/social-card`,
        {method: 'GET',
        headers: {
            Authorization: `Bearer ${authToken}`
        }
    } 
    ).then(res => {
        normalizeResponseErrors(res)
    }).then(res => {
        res.json()
    }).then(({card}) => {
        dispatch(fetchCardSuccess(card))
    }).catch(err => {
        dispatch(fetchCardError(err))
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