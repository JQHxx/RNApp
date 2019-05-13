import React, {Component} from 'react'
import {StyleSheet, SafeAreaView, View, StatusBar} from 'react-native';
// react-native-webview
import HTMLView from 'react-native-htmlview';
// <HTMLView value={url}></HTMLView>
import {WebView} from 'react-native-webview'
import NavigationBar from './widget/NavigationBar'
import ViewUtils from '../utils/ViewUtils'
import NavigationUtil from '../navigator/NavigationUtil'

/**
 * 帮助
 */
export default class HelpPage extends Component {

    render() {

        // 获取传入的参数
        let {url} = this.props.navigation.state.params;
        return (

            <SafeAreaView style={styles.container}>
                <NavigationBar title={'使用帮助'} leftButton={ViewUtils.getLeftButton('default_img.png', () => {
                    NavigationUtil.goBack(this.props.navigation)
                })}/>
                <WebView source={{ uri: url }} />
            </SafeAreaView>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});