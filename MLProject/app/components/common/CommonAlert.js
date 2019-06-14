import React, {Component} from 'react';
import {
  StyleSheet, 
  Text, 
  View,
  TouchableOpacity,
  Dimensions  
} from 'react-native';

import PropTypes from 'prop-types';
import ModalBox from 'react-native-modalbox'

let { width, height } = Dimensions.get('window');

export default class CommonAlert extends Component {
    //定义静态的属性，通过 this.props.alertTitle传值。
    static propTypes = {
        alertTitle: PropTypes.string,
        alertContent: PropTypes.string,
        cancel: PropTypes.string,
        ok: PropTypes.string,
        confirmClik: PropTypes.func,
        cancelClick: PropTypes.func
    }

    constructor(props) { 
        super(props);
        this.hideAlertView = this.hideAlertView.bind(this)
        this.state = ({
            isShow: false,
            modalVisible: false, //模态场景是否可见
        })
    }
  render() { 
      if (!this.state.isShow) {
          return null;
      } else {
          return (
              <ModalBox
                ref={'modal'}
                animationDuration={0}
                isOpen={this.state.isShow}
                swipeToClose={false}
                style={{backgroundColor:'transparent'}}>
                  <View style={styles.container}>
                      { this.renderAlertView()}
                  </View>
              </ModalBox>
          );
      }
  }
    

    //绘制 alert
    renderAlertView() { 
        return (
            <View style={styles.alertView}>

                {/* 标题 */}
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>{this.props.alertTitle}</Text>
                </View>

                {/* 提示文字 */}
                <View style={styles.contentContainer}>
                    <Text style={styles.content} numberOfLines={2}>{this.props.alertContent}</Text>
                </View>

                {/* 分割线 */}
                <View style={styles.lineH} />
                
                {/* 按钮 */}
                <View style={styles.btnContainer}>
                    <TouchableOpacity
                        style = {styles.btnStyle}
                        onPress={() => {
                            this.hideAlertView()
                            this.props.comformClik ? this.props.confirmClik() : null
                        }}
                    >
                        <Text style={styles.btnText}>{this.props.ok}</Text>
                    </TouchableOpacity>

                {/* 竖线 */}
                <View style={styles.lineV}/>

                    <TouchableOpacity
                        style = {styles.btnStyle}
                        onPress={() => {
                            this.hideAlertView()
                            this.props.cancelClick ? this.props.cancelClick() : null
                        }}>
                        <Text style={styles.btnText2}>{this.props.cancel}</Text>
                    </TouchableOpacity>
                </View>
              
            </View>
        );
    }

    //隐藏
    hideAlertView() {
        this.setState({
            isShow: false,
        });
    }

    //显示
    showDialog() {
        this.setState({
            isShow: true,
        })
    }
            
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        position: 'absolute',
        justifyContent: 'center',
        backgroundColor: 'rgba(52,52,52,0.5)',
    },
    bgMongo: {
        height: height,
        width: width,
        position: 'absolute',
        backgroundColor: 'transparent'
    },
    alertView: {
        backgroundColor: 'white',
        borderRadius: 10,
        borderWidth: 1,
        height: 145,
        marginLeft: 50,
        marginRight: 50,
        borderColor: 'lightgrey',
              
    },
    titleContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:15,
        marginLeft: 15,
        marginRight: 15,
        height: 30
    },
    title: {
        fontSize: 18,
        fontWeight:'bold'
    },
    contentContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 50
        
    },

    content: {
        justifyContent: 'center',
        marginLeft: 20,
        marginRight: 20,
        fontSize: 14
    },

    lineH: {
        height: 0.5,
        backgroundColor:'lightgrey'
    },
    btnContainer: {
        flexDirection:'row',
        height: 48,
        width:width-100
    },
    lineV: {
        height: 50,
        backgroundColor: 'lightgrey',
        width:0.5
    },
    btnStyle: {
        flex: 1,
        height: 47,
        justifyContent: 'center',
        alignItems:'center'
    },

    btnText: {
        fontSize: 16,
        color: '#157efb',
        fontWeight: '700'
    },

    btnText2: {
        fontSize: 16,
        color: '#157efb',
    },
});