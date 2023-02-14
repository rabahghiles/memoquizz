export const GAME = '[GAME]';

export const INCREMENT_TRIES = `${GAME} INCREMENT_TRIES`;
export const INCREMENT_SCORE = `${GAME} INCREMENT_SCORE`;
export const SET_FINAL_SCORE = `${GAME} SET_FINAL_SCORE`;
export const SET_GAME = `${GAME} Set`;
export const SET_GAME_STRARTING_TIME = `${GAME} SET_GAME_STRARTING_TIME`;

export const incrementTries = () => ({
    type: INCREMENT_TRIES
})

export const incrementScore = () => ({
    type: INCREMENT_SCORE
})

export const setGame = (state) => ({
    type: SET_GAME,
    payload: {
        data: state
    }
})

export const setFinalScore = (score) => ({
    type: SET_FINAL_SCORE,
    payload: {
        data: score
    }
})

export const setGameStartingTime = (time) => ({
    type: SET_GAME_STRARTING_TIME,
    payload: {
        data: time
    }
})