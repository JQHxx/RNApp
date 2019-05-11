/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Provider} from 'react-redux'
import store from './app/store'
import AppNavigator from './app/navigator/AppNavigator';

export default class App extends Component<{}> {

  constructor() {
    super();

    this.state = {
      store: store
    }
  }

  render() {
    return (
      <Provider store={this.state.store}>
        <AppNavigator/>
      </Provider>
    );
  }
}
