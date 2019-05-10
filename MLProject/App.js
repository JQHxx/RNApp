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
import MainNavigation from './app/MainNavigation';
import MainBottomTab from './app/MainBottomTab'

export default class App extends Component<{}> {

  constructor() {
    super();
    this.state = {
        store: store
    };
  }

  render() {
    return (
      <Provider store={this.state.store}>
        <MainNavigation/>
      </Provider>
    );
  }
}
