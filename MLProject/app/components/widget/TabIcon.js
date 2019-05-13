import React, {
    Component,
} from 'react';
import PropTypes from 'prop-types';
import {
    Text,
    Image,
    View,
    StyleSheet,
    TouchableOpacity,
    Dimensions,
} from 'react-native';

import * as Constant from '../../styles/constant'
import styles from '../../styles'

const config = {
    ["tabRecommended"]: 'activity',
    ["tabDynamic"]: 'aperture',
    ["tabMy"]: 'users',
};

const propTypes = {
    focused: PropTypes.bool,
    tabIconName: PropTypes.string,
};

/**
 * 底部Tab
 */
class TabIcon extends Component {

    constructor(props) {
        super(props)
    }

    render() {

        // this.props.focused 区分是否是选中状态
        let color = this.props.focused ? Constant.tabSelectedColor : Constant.tabUnSelectColor;

        if (this.props.focused) {
            return (
                <View style={styles.centered}>
                    <Image 
                        source={require('../../imgs/default_img.png')}                            
                        resizeMode={"contain"}
                        style={{width: Constant.tabIconSize, height: Constant.tabIconSize}}/>
                </View>
            );
        } else {
            return (
                <View style={styles.centered}>
                    <Image 
                        source={require('../../imgs/default_img.png')}                            
                        resizeMode={"contain"}
                        style={{width: Constant.tabIconSize, height: Constant.tabIconSize}}/>
                </View>
            );
        }
    }
}

TabIcon.propTypes = propTypes;

export default TabIcon;