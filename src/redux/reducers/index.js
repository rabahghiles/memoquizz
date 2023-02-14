import { combineReducers } from "redux";
import { uiReducer } from "./ui.reducer";
import { cardsReducer } from "./cards.reducer";
import { gameReducer } from "./game.reducer";

export const reducers = combineReducers({
    uiReducer,
    cardsReducer,
    gameReducer,
})