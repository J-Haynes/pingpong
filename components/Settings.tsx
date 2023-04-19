import React from 'react'
import { Text, View, TouchableOpacity } from 'react-native'

import { useAppSelector } from '../hooks/redux'

import Nav from './Nav'

import StyleSheet, {
  CondensedText,
  ItalicText,
  RegText,
} from '../styles/styles'

export default function Settings({ navigation }: any) {
  const currentPage = 'Settings'

  const userWithFriends = useAppSelector((state) => state.friends)

  return (
    <>
      <View style={StyleSheet.container}>
        <RegText style={StyleSheet.introText}>Settings</RegText>
        <RegText style={StyleSheet.name}>
          Hello {userWithFriends.name}! 🙋‍♂️
        </RegText>
        <RegText style={StyleSheet.name}>Birthday:</RegText>
        <RegText style={StyleSheet.name}>
          🫡 {userWithFriends.birthday} 🫡
        </RegText>
        <TouchableOpacity
          style={StyleSheet.logInButton}
          onPress={() => {
            navigation.navigate('Tutorial')
          }}
        >
          <RegText style={StyleSheet.logInButtonText}>HELP</RegText>
        </TouchableOpacity>
      </View>
      <View style={StyleSheet.navContainer}>
        <Nav navigation={navigation} currentPage={currentPage} />
      </View>
    </>
  )
}
