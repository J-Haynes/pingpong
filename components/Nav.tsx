import React from 'react'
import {
  Text,
  View,
  StyleSheet,
  SectionList,
  TouchableOpacity,
} from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

const Tab = createBottomTabNavigator()

// interface Icon {
//   icon: 'friend' | 'ping'
//   color: 'rgb(130, 130, 130)'
//   activeColor: 'rgb(3, 137, 253)' // optional
//   activeBackgroundColor: 'rgb(224, 243, 255)' // optional
// }

// import { NavigationProp, ParamListBase } from '@react-navigation/native'

// type NavProps = {
//   navigation: NavigationProp<ParamListBase>
// }

export default function Nav({ navigation }: any) {
  const handlePressPing = () => {
    navigation.navigate('Ping')
  }

  const handlePressFriends = () => {
    navigation.navigate('Friends')
  }

  return (
    <View style={styles.container}>
      {/* <Tab items={[{ icon: 'friend' }, { icon: 'ping' }]} onPress={() => 1} /> */}
      <TouchableOpacity style={styles.button} onPress={handlePressPing}>
        <Text>HOME</Text>
      </TouchableOpacity>
      <Text style={styles.text}>|</Text>
      <TouchableOpacity style={styles.button} onPress={handlePressFriends}>
        <Text>FRIENDS</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'white', // Set background color of the navbar
    borderRadius: 50, // Set border radius to create a pill shape
    height: 60, // Set desired height of the navbar
    paddingHorizontal: 20, // Add horizontal padding to align content
    elevation: 5, // Add elevation for a floating effect on Android
  },
  text: {
    color: '#161c20',
    fontSize: 20,
    alignSelf: 'center',
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 50,
  },
})
