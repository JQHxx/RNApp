import React, {Component} from 'react'
import {
    Text,
    View,
    StatusBar,
    SafeAreaView,
    ScrollView,
    StyleSheet
} from 'react-native'

import styles from '../styles';
import * as Constant from '../styles/constant';

import MineHeaderView from './widget/MineHeaderView';
import MineItemCell from './widget/MineItemCell';

import NavigationUtil from '../navigator/NavigationUtil'
import SafeAreaViewPlus from './widget/SafeAreaViewPlus'

import ModalBox from 'react-native-modalbox'
import SystemAlert from '../components/common/SystemAlert'

import HocErrorCatch from './common/WrappedComponent'

/**
 *  电商服务中心
 */
type Props = {};
@HocErrorCatch
export default class MinePage extends Component<Props>  {

    constructor(props) {
        super(props)
        this._itemClick = this._itemClick.bind(this);
        this._renderAndroidAlert = this._renderAndroidAlert.bind(this);
        this.state = {
            isOpen: false
        }
    }

    _renderAndroidAlert() {
        return(
          <SystemAlert
            ref='alert'
            ok={'确定'}
            cancel={'取消'}
            alertTitle={'删除提示'}
            alertContent={'执行此操作后，将无法关注该联系人，请确认'}
            comformClik={() => {

            }}/>
        );
    
      }

    render() {
        return (
            <View style={styles.mainBox}>
                <StatusBar hidden={false} backgroundColor={Constant.primaryColor} translucent
                        barStyle={'light-content'}/>
                <ScrollView >
                    <MineHeaderView 
                        userName={'用户名'}
                        onClickFun={() => {
                            alert('头像点击')
                        }}/>
                    <MineItemCell 
                        name={'我的物流'} 
                        onClickFun={this._itemClick} 
                        lineHeight={0.5} 
                        lineBackgroundColor={'#dddddd'}/>
                    <MineItemCell 
                        name={'我的账户'} 
                        onClickFun={this._itemClick} 
                        lineHeight={0.5} 
                        lineBackgroundColor={'#dddddd'}/>
                    <MineItemCell 
                        name={'我的加盟'} 
                        onClickFun={this._itemClick} />

                    <View style={{height: 10, backgroundColor: '#dddddd'}}/>

                    <MineItemCell 
                        name={'商城中心'} 
                        onClickFun={this._itemClick} 
                        lineHeight={0.5} 
                        lineBackgroundColor={'#dddddd'}/>
                    <MineItemCell 
                        name={'分销商中心'} 
                        onClickFun={this._itemClick} 
                        lineHeight={0.5} 
                        lineBackgroundColor={'#dddddd'}/>
                    <MineItemCell 
                        name={'清除缓存'} 
                        onClickFun={this._itemClick} 
                        lineHeight={0.5} 
                        lineBackgroundColor={'#dddddd'} 
                        rightText={'0M'}/>
                    <MineItemCell 
                        name={'使用帮助'} 
                        onClickFun={this._itemClick} />

                    <View style={{height: 10, backgroundColor: '#dddddd'}}/>

                    <MineItemCell name={'设置'} onClickFun={this._itemClick} />
    
                </ScrollView>

                {this._renderAndroidAlert()}
                <ModalBox
                    isOpen={this.state.isOpen}
                    ref={'clean'}
                    position={"center"}
                    style={styleg.modelContainer}
                    >
                    <View style={{backgroundColor: 'white'}}>
                        <Text>1223333</Text>
                    </View>
                </ModalBox>
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
                /*
                this.setState({
                    isOpen: !this.state.isOpen
                })
                */
                // NavigationUtil.goPage({}, 'CleanCache')
                this.refs.alert && this.refs.alert.showDialog();
            break

            case '设置': 
                NavigationUtil.goPage({}, 'Setting')
            break
            default: break
        }
    }
}

const styleg = StyleSheet.create({
    modelContainer: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        backgroundColor: 'rgba(1, 1, 1, 0.5)',
        zIndex: 99999999,
    }
})