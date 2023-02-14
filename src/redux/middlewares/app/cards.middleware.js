import { FETCH_CARDS, CARDS, setCards, FLIP_CARD } from "../../actions/cards.actions";
import { apiRequest, API_ERROR, API_SUCCESS} from "../../actions/api.actions";
import { setLoader } from "../../actions/ui.actions"
import { setScore, setTries, setFinalScore, setGame, setGameStartingTime } from "../../actions/game.actions";
import calculateFinalScoreUtil from "../../../utils/calculateFinalScore.util";

export const cardsMiddleware = ({dispatch, getState}) => (next) => (action) => {
    next(action);


    switch (action.type) {

        case FETCH_CARDS:
            dispatch(apiRequest(null, "GET", action.payload.data, CARDS));
            dispatch(setLoader(true, CARDS));
            break;

        case `${CARDS} ${API_SUCCESS}`:
            dispatch(setCards(action.payload.data));
            dispatch(setLoader(false, CARDS));
            dispatch(setGameStartingTime(Date.now()))
            break;

        case `${CARDS} ${API_ERROR}`:
            console.log(action.payload.data)
            break;

        case FLIP_CARD:

            const oldCards = getState().cardsReducer.cards;
            const clickedCard = oldCards.find(card => card.id === action.payload.data);
            const flippedCard = oldCards.find(card => card.flipped);

            if ( flippedCard && flippedCard.id === clickedCard.id ) return;
            
            let newCards = oldCards.map( card => card.id === clickedCard.id ? {...card, flipped: true} : card )
            dispatch(setCards(newCards));

            if ( !flippedCard ) return;
            if ( flippedCard.index === clickedCard.index ) {
                newCards = oldCards.map( card => card.id === clickedCard.id || card.id === flippedCard.id ? {...card, finded: true, flipped: false} : card );
                const { score } = getState().gameReducer;
                dispatch(setScore(score + 1000));
            }
            else newCards = oldCards.map( card => card.flipped ? {...card, flipped: false} : card );
            const { tries } = getState().gameReducer;
            dispatch(setTries(tries + 1));

            setTimeout(() => {
                dispatch(setCards(newCards));
                if ( !newCards.find( card => !card.finded ) ) {
                    const { tries, score, startingTime } = getState().gameReducer;
                    const finalScore = calculateFinalScoreUtil(tries, score, startingTime);
                    dispatch(setFinalScore(finalScore));
                    dispatch(setGame(false))
                }
            }, 600)

            break;

    }
}