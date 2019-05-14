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
    userName: '',

}

const propTypes = {
    userName: PropTypes.string,
    onClickFun: PropTypes.func
};

export default class MineHeaderView extends Component {

    constructor(props) {
        super(props)
    }

    render() {

        let {userName, onClickFun} = this.props;
        return (
            <TouchableOpacity 
                style={styles.container}
                onPress={() => {
                    onClickFun && onClickFun()
                }}>
                <View style={styles.content}>
                    <Image 
                        source={require('../../imgs/default_img.png')}                            
                        resizeMode={"contain"}
                        style={styles.headImg}/>
                    <Text>{userName}</Text>
                </View>
            </TouchableOpacity>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: 180,
        backgroundColor: '#f3f3f4'
        
    },
    content: {
        flex: 1,
        alignItems: "center",
        justifyContent: 'center',
        flexDirection: 'column'
    },
    headImg: {
        width: 60,
        height: 60,
        borderRadius: 30,
        overflow: 'hidden',
        marginBottom: 5
    }
})