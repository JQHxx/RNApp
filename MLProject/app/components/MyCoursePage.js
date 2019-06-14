import React, {Component} from 'react'
import {
    Text,
    StyleSheet,
    StatusBar,
    TouchableOpacity,
    ScrollView,
    Button

} from 'react-native'

import SafeAreaViewPlus from './widget/SafeAreaViewPlus'
import NavigationBar from './widget/NavigationBar'
import NavigationUtil from '../navigator/NavigationUtil'
import ViewUtils from '../utils/ViewUtils'

import CustomTab from '../components/common/CustomTab'

import styles from '../styles'
import * as Constant from '../styles/constant'

import ScrollableTabView, { DefaultTabBar, } from 'react-native-scrollable-tab-view';

var Dimensions = require('Dimensions');
var ScreenWidth = Dimensions.get('window').width;


/**
 * 我的课程
 */
export default class MyCoursePage extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <SafeAreaViewPlus 
            style={styles.mainBox}
            topColor={Constant.primaryColor}>
                <StatusBar hidden={false} backgroundColor={Constant.primaryColor} translucent
                        barStyle={'light-content'}/>
                <NavigationBar
                    title={'我的课程'}
                    style={{backgroundColor: Constant.primaryColor}}
                    leftButton={ViewUtils.getLeftButton('default_img.png', () => {
                        NavigationUtil.goBack(this.props.navigation)
                    })}/>
                <ScrollableTabView
                    style={styles.container}
                    renderTabBar={() => <CustomTab />}
                    tabBarBackgroundColor='#fff'
					tabBarActiveTextColor='#5ebfff'
					tabBarInactiveTextColor='#333'
					tabBarUnderlineStyle={style.lineStyle}>
    
                    <ScrollView tabLabel='我购买的课程'>
                        <Text>我购买的课程</Text>
                    </ScrollView>

                    <ScrollView tabLabel='我的课程收益'>
                        <Text>我的课程收益</Text>
                    </ScrollView>

                </ScrollableTabView>

            </SafeAreaViewPlus>
            
        );
    }

}

/** 如果是 DefaultTabBar  CustomTab: 为自定义，自定义文字长度
width:ScreenWidth/2 - 60,
marginLeft: 30,
marginRight: 30,
 */

const style = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 0
    },
    lineStyle: {
        height: 2,
        backgroundColor: '#5ebfff',
    },
    textStyle: {
        flex: 1,
        fontSize:20,
        marginTop:20,
        textAlign:'center',
    },

});
