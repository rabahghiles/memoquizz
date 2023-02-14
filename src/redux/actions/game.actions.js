export const GAME = '[GAME]';

export const SET_TRIES = `${GAME} SET_TRIES`;
export const SET_SCORE = `${GAME} SET_SCORE`;
export const SET_FINAL_SCORE = `${GAME} SET_FINAL_SCORE`;
export const SET_GAME = `${GAME} Set`;
export const SET_GAME_STRARTING_TIME = `${GAME} SET_GAME_STRARTING_TIME`;
export const RESTART_GAME = `${GAME} Restart`;

export const setTries = (tries) => ({
    type: SET_TRIES,
    payload: {
        data: tries
    }
})

export const setScore = (score) => ({
    type: SET_SCORE,
    payload: {
        data: score
    }
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

export const restartGame = () => ({
    type: RESTART_GAME,
})