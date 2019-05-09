import * as API from '../../net/API';
import HttpUtil from '../../net/HttpUtil';
import {HOME} from '../type'

/**
 * 首页数据请求
 */
const homeList = (params) => async (dispatch, getState) => {

    const headers =  {
        'Accept': 'application/json', 
        'Content-Type': 'application/json'
    };

    HttpUtil.post(API.HOME_LIST, params, headers).then((res) => {
        
        dispatch({
            type: HOME.LIST,
            res: res
        });

    }).catch((err) => {
        dispatch({
            type: LOGIN.IN,
            res: {}
        });
    });
};

export default {
    homeList
}