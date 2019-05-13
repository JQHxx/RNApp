import React, {Component} from 'react'
import {
    View,
    StyleSheet,
    Image,
    Text
} from 'react-native'

import PropTypes from 'prop-types';


const defaultProps = {
    userName: '',

}

const propTypes = {
    userName: PropTypes.string,
};

export default class MineHeaderView extends Component {

    constructor(props) {
        super(props)
    }

    render() {

        let {userName} = this.props;
        return (
            <View style={styles.container}>
                <View style={styles.content}>
                    <Image 
                        source={require('../../imgs/default_img.png')}                            
                        resizeMode={"contain"}
                        style={styles.headImg}/>
                    <Text>{userName}</Text>
                </View>
            </View>
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