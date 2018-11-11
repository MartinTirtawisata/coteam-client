import {API_BASE_URL} from '../config';

export const ADD_SOCIAL_CARD = 'ADD_SOCIAL_CARD';
export const addSocialCard = (first_name, last_name, job_title, experience, interests,personality,thoughts) => ({
    type: ADD_SOCIAL_CARD,
    first_name,
    last_name,
    job_title,
    experience,
    interests,
    personality,
    thoughts
})

export const FETCH_CARD_SUCCESS = "FETCH_CARD_SUCCESS";
export const fetchCardSuccess = card => ({
    type: FETCH_CARD_SUCCESS,
    card
});

export const FETCH_SURVEY_SUCCESS = "FETCH_SURVEY_SUCCESS";
export const fetchSurveySuccess = survey => ({
    type: FETCH_SURVEY_SUCCESS,
    survey
})

export const fetchCard = () => dispatch => {
    fetch(`${API_BASE_URL}/social-card`).then(res => {
        if(!res.ok){
            return Promise.reject(res.statusText);
        }
        return res.json();
    }).then(card => {
        dispatch(fetchCardSuccess(card));
    });
}

export const fetchSurvey = () => dispatch => {
    fetch(`${API_BASE_URL}/survey`).then(res => {
        if(!res.ok){
            return Promise.reject(res.statusText);
        }
        return res.json();
    }).then(survey => {
        dispatch(fetchSurveySuccess(survey));
    })
}