import { apiError, apiSuccess, API_REQUEST } from "../../actions/api.actions";

export const apiMiddleware = ({dispatch}) => (next) => (action) => {
    next(action);

    if ( action.type.includes(API_REQUEST) ) {

        const { entity, method, url } = action.payload.meta;

        fetch(url, {method})
            .then( response => response.json() )
            .then( data => dispatch(apiSuccess(data, entity)) )
            .catch( error => dispatch(apiError(error, entity)) )

    }

}