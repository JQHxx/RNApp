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
    name: '',
    rightText: '',
    lineHeight: 0,
    lineBackgroundColor: 'white'

}

const propTypes = {
    name: PropTypes.string,
    rightText: PropTypes.string,
    iconName: PropTypes.string,
    lineHeight: PropTypes.number,
    lineBackgroundColor: PropTypes.string,
    onClickFun: PropTypes.func
};

export default class MineItemCell extends Component {

    constructor(props) {
        super(props)
    }

    render() {

        const {onClickFun, name, rightText, lineHeight, lineBackgroundColor} = this.props;

        return (
            <View style={styles.container}>
                <TouchableOpacity
                    onPress={() => {
                    onClickFun && onClickFun(name)
                }}
                style={[styles.content, {borderBottomColor: lineBackgroundColor}, {borderBottomWidth: lineHeight}]}>
                    <View style={styles.leftContent}>
                        <Image 
                            source={require('../../imgs/default_img.png')}                            
                            resizeMode={"contain"}
                            style={styles.icon}/>
                        <Text style={styles.leftText}>{name}</Text>
                    </View>
                    <View style={styles.rightContent}> 
                        <Text style={styles.rightText}>{rightText}</Text>
                        <Image 
                            source={require('../../imgs/default_img.png')}                            
                            resizeMode={"contain"}
                            style={styles.backIcon}/>
                    </View>
   
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: 44,
        backgroundColor: 'white',
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
        color: '#333333',
        marginLeft: 5
    },
    rightContent: {
        alignItems: 'center',
        flexDirection: 'row',
        marginLeft: 12
    },
    rightText: {
        color: '#333333',
        marginRight: 5
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