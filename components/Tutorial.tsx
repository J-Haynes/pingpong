import {
  Text,
  View,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from 'react-native'
import React from 'react'
import StyleSheet, {
  CondensedText,
  ItalicText,
  RegText,
} from '../styles/styles'

import { useState, useEffect } from 'react'
import * as Font from 'expo-font'

import Nav from './Nav'
import { Image } from 'react-native-svg'

export default function Tutorial({ navigation }: any) {
  const currentPage = 'Tutorial'

  return (
    <>
      <View style={StyleSheet.container}>
        <RegText style={StyleSheet.headerText}>
          Welcome to <RegText style={StyleSheet.blueText}>PingPong!</RegText>
        </RegText>
        <RegText style={StyleSheet.tagline}>
          The app designed to kill your groupchat
        </RegText>
        <RegText style={StyleSheet.buttonAddText}>
          1 - add your friends on the friends page
        </RegText>
        <RegText style={StyleSheet.buttonAddText}>
          2 - select a emoji and location, click the ball to send a ping to your
          friends!
        </RegText>
        <RegText style={StyleSheet.buttonAddText}>
          3 - see your friends pings on the friends page
        </RegText>
        <RegText style={StyleSheet.buttonAddText}>4 - meet up irl</RegText>
      </View>
      <View style={StyleSheet.navContainer}>
        <Nav navigation={navigation} currentPage={currentPage} />
      </View>
    </>
  )
}
