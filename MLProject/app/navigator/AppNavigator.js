
import React, { Component } from 'react'
import {
    createStackNavigator,
    createAppContainer,
    createSwitchNavigator
  } from 'react-navigation';

import LoginPage from '../components/LoginPage'
import ServiceCenterPage from '../components/ServiceCenterPage'
import WelcomePage from '../components/WelcomePage';
import MainPage from '../components/MainPage';


const InitNavigator = createStackNavigator({
    WelcomePage: {
      screen: WelcomePage,
      navigationOptions: {
        header: null
      }
    }
  });
  
  const MainNavigator = createStackNavigator({
    Main: {
      screen: MainPage,
      navigationOptions: {
        header: null
      }
    },
    ServiceCenter: {
      screen: ServiceCenterPage
    },
    Login: {
      screen: LoginPage
    }
  });

  // react-navigation-redux-helpers 3.0 适配https://coding.imooc.com/learn/questiondetail/102354.html
  // https://github.com/react-navigation/redux-helpers

  export const RootNavigator = createSwitchNavigator({
    Init: InitNavigator,
    Main: MainNavigator
  });
  

/*
  const AppWithNavigationState = createReduxContainer(RootNavigator, 'root');

  export const middleware = createReactNavigationReduxMiddleware(
    state => state.nav,
    'root'
  );
  
  
  const mapStateToProps = (state) => ({
    state: state.nav, // nav -> state
  });
  
  export default connect(mapStateToProps)(AppWithNavigationState);
  */

 export default APPContainer =  createAppContainer(RootNavigator);

/*
  class APP extends Component {
    render() {
      return (
        <APPContainer/>
      );
    }
  }

  export default APP
  */

  


 