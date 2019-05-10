/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {View} from 'react-native';
import getRouter from './app/router';
import {Provider} from 'react-redux'
import store from './app/store'

export default class App extends Component<{}> {

  constructor() {
    super();
    this.state = {
        store: store,
        show: true
    };
  }

  render() {
    if (!this.state.show) {
      return <View/>
    }
    return (
      <Provider store={this.state.store}>
        {getRouter()}
      </Provider>
    );
  }
}
