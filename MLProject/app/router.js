import React, {Component} from 'react';
import {
    Scene,
    Router,
    Lightbox, 
    Drawer,
    Tabs
} from 'react-native-router-flux';

import styles from './styles';
import * as Constant from './styles/constant';

import TabIcon from './components/widget/TabIcon'

import WelcomePage from './components/WelcomePage';
import HomePage from './components/HomePage';
import LoginPage from './components/LoginPage';
import MessageListPage from './components/MessageListPage';
import MinePage from './components/MinePage';
import ServiceCenterPage from './components/ServiceCenterPage';

/**
 * 全局路由
 */

 const getRouter = () => {
    return (
        <Router
            getSceneStyle={() => {
                return styles.routerStyle
            }}
        >
        
            <Lightbox>
                <Scene key="main">
                    <Scene key="WelcomePage" component={WelcomePage} hideNavBar hideTabBar hide/>
                </Scene>

                <Scene key="LoginPage" component={LoginPage}  showLabel={false} hideTabBar/>

                <Scene key="root"
                       navigationBarStyle={styles.navigationBar}
                       titleStyle={{color: Constant.titleTextColor}} >

                    <Scene key="mainTabPage"                     
                           tabs
                           lazy
                           wrap={false}
                           showLabel={false}
                           tabBarPosition={"bottom"}
                           title={'appName'}
                           hideNavBar
                           tabBarStyle={{
                               height: Constant.tabBarHeight,
                               alignItems: 'center',
                               justifyContent: 'center',
                               backgroundColor: Constant.tabBackgroundColor
                           }}>
                        <Scene 
                            key="MessageListPage" 
                            component={MessageListPage} 
                            icon={TabIcon}
                            title={'消息'}
                            tabIconName={'tabDynamic'}
                        />
                        <Scene 
                            key="HomePage" 
                            component={HomePage} 
                            icon={TabIcon}
                            title={'首页'}
                            tabIconName={'tabDynamic'} 
                            initial={true}
                        />
                        <Scene 
                            key="MinePage" 
                            component={MinePage} 
                            icon={TabIcon}
                            title={'我的'}
                            tabIconName={'tabDynamic'}
                        />
                    </Scene>

                </Scene>

                <Scene key="ServiceCenterPage" component={ServiceCenterPage} />

            </Lightbox>
        
        </Router>
    );
 };

 export default getRouter;