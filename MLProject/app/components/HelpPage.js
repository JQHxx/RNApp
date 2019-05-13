import React, {Component} from 'react'
import {StyleSheet} from 'react-native';
// react-native-webview
import HTMLView from 'react-native-htmlview';

/**
 * 帮助
 */
export default class HelpPage extends Component {

    render() {

        let {url} = this.props.navigation.state.params;

        return (
            <HTMLView value={url}></HTMLView>
        );
    }

}