

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import HttpUtil from '../net/HttpUtil';



/**
 * 欢迎页
 */
export default class  WelcomePage extends React.Component {

    componentDidMount() {
        _testNetwork();
    }

    render() {
        return (
          <View style={styles.container}>
            <Text style={styles.welcome}>Welcome to React Native!</Text>
            <Text style={styles.instructions}>To get started, edit App.js</Text>
            <Text style={styles.instructions}>{instructions}</Text>
          </View>
        );
      }

      _testNetwork() {
        let params = new FormData()
        params.append("name", "");

        HttpUtil.get(API_baseURL, params, null).then((result) => {
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
    instructions: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: 5,
    },
  });
  