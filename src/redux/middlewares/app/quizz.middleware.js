import { apiRequest, API_ERROR, API_SUCCESS } from "../../actions/api.actions";
import { setGameQuizz } from "../../actions/game.actions";
import { END_QUIZZ, FETCH_QUIZZ, QUIZZ, setQuizz } from "../../actions/quizz.actions";
import { setLoader } from "../../actions/ui.actions";

export const quizzMiddleware = ({dispatch, getState}) => (next) => (action) => {
    next(action);


    switch (action.type) {

        case FETCH_QUIZZ:
            dispatch(apiRequest(null, "GET", action.payload.data, QUIZZ));
            dispatch(setLoader(true, QUIZZ));
            break;

        case `${QUIZZ} ${API_SUCCESS}`:
            dispatch(setQuizz(action.payload.data));
            dispatch(setLoader(false, QUIZZ));
            dispatch(setGameQuizz(true));
            break;

        case `${QUIZZ} ${API_ERROR}`:
            console.log(action.payload.data)
            break;
                
        case END_QUIZZ:
            console.log("END GAME");
            dispatch(setGameQuizz(false));
            break;
    }
}