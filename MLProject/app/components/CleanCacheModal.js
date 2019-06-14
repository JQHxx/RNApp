import React, {Component} from 'react'
import {
    View,
    StyleSheet,
    Text,
    Button
} from 'react-native'

import ModalBox from 'react-native-modalbox'
import NavigationUtil from '../navigator/NavigationUtil'


export default class CleanCacheModal extends Component {

    constructor(props) {
        super(props)
        this.state = {
            isDisabled: false
        }
    }

    render() {
        return (
            <ModalBox
                isOpen={true}
                ref={'modal'}
                position={"center"}
                style={styles.container}
                animationDuration={0}
                swipeToClose={false}
                isDisabled={false}
                onClosed={() => {
                    NavigationUtil.goBack(this.props.navigation)
                }}
                onOpened={() => {
                    
                }}
                >
                <View style={{backgroundColor: 'transparent'}}>
                    <Text>1223333</Text>
                </View>
            </ModalBox>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        zIndex: 99999999,
    },
})