import React, {Component} from 'react'
import {StyleSheet, SafeAreaView, View, StatusBar} from 'react-native';
// react-native-webview
import HTMLView from 'react-native-htmlview';
// <HTMLView value={url}></HTMLView>

import * as Constant from '../styles/constant';

import {WebView} from 'react-native-webview'
import NavigationBar from './widget/NavigationBar'
import ViewUtils from '../utils/ViewUtils'
import NavigationUtil from '../navigator/NavigationUtil'
import SafeAreaViewPlus from './widget/SafeAreaViewPlus'

/**
 * 帮助
 */
type Props = {};
export default class HelpPage extends Component<Props> {

    render() {

        // 获取传入的参数
        let {url} = this.props.navigation.state.params;
        return (

            <SafeAreaViewPlus 
                style={styles.container}
                topColor={Constant.primaryColor}>
                <StatusBar hidden={false} backgroundColor={Constant.primaryColor} translucent
                        barStyle={'light-content'}/>
                <NavigationBar
                    title={'使用帮助'}
                    style={{backgroundColor: Constant.primaryColor}}
                    leftButton={ViewUtils.getLeftButton('default_img.png', () => {
                        NavigationUtil.goBack(this.props.navigation)
                    })}
                />
                <WebView source={{ uri: url }} />
            </SafeAreaViewPlus>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});