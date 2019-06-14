import React, {Component} from 'react'
import {
    Text,
    StyleSheet,
    StatusBar,
    TouchableOpacity

} from 'react-native'

import SafeAreaViewPlus from './widget/SafeAreaViewPlus'
import NavigationBar from './widget/NavigationBar'
import NavigationUtil from '../navigator/NavigationUtil'
import ViewUtils from '../utils/ViewUtils'

import styles from '../styles'
import * as Constant from '../styles/constant'

import SystemAlert from '../components/common/CommonAlert'

/**
 * 设置页面
 */

export default class SettingPage extends Component {

    constructor(props) {
        super(props)
        this._logoutAction = this._logoutAction.bind(this);
    }

    _renderAndroidAlert() {
        return(
          <SystemAlert
            ref='alert'
            ok={'确定'}
            cancel={'取消'}
            alertTitle={'提示'}
            alertContent={'是否退出登录？'}
            confirmClik={() => {

            }}/>
        );
    
      }

    render() {
        return (
            <SafeAreaViewPlus 
            style={styles.mainBox}
            topColor={Constant.primaryColor}
            >
                <StatusBar hidden={false} backgroundColor={Constant.primaryColor} translucent
                        barStyle={'light-content'}/>
                <NavigationBar
                    title={'设置'}
                    style={{backgroundColor: Constant.primaryColor}}
                    leftButton={ViewUtils.getLeftButton('default_img.png', () => {
                        NavigationUtil.goBack(this.props.navigation)
                    })}
                />
                <TouchableOpacity 
                style={{height: 50, marginTop: 30, marginLeft: 15, marginRight: 15,backgroundColor: Constant.primaryColor, alignItems: 'center', justifyContent: 'center', borderRadius:25}}
                activeOpacity={0.8}
                onPress={this._logoutAction}>
                    <Text style={{color:'#ffffff'}}>{'注销'}</Text>
                </TouchableOpacity>
                {this._renderAndroidAlert()}
            </SafeAreaViewPlus>
            
        );
    }

    _logoutAction() {
        this.refs.alert && this.refs.alert.showDialog();
    }
}