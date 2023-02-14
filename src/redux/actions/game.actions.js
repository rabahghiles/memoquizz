export const GAME = '[GAME]';

export const INCREMENT_TRIES = `${GAME} INCREMENT_TRIES`;

export const incrementTries = () => ({
    type: INCREMENT_TRIES
})