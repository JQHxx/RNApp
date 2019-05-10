import React, {Component} from 'react'
import {
    View,
    StyleSheet,
    Image,
    Text,
    TouchableOpacity
} from 'react-native'

import PropTypes from 'prop-types';


const defaultProps = {
    name: ''
}

const propTypes = {
    name: PropTypes.string,
    iconName: PropTypes.string,
    onClickFun: PropTypes.func
};

export default class MineItemCell extends Component {

    constructor(props) {
        super(props)
    }

    render() {

        let {onClickFun, name} = this.props;

        return (
            <View style={styles.container}>
                <TouchableOpacity
                onPress={() => {
                    onClickFun && onClickFun(name)
                }}
                style={styles.content}>
                    <View style={styles.leftContent}>
                        <Image 
                            source={require('../../imgs/default_img.png')}                            
                            resizeMode={"contain"}
                            style={styles.icon}/>
                        <Text style={styles.leftText}>{name}</Text>
                    </View>
                    <Image 
                        source={require('../../imgs/default_img.png')}                            
                        resizeMode={"contain"}
                        style={styles.backIcon}/>
                </TouchableOpacity>
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