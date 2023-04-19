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
        {/* <RegText style={StyleSheet.tagline}>
          welcome to
        </RegText> */}
        <ItalicText style={StyleSheet.tutorialTitle}> PINGPONG </ItalicText>
        <RegText style={StyleSheet.blueTagline}>
          the app designed to kill your groupchat
        </RegText>
        <RegText style={StyleSheet.buttonAddText}>
          🤝 add your friends on the friends page
        </RegText>
        <RegText style={StyleSheet.buttonAddText}>
          🗺️ select an emoji and location, click the ball to send a ping to your
          friends!
        </RegText>
        <RegText style={StyleSheet.buttonAddText}>
          🔮 see your friends pings on the friends page
        </RegText>
        <RegText style={StyleSheet.buttonAddText}>🍺 meet up irl</RegText>
        <RegText style={StyleSheet.blueTagline}>happy pinging! 🏓</RegText>
      </View>
      <View style={StyleSheet.navContainer}>
        <Nav navigation={navigation} currentPage={currentPage} />
      </View>
    </>
  )
}
