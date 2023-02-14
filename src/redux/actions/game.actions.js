export const GAME = '[GAME]';

export const INCREMENT_TRIES = `${GAME} INCREMENT_TRIES`;
export const INCREMENT_SCORE = `${GAME} INCREMENT_SCORE`;

export const incrementTries = () => ({
    type: INCREMENT_TRIES
})


export const incrementScore = () => ({
    type: INCREMENT_SCORE
})