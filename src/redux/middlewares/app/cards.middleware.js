import { FETCH_CARDS, CARDS, setCards, FLIP_CARD } from "../../actions/cards.actions";
import { apiRequest, API_ERROR, API_SUCCESS} from "../../actions/api.actions";
import { setLoader } from "../../actions/ui.actions"

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
            break;

        case `${CARDS} ${API_ERROR}`:
            console.log(action.payload.data)
            break;

        case FLIP_CARD:

            const oldCards = getState().cardsReducer.cards;
            const clickedCard = oldCards.find(card => card.id === action.payload.data);
            const flippedCard = oldCards.find(card => card.flipped);

            if ( flippedCard && flippedCard.id === clickedCard.id ) return;
            
            let newCards = []

            if ( !flippedCard ) newCards = oldCards.map( card => card.id === clickedCard.id ? {...card, flipped: true} : card );
            else if ( flippedCard.index === clickedCard.index ) newCards = oldCards.map( card => card.id === clickedCard.id || card.id === flippedCard.id ? {...card, finded: true, flipped: false} : card );
            else newCards = oldCards.map( card => card.flipped ? {...card, flipped: false} : card );

            dispatch(setCards(newCards));

            break;

    }
}