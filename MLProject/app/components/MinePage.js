import React, {Component} from 'react'
import {
    Text,
    View,
    StatusBar,
    SafeAreaView,
    ScrollView
} from 'react-native'

import styles from '../styles';
import * as Constant from '../styles/constant';

import MineHeaderView from './widget/MineHeaderView';
import MineItemCell from './widget/MineItemCell';

/**
 *  电商服务中心
 */
export default class MinePage extends Component {

    render() {
        return (
            <View style={styles.mainBox}> 
                <StatusBar hidden={false} backgroundColor={Constant.primaryColor} translucent
                            barStyle={'light-content'}/>
                <SafeAreaView style={{flex: 1}}>
                    <ScrollView >
                        <MineHeaderView/>
                        <MineItemCell name={'功能'}/>
                    </ScrollView>
                </SafeAreaView>
            </View>
        );
    }
}