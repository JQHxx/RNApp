

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableHighlight} from 'react-native';
import HttpUtil from '../net/HttpUtil';
import * as API from '../net/API'


/**
 * 欢迎页
 */
export default class  WelcomePage extends React.Component {

    componentDidMount() {
        // this._testNetwork();
    }

    render() {
        return (
          <View style={styles.container}>
            <TouchableHighlight onPress={() => () => this.props.navigation.navigate('Details')}>
              <Text style={styles.welcome}>Welcome!</Text>
            </TouchableHighlight>
            
          </View>
        );
      }

      _testNetwork() {
        let params = new FormData()
        params.append("name", "");

        HttpUtil.get(API.BASE_URL, params, null).then((result) => {
            Console.log(result);
        }).catch((err) => {
            Console.log(err);
        });
      }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
    },
  });
  