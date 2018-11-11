import * as actions from '../actions/actionIndex';

export default (state, action) => {
    if (action.type === actions.ADD_SOCIAL_CARD) {
        return Object.assign({}, state, {
            socialCard: [...state.socialCard, {
                first_name: action.job_title,
                last_name: action.last_name,
                job_title: action.job_title,
                experience: action.experience,
                interests: action.interests,
                personality: action.personality,
                thoughts: action.thoughts
            }]
        });
    } else if (action.type === actions.FETCH_CARD_SUCCESS){
        return action.card;
    } else if (action.type === actions.FETCH_SURVEY_SUCCESS){
        return action.survey
    }
    return state;
};
