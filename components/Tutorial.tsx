import {
  Text,
  View,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from 'react-native'
import React from 'react'
import StyleSheet from '../styles/styles'

import { useState, useEffect } from 'react'
import * as Font from 'expo-font'

import Nav from './Nav'
import { Image } from 'react-native-svg'

export default function Tutorial({ navigation }: any) {
  const currentPage = 'Tutorial'

  return (
    <>
      <View style={StyleSheet.container}>
        <RegularText style={StyleSheet.headerText}>
          Welcome to{' '}
          <RegularText style={StyleSheet.blueText}>PingPong!</RegularText>
        </RegularText>
        <RegularText style={StyleSheet.tagline}>
          The app designed to kill your groupchat
        </RegularText>
        <RegularText style={StyleSheet.introText}>
          1 - add your friends on the friends page
        </RegularText>
        <RegularText style={StyleSheet.introText}>
          2 - select a emoji and location, click the ball to send a ping to your
          friends!
        </RegularText>
        <RegularText style={StyleSheet.introText}>
          3 - see your friends pings on the friends page
        </RegularText>
        <RegularText style={StyleSheet.introText}>4 - meet up irl</RegularText>
      </View>
      <View style={StyleSheet.navContainer}>
        <Nav navigation={navigation} currentPage={currentPage} />
      </View>
    </>
  )
}

const RegularText = (props: any) => {
  const [fontLoaded, setFontLoaded] = useState(false)

  useEffect(() => {
    async function loadFont() {
      await Font.loadAsync({
        'reg-font': require('../assets/fonts/BlueScreens/Regular.ttf'),
      })

      setFontLoaded(true)
    }

    loadFont()
  }, [])

  if (!fontLoaded) {
    return <Text>Loading...</Text>
  }

  return (
    <Text style={{ ...props.style, fontFamily: 'reg-font' }}>
      {props.children}
    </Text>
  )
}

const MediumText = (props: any) => {
  const [fontLoaded, setFontLoaded] = useState(false)

  useEffect(() => {
    async function loadFont() {
      await Font.loadAsync({
        'medium-font': require('../assets/fonts/BlueScreens/Medium-Italic.ttf'),
      })

      setFontLoaded(true)
    }

    loadFont()
  }, [])

  if (!fontLoaded) {
    return <Text>Loading...</Text>
  }
  return (
    <Text style={{ ...props.style, fontFamily: 'medium-font' }}>
      {props.children}
    </Text>
  )
}
