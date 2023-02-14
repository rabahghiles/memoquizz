import { INCREMENT_TRIES } from "../actions/game.actions";

const initialState = {
    tries: 0,
}

export const gameReducer = (state = initialState, action) => {
    // const { payload } = action;

    switch ( action.type ) {

        case INCREMENT_TRIES:
            return {...state, tries: state.tries + 1};

        default:
            return state;

    }
}