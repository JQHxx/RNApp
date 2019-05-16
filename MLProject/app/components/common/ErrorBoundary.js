import React, {Component} from 'react'
import {
    View,
    Text
} from 'react-native'

/*
* 当做组件使用
* */

export default class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
        };
    }

    componentDidCatch(error, info) {
        this.setState({
            error
        });

        // 设置崩溃以后显示的UI
        // 上传错误日志
    }

    render() {

        if (this.state.error) { // 如果页面崩溃，则显示下面的UI
            return (
                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{color: 'red'}}>
                        {this.state.error && this.state.error.toString()}
                    </Text>

                </View>
            );
        }
        return this.props.children;
    }
}