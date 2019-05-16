import React, {Component} from 'react';
import {
  StyleSheet, 
  Text, 
  View,
  Modal,
  TouchableOpacity,
  Dimensions  
} from 'react-native';

import PropType from 'prop-types';

let { width, height } = Dimensions.get('window');

// 只要为了解决可以遮盖顶部、顶部导航的问题
export default class SystemAlert extends Component {
    //定义静态的属性，通过 this.props.alertTitle传值。
    static propTypes = {
        alertTitle: PropType.string,
        alertContent: PropType.string,
        cancel: PropType.string,
        ok: PropType.string
    }

    constructor(props) { 
        super(props);
        this.state = ({
            isShow: false,
            animationType: 'fade', //none slide fade
            modalVisible: false, //模态场景是否可见
            transparent: true, //是否透明显示

        })
    }
  render() { 
      if (!this.state.isShow) {
          return null;
      } else {
          return (
              <Modal
                animationType={this.state.animationType}
                transparent={this.state.transparent}
                visible={this.state.isShow}
                onRequestClose={() => {
                    
                }}
              >
                  <View style={styles.container}>
                      
                      {
                          this.renderAlertView()
                      }
                
                  </View>
              </Modal>
          );
      }
  }
    

    //绘制 alert
    renderAlertView() { 
        return (
            <View style={styles.alertView}>

                <View style={styles.titleContainer}>
                    <Text style={styles.title}>{this.props.alertTitle}</Text>
                </View>

                <View style={styles.contentContainer}>
                    <Text style={styles.content} numberOfLines={2}>{this.props.alertContent}</Text>
                </View>

                <View style={styles.lineH} />
                
                <View style={styles.btnContainer}>
                    <TouchableOpacity
                        style = {styles.btnStyle}
                        onPress={() => {
                            this.dissmissDialog(0);
                            this.dissmissDialog();
                            this.props.comformClik ? this.props.comformClik() : null
                        }}
                    >
                        <Text style={styles.btnText}>{this.props.ok}</Text>
                    </TouchableOpacity>

                <View style={styles.lineV}/>

                    <TouchableOpacity
                        style = {styles.btnStyle}
                        onPress={() => {
                            this.dissmissDialog(0);
                            this.dissmissDialog();
                            this.props.cancelClick ? this.props.cancelClick() : null
                        }}
                    >
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

    //消失弹窗，最好delay0.3秒
    dissmissDialog = (delay) => {
        let duration = delay;
        this.timer = setTimeout(() => {
            this.setState({
                isShow: false,
            });
            this.timer && clearTimeout(this.timer);
        }, duration * 1000);
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
        marginTop: 15,
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