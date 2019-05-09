import  {HOME} from '../type';
import {createReducer} from '../'

const initialState = {
    homeModel: Object
};

const actionHandler = {
    [HOME.LIST]: (state, action) => {
        return {
            ...state,
            homeModel: action.res
        }
    },
};

export default createReducer(initialState, actionHandler)