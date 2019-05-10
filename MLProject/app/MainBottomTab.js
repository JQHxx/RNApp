import React, {Component} from 'react'
import { createAppContainer, createBottomTabNavigator } from 'react-navigation'

import TabIcon from './components/widget/TabIcon'

import MessageListPage from './components/MessageListPage'
import HomePage from './components/HomePage'
import MinePage from './components/MinePage'

const BottomTabNavigator = createBottomTabNavigator(
    {
        Message: {
            screen: MessageListPage,
            navigationOptions: {
                tabBarLabel: '消息',
                tabBarIcon:({focused}) => (
                    <TabIcon
                        focused={focused}
                        title={'消息'}
                    />
                )
            }
        },
        Home: {
            screen: HomePage,
            navigationOptions: {
                tabBarLabel: '首页',
                tabBarIcon:({focused}) => (
                    <TabIcon
                        focused={focused}
                        title={'c首页'}
                    />
                )
            }
        },
        Mine: {
            screen: MinePage,
            navigationOptions: {
                tabBarLabel: '我的',
                tabBarIcon:({focused}) => (
                    <TabIcon
                        focused={focused}
                        title={'我的'}
                    />
                )
            }
        },
    },
    {
        initialRouteName: 'Home',
        order: ['Message', 'Home', 'Mine'],
        tabBarOptions: {
            activeTintColor: 'white',
            activeBackgroundColor: 'white',
            inactiveTintColor: 'red',
            inactiveBackgroundColor: 'red',
            style: {
                backgroundColor: 'pink',
            },
            labelStyle: {
                paddingBottom: 5,
                fontSize: 14,
            }
        }
    }
)
const AppContainer = createAppContainer(BottomTabNavigator);

export default class MainBottomTab extends Component {
    render() {
        return (
            <AppContainer/>
        );
    }
}