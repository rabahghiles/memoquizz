import {
    INCREMENT_TRIES,
    INCREMENT_SCORE,
    SET_FINAL_SCORE,
    SET_GAME,
    SET_GAME_STRARTING_TIME,
} from "../actions/game.actions";

const initialState = {
    tries: 0,
    score: 0,
    game: true,
    finalScore: 0,
    startingTime: 0
}

export const gameReducer = (state = initialState, action) => {
    const { payload } = action;

    switch ( action.type ) {

        case INCREMENT_TRIES:
            return {...state, tries: state.tries + 1};

        case INCREMENT_SCORE:
            return {...state, score: state.score + 1000};

        case SET_FINAL_SCORE:
            return {...state, finalScore: payload.data};

        case SET_GAME:
            return {...state, game: payload.data};

        case SET_GAME_STRARTING_TIME:
            return {...state, startingTime: payload.data};

        default:
            return state;

    }
}