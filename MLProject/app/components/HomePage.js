
import React, {Component} from 'react'
import {
    Text,
    View,
    StatusBar,
    SafeAreaView
} from 'react-native'

import styles from '../styles'
import * as Constant from '../styles/constant'

import homeActions from '../store/actions/home'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import SafeAreaViewPlus from './widget/SafeAreaViewPlus'
import NavigationBar from './widget/NavigationBar'

class HomePage extends Component {

    componentDidMount() {
        this.loadListData();
    }

    constructor(props) {
        super(props);

        // 方法绑定
        this.loadListData = this.loadListData.bind(this);

        this.state = {
            json: ''
        }
    }

    render() {

        let {homeState} = this.props;
        let dataSource = homeState.homeModel;
        return (
            <SafeAreaViewPlus 
            style={styles.mainBox}
            topColor={Constant.primaryColor}
            >
                <StatusBar hidden={false} backgroundColor={Constant.primaryColor} translucent
                        barStyle={'light-content'}/>
                <NavigationBar
                    title={'首页'}
                    style={{backgroundColor: Constant.primaryColor}}
                />
                <Text>{JSON.stringify(dataSource)}</Text>
            </SafeAreaViewPlus>
        );
    }

    loadListData() {
        let {homeAction} = this.props;
        let params = new FormData();
        homeAction.homeList(params);
    }


}

export default connect(state => ({
    homeState: state.home
}), dispatch => ({
    homeAction: bindActionCreators(homeActions, dispatch)
})
)(HomePage)