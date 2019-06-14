import React, {Component} from 'react'
import {
    View, 
    StyleSheet
} from 'react-native'

import HomeSwiper from './HomeSwiper'

export default class HomeHeaderView extends Component {

    render() {
        return (
            <View>
                <HomeSwiper/>

            </View>
        );
    }
}
