// import { combineReducers } from 'redux';
// import ui from './ui';
// import todos from './todos';

// export default combineReducers({
//     ui,
//     todos,
// })

import { combineReducers } from "redux";
import { uiReducer } from "./ui.reducer";
import { cardsReducer } from "./cards.reducer";

export const reducers = combineReducers({
    uiReducer,
    cardsReducer,
})