import React  from 'react';
import {
    TouchableHighlight,
    Image,
    TouchableOpacity,
    StyleSheet,
    Text,
    View,
} from 'react-native';

export default class ViewUtils {

    /**
     * 返回按钮
     * @param {*} callBack 
     */
    static getLeftButton(icon, callBack) {

        return <TouchableOpacity
            style={{padding:8}}
            onPress={callBack}>
            <Image
                style={{width: 26, height: 26,}}
                source={require('../imgs/default_img.png')}/>
        </TouchableOpacity>
    }
}