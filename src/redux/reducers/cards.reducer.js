import { SET_CARDS } from "../actions/cards.actions";

const initialState = {
    cards: [],
}

export const cardsReducer = (state = initialState, action) => {
    const { payload } = action;

    switch ( action.type ) {

        case SET_CARDS:
            return {...state, cards: payload.data};

        default:
            return state;

    }
}