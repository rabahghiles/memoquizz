import { apiError, apiSuccess, API_REQUEST } from "../../actions/api.actions";

export const apiMiddleware = ({dispatch}) => (next) => (action) => {
    next(action);

    if ( action.type.includes(API_REQUEST) ) {

        const { entity, method, url } = action.payload.meta;

        // Use this to fetch real API
        {/*fetch(url, {method})
            .then( response => response.json() )
            .then( data => dispatch(apiSuccess(data, entity)) )
            .catch( error => dispatch(apiError(error, entity)) )*/}

        const cards = [
            {id: 0, index: 1, flipped: false, finded: false, imgUrl: "https://images.unsplash.com/photo-1604580864964-0462f5d5b1a8?auto=format&fit=crop&w=876&q=80"},
            {id: 1, index: 1, flipped: false, finded: false, imgUrl: "https://images.unsplash.com/photo-1604580864964-0462f5d5b1a8?auto=format&fit=crop&w=876&q=80"},
            {id: 2, index: 2, flipped: false, finded: false, imgUrl: "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=876&q=80"},
            {id: 3, index: 2, flipped: false, finded: false, imgUrl: "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=876&q=80"},
            {id: 4, index: 3, flipped: false, finded: false, imgUrl: "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?auto=format&fit=crop&w=876&q=80"},
            {id: 5, index: 3, flipped: false, finded: false, imgUrl: "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?auto=format&fit=crop&w=876&q=80"},
            {id: 6, index: 4, flipped: false, finded: false, imgUrl: "https://images.unsplash.com/photo-1615811648503-479d06197ff3?auto=format&fit=crop&w=876&q=80"},
            {id: 7, index: 4, flipped: false, finded: false, imgUrl: "https://images.unsplash.com/photo-1615811648503-479d06197ff3?auto=format&fit=crop&w=876&q=80"},
            {id: 8, index: 6, flipped: false, finded: false, imgUrl: "https://images.unsplash.com/photo-1626568940331-b9efa277b000?auto=format&fit=crop&w=876&q=80"},
            {id: 9, index: 6, flipped: false, finded: false, imgUrl: "https://images.unsplash.com/photo-1626568940331-b9efa277b000?auto=format&fit=crop&w=876&q=80"},
            {id: 10, index: 7, flipped: false, finded: false, imgUrl: "https://images.unsplash.com/photo-1609944433409-81bda5323abc?auto=format&fit=crop&w=876&q=80"},
            {id: 11, index: 7, flipped: false, finded: false, imgUrl: "https://images.unsplash.com/photo-1609944433409-81bda5323abc?auto=format&fit=crop&w=876&q=80"},
        ].sort(() => Math.random() - 0.5);

        // Fake API
        setTimeout(() => {
            dispatch(apiSuccess(cards, entity))
        }, 0)

    }

}