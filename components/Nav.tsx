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
    <View style={styles.container}>
      {/* <Tab items={[{ icon: 'friend' }, { icon: 'ping' }]} onPress={() => 1} /> */}
      <Text style={styles.text}>HOME</Text>
      <Text style={styles.text}>|</Text>
      <Text style={styles.text}>FRIENDS</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  text: {
    color: '#161c20',
    fontSize: 20,
    alignSelf: 'center',
  },
})
