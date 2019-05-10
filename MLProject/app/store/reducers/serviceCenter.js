import  {SERVICECENTER} from '../type';
import {createReducer} from '../'

const initialState = {
    datas: [],
};

const actionHandler = {
    [SERVICECENTER.LIST]: (state, action) => {
        return {}
    },
};

export default createReducer(initialState, actionHandler)