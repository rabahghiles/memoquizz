import { setCards } from "../../actions/cards.actions";
import {
    RESTART_GAME,
    setFinalScore,
    setGame,
    setGameStartingTime,
    setScore,
    setTries
} from "../../actions/game.actions";

export const gameMiddleware = ({dispatch, getState}) => (next) => (action) => {
    next(action);


    switch (action.type) {

        case RESTART_GAME:
            dispatch(setTries(0));
            dispatch(setScore(0));
            dispatch(setFinalScore(0));
            dispatch(setGameStartingTime(Date.now()));

            const { cards } = getState().cardsReducer;
            const nonFlippedCards = cards.map( card => ({...card, flipped: false, finded: false}))
            const shufledCards = nonFlippedCards.sort(() => Math.random() - 0.5)
            dispatch(setCards(shufledCards));

            dispatch(setGame(true));
            break;

    }
}