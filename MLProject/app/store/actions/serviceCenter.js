import * as API from '../../net/API';
import HttpUtil from '../../net/HttpUtil';
import {SERVICECENTER} from '../type'

/**
 * 登录请求
 */
const getList = (params, isLoadMore, callback) => async (dispatch, getState) => {

    const headers =  {
        'Accept': 'application/json', 
        'Content-Type': 'application/json'
    };

    HttpUtil.post(API.HOME_SER_CENTER, params, headers).then((res) => {
        
        if (res && res.result) {

            if (isLoadMore === false) {
                dispatch({
                    type: SERVICECENTER.LIST,
                    res: res.data
                });
            } else { // 加载下一页
                let service = getState()['serviceCenter'].datas;
                dispatch({
                    type: SERVICECENTER.LIST,
                    res: service.concat(res.data)
                });
            }
            callback && callback(res);
            return;
        }
        callback && callback(null);

    }).catch((err) => {
        callback && callback(err);
    });
};

export default {
    getList
}