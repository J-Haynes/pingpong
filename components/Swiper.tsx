import React, { Component } from 'react'
import { StyleSheet, View, Image, Dimensions } from 'react-native'
import Swiper from 'react-native-swiper/src'

const { width } = Dimensions.get('window')

export default function ImageSwipe() {
  return (
    <View style={styles.swipecontainer}>
      <Swiper style={styles.wrapper} showsButtons loop={false}>
        <View style={styles.slide}>
          <Image
            style={styles.image}
            source={require('../assets/activities/beer.png')}
          />
        </View>
        <View style={styles.slide}>
          <Image
            style={styles.image}
            source={require('../assets/activities/coffee.png')}
          />
        </View>
        <View style={styles.slide}>
          <Image
            style={styles.image}
            source={require('../assets/activities/talk.png')}
          />
        </View>
        <View style={styles.slide}>
          <Image
            style={styles.image}
            source={require('../assets/activities/walk.png')}
          />
        </View>
      </Swiper>
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {},
  swipecontainer: {
    flex: 1,
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width,
    flex: 1,
  },
})
