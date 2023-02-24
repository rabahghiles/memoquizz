import { SET_QUIZZ } from "../actions/quizz.actions";


const initialState = {
    id: 0,
    name: "",
    questions: [],
    selectedQuestion: 1,
    selectedAnswer: 0,
    score: 0,
}

export const quizzReducer = (state = initialState, action) => {
    const { payload } = action;

    switch ( action.type ) {


        case SET_QUIZZ:
            const {id, name, questions} = payload.data;
            return {
                ...initialState,
                id: id,
                name: name,
                questions: questions,
            }
        default:
            return state;

    }
}