import React, {Component} from 'react'
import {
    View,
    StyleSheet,
    Image,
    Text
} from 'react-native'

import PropTypes from 'prop-types';

const propTypes = {
    name: PropTypes.string,
    iconName: PropTypes.string,
};

export default class MineItemCell extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.content}>
                    <View style={styles.leftContent}>
                        <Image 
                            source={require('../../imgs/default_img.png')}                            
                            resizeMode={"contain"}
                            style={styles.icon}/>
                        <Text style={styles.leftText}>{this.props.name}</Text>
                    </View>
                    <Image 
                        source={require('../../imgs/default_img.png')}                            
                        resizeMode={"contain"}
                        style={styles.backIcon}/>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: 44,
        backgroundColor: '#4caf50',
    },
    content: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row'
    },
    leftContent: {
        alignItems: 'center',
        flexDirection: 'row',
        marginLeft: 12
    },
    leftText: {
        color: '#ffffff',
        marginLeft: 5
    },
    icon: {
        width: 30,
        height: 30,
        borderRadius: 30,
        overflow: 'hidden',
    },
    backIcon: {
        width: 30,
        height: 30,
        marginRight: 12
    }
})