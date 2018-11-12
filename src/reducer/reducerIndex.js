import {FETCH_PROTECTED_CARD_SUCCESS, FETCH_PROTECTED_CARD_ERROR} from "../actions/actionIndex";

const initialState = {
    card: '',
    error: null
}

export default (state = initialState, action) => {
    if (action.type === actions.FETCH_PROTECTED_CARD_SUCCESS){
        return Object.assign({}, state, {
            card: action.card,
            error: null
        });
    } else if (action.type === actions.FETCH_PROTECTED_CARD_ERROR){
        return Object.assign({}, state, {
            error: action.error
        })
    }
    return state;
};
