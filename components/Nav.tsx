import React from 'react'
import { Text, View, StyleSheet, SectionList } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

const Tab = createBottomTabNavigator()

// interface Icon {
//   icon: 'friend' | 'ping'
//   color: 'rgb(130, 130, 130)'
//   activeColor: 'rgb(3, 137, 253)' // optional
//   activeBackgroundColor: 'rgb(224, 243, 255)' // optional
// }

export default function Friends() {
  return (
    <View>
      {/* <Tab items={[{ icon: 'friend' }, { icon: 'ping' }]} onPress={() => 1} /> */}
      <Text>NAVIGATION BAR</Text>
    </View>
  )
}
