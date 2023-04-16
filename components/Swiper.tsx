import React, { Component } from 'react'
import { AppRegistry, StyleSheet, Text, View } from 'react-native'
import Swiper from 'react-native-swiper'

export default function Swiper() {
  return (
    <View>
      {/* <Swiper showsButtons={true}> */}
      <View>
        <Image
          style={styles.img}
          source={require('../assets/activities/beer.png')}
        />
      </View>
      <View>
        <Image
          style={styles.img}
          source={require('../assets/activities/coffee.png')}
        />
      </View>
      <View>
        <Image
          style={styles.img}
          source={require('../assets/activities/talk.png')}
        />
      </View>
      <View>
        <Image
          style={styles.img}
          source={require('../assets/activities/walk.png')}
        />
      </View>
      {/* </Swiper> */}
    </View>
  )
}

const styles = StyleSheet.create({
  img: {
    height: 150,
    width: 150,
  },
})
