import { INCREMENT_TRIES, INCREMENT_SCORE } from "../actions/game.actions";

const initialState = {
    tries: 0,
    score: 0,
}

export const gameReducer = (state = initialState, action) => {
    // const { payload } = action;

    switch ( action.type ) {

        case INCREMENT_TRIES:
            return {...state, tries: state.tries + 1};

        case INCREMENT_SCORE:
            return {...state, score: state.score + 100};

        default:
            return state;

    }
}