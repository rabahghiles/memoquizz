export const QUIZZ = '[Quizz]';

export const FETCH_QUIZZ = `${QUIZZ} Fetch`;
export const SET_QUIZZ = `${QUIZZ} Set`;
export const END_QUIZZ = `${QUIZZ} end`;

export const fetchQuizz = (query) => ({
    type: FETCH_QUIZZ,
    payload: {
        data: query
    }
})

export const setQuizz = (quizz) => ({
    type: SET_QUIZZ,
    payload: {
        data: quizz
    }
})

export const endQuizz = () => ({
    type: END_QUIZZ,
})