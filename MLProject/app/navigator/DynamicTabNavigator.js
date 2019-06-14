
import React, {Component} from 'react'
import { 
    createAppContainer, 
    createBottomTabNavigator ,
    createStackNavigator
} from 'react-navigation'

import TabIcon from '../components/widget/TabIcon'

import MessageListPage from '../components/MessageListPage'
import HomePage from '../components/HomePage'
import MinePage from '../components/MinePage'

const MyTab = createBottomTabNavigator(
    {
        Message: {
            screen: MessageListPage,
            navigationOptions: {
                tabBarLabel: '消息',
                tabBarIcon:({focused}) => (
                    <TabIcon
                        focused={focused}
                        tabIconName={'消息'}
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
                        tabIconName={'首页'}
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
                        tabIconName={'我的'}
                    />
                )
            }
        },
    },
    {
        initialRouteName: 'Home',
        order: ['Message', 'Home', 'Mine'],
        tabBarOptions: {
            activeTintColor: '#333333',
            inactiveTintColor: '#cccccc',
            activeBackgroundColor: 'white',
            inactiveBackgroundColor: 'white',
            showLabel: true,
            showIcon: true,
            style: {
                backgroundColor: 'white',
            },
            labelStyle: {
                paddingBottom: 3,
                fontSize: 14,
            }
        }
    }
)

const RootContent = createAppContainer(MyTab);
 
class DynamicTabNavigator extends Component {
    render() {
        return (
            <RootContent/>
        )
    }
}
  
  export default DynamicTabNavigator