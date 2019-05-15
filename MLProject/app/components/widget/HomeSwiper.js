import React, {Component} from 'react'
import {
    View, 
    StyleSheet,
    Image,
    StatusBar,
    Dimensions
} from 'react-native'
import Swiper from 'react-native-swiper'

/**
 * 首页的轮播广告 宽高比 3:1
 */
export default class HomeSwiper extends Component {
    render () {
        return (
          <View style={styles.container}>
            <Swiper style={styles.wrapper}
              dot={<View style={{backgroundColor: 'rgba(255,255,255,.3)', width: 13, height: 13, borderRadius: 7, marginLeft: 7, marginRight: 7}} />}
              activeDot={<View style={{backgroundColor: '#fff', width: 13, height: 13, borderRadius: 7, marginLeft: 7, marginRight: 7}} />}
              paginationStyle={{
                bottom: 70
              }}
              loop={false}>
              <View style={styles.slide}>
                <Image
                  style={styles.image}
                  source={require('./img/1.jpg')}
                  resizeMode='cover'
                />
              </View>
              <View style={styles.slide}>
                <Image
                  style={styles.image}
                  source={require('./img/2.jpg')}
                  resizeMode='cover'
                />
              </View>
              <View style={styles.slide}>
                <Image style={styles.image} source={require('./img/3.jpg')} />
              </View>
            </Swiper>
          </View>
        )
      }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: 120
    },
    wrapper: {
        flex: 1,
    },
    slide: {
      flex: 1,
      backgroundColor: 'transparent'
    },
    image: {
        flex: 1
    }
  })