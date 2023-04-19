import React from 'react'
import { Text, View } from 'react-native'
import StyleSheet from '../styles/styles'

import Nav from './Nav'

export default function Settings({ navigation }: any) {
  const currentPage = 'Settings'

  return (
    <>
      <View style={StyleSheet.container}>
        <Text>Settings!</Text>
      </View>
      <View style={StyleSheet.navContainer}>
        <Nav navigation={navigation} currentPage={currentPage} />
      </View>
    </>
  )
}
