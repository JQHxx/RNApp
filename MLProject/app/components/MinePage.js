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

    constructor(props) {
        super(props)
        this._itemClick = this._itemClick.bind(this);
    }

    render() {
        return (
            <SafeAreaView style={styles.mainBox}>
                <StatusBar hidden={false} backgroundColor={Constant.primaryColor} translucent
                        barStyle={'light-content'}/>
                <ScrollView >
                    <MineHeaderView/>
                    <MineItemCell name={'功能'} onClickFun={this._itemClick}/>
                    <MineItemCell name={'设置'} onClickFun={this._itemClick}/>
                </ScrollView>
            </SafeAreaView>
        );
    }

    _itemClick(name) {
        alert(name);
    }
}