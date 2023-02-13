export const CARDS = '[Cards]';

export const FETCH_CARDS = `${CARDS} Fetch`;
export const SET_CARDS = `${CARDS} Set`;
export const FLIP_CARD = `${CARDS} Flip`;

export const fetchCards = (query) => ({
    type: FETCH_CARDS,
    payload: {
        data: query
    }
})

export const setCards = (cards) => ({
    type: SET_CARDS,
    payload: {
        data: cards
    }
})


export const flipCard = (id) => ({
    type: FLIP_CARD,
    payload: {
        data: id
    }
})