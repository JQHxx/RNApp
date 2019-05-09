import React, {Component} from 'react';
import {
    View, 
    Text, 
    Keyboard,
    TouchableHighlight,
    StatusBar,
    StyleSheet
} from 'react-native';

import * as Constant from '../styles/constant';

import {Actions} from 'react-native-router-flux';

import loginActions from '../store/actions/login'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

/**
 * 登录
 */

class LoginPage extends Component {

    componentDidMount() {
        this.onOpen();
    }

    constructor(props) {
        super(props);

        // 方法绑定
        this.doLogin = this.doLogin.bind(this);
        this.onOpen = this.onOpen.bind(this);

        this.params = {
            userName: '',
            password: ''
        };

        // 用于绑定到控件上
        this.state = {
            saveUserName: '',
            savePassword: '',
            secureTextEntry: true
        }
    }

     render() {
         return (
            <View style={styles.container}>
                <StatusBar hidden={false} backgroundColor={Constant.primaryColor} translucent
                           barStyle={'light-content'}/>
                <TouchableHighlight 
                onPress={this.doLogin}>
                    <Text style={styles.welcome}>LoginPage</Text>
                </TouchableHighlight>
                
            </View>
    
         );
     }

     /**
      * 从本地获取用户名和密码
      */
     onOpen() {
        loginActions.getLocalLoginParams().then((res)=> {
            this.setState({
                saveUserName: res.userName,
                savePassword: res.password
            })
            this.params.userName = res.userName;
            this.params.password = res.password;
        });
     }

     /**
      * 登录
      */
     doLogin () {
        let {login} = this.props;
        if (!this.params.userName || this.params.userName.length === 0) {
            return
        }
        if (!this.params.password || this.params.password.length === 0) {
            return
        }
        this.setState({
            saveUserName: this.params.userName,
            savePassword: this.params.password
        });
        // 缩下键盘
        Keyboard.dismiss();

        const params = new FormData();
        params.append('account', this.params.userName);
        params.append('password', this.params.password);

        login.doLogin(params, (res) => {
            if (!res) {
                Actions.reset("root");
            } else {
                Actions.reset("root");
            }
        })

     }
 };

 const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
    },
  });


 export default connect(state => ({state}), dispatch => ({
    login: bindActionCreators(loginActions, dispatch)
})
)(LoginPage)