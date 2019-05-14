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

import NavigationUtil from '../navigator/NavigationUtil'
import SafeAreaViewPlus from './widget/SafeAreaViewPlus'

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
            <View style={styles.mainBox}>
                <StatusBar hidden={false} backgroundColor={Constant.primaryColor} translucent
                        barStyle={'light-content'}/>
                <ScrollView >
                    <MineHeaderView userName={'用户名'}/>
                    <MineItemCell name={'我的物流'} onClickFun={this._itemClick} lineHeight={0.5} lineBackgroundColor={'#dddddd'}/>
                    <MineItemCell name={'我的账户'} onClickFun={this._itemClick} lineHeight={0.5} lineBackgroundColor={'#dddddd'}/>
                    <MineItemCell name={'我的加盟'} onClickFun={this._itemClick} />
                    <View style={{height: 10, backgroundColor: '#dddddd'}}/>
                    <MineItemCell name={'商城中心'} onClickFun={this._itemClick} lineHeight={0.5} lineBackgroundColor={'#dddddd'}/>
                    <MineItemCell name={'分销商中心'} onClickFun={this._itemClick} lineHeight={0.5} lineBackgroundColor={'#dddddd'}/>
                    <MineItemCell name={'清除缓存'} onClickFun={this._itemClick} lineHeight={0.5} lineBackgroundColor={'#dddddd'}/>
                    <MineItemCell name={'使用帮助'} onClickFun={this._itemClick} />
                    <View style={{height: 10, backgroundColor: '#dddddd'}}/>
                    <MineItemCell name={'设置'} onClickFun={this._itemClick} />
    
                </ScrollView>
            </View>
        );
    }

    _itemClick(name) {
        // alert(name);
        switch (name) {
            case '使用帮助':
                NavigationUtil.goPage({url: 'https://www.baidu.com'}, 'Help')
            break
            case '我的物流':
                NavigationUtil.goPage({}, 'Login')
            break
            default: break
        }
    }
}