import { SET_LOADER } from "../actions/ui.actions";

const initialState = {
    loader: false,
}

export const uiReducer = (ui = initialState, action) => {
    const { payload } = action;

    switch (true) {

        case  action.type.includes(SET_LOADER):
            return {...ui, loader: payload.data};

        default:
            return ui;

    }


}