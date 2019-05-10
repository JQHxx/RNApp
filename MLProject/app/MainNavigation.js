import React, { Component } from 'react'
 
import { 
    createStackNavigator, 
    createAppContainer 
} from 'react-navigation'

import WelcomPage from './components/WelcomePage'

const HomeStack = createStackNavigator({WelcomPage});
const AppContainer = createAppContainer(HomeStack); 
 
export default class MainNavigation extends Component {
    render() {
        return (
            <AppContainer/>
        )
    }
}
