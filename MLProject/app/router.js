import React, {Component} from 'react';
import {
    Scene,
    Router,
    Lightbox, Drawer
} from 'react-native-router-flux';
import styles from './styles'
import * as Constant from './styles/constant'

import WelcomePage from './components/WelcomePage';
import HomePage from './components/HomePage';
import LoginPage from './components/LoginPage'

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

                <Scene key="LoginPage" component={LoginPage} showLabel={false} hideTabBar/>

                <Scene key="root"
                       navigationBarStyle={styles.navigationBar}
                       titleStyle={{color: Constant.titleTextColor}} >
                    <Scene key="HomePage" component={HomePage} />
                </Scene>


            </Lightbox>
        
        </Router>
    );
 };

 export default getRouter;