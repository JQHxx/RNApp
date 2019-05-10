import {combineReducers} from 'redux';
import login from "./login";
import home from "./home";
import serviceCenter from './serviceCenter'

export default combineReducers({
    login: login,
    home: home,
    serviceCenter: serviceCenter
});