import { combineReducers } from "redux";
import { uiReducer } from "./ui.reducer";
import { cardsReducer } from "./cards.reducer";
import { gameReducer } from "./game.reducer";
import { quizzReducer } from "./quizz.reducer";

export const reducers = combineReducers({
    uiReducer,
    cardsReducer,
    gameReducer,
    quizzReducer,
})