import * as API from '../../net/API';
import HttpUtil from '../../net/HttpUtil';
import {LOGIN} from '../type'

/**
 * 登录请求
 */
const doLogin = (params, callback) => async (dispatch, getState) => {

    const headers =  {
        'Accept': 'application/json', 
        'Content-Type': 'application/json'
    };

    HttpUtil.post(API.USER_LOGIN, params, headers).then((res) => {
        
        if (res && res.result) {
            dispatch({
                type: LOGIN.IN,
                res: res
            });
            callback && callback(res);
            return;
        }
        callback && callback(null);

    }).catch((err) => {
        callback && callback(err);
    });
};

/**
 * 退出登录
 */
const loginOut = () => async (dispatch, getState) => {

    const headers =  {
        'Accept': 'application/json', 
        'Content-Type': 'application/json'
    };

    HttpUtil.post(API.USER_LOGOUT, null, headers).then((res) => {
        
        dispatch({
            type: LOGIN.CLEAR
        });

    }).catch((err) => {
        
    });
};

/**
 * 获取本地保存的用户名和密码
 */
const getLocalLoginParams = async () => {
    return {
        userName: "18775134221",
        password: "123456"
    }
};

export default {
    doLogin,
    loginOut,
    getLocalLoginParams
}