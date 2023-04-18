import React, { useEffect } from 'react'
import {
  Text,
  View,
  StyleSheet,
  SectionList,
  TouchableOpacity,
  Image,
} from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { useAppDispatch, useAppSelector } from '../hooks/redux'
import { loadUserWithFriends } from '../redux/actions/userActions'
import { User, UserData, UserWithoutFriends } from '../common/User'

const Tab = createBottomTabNavigator()

export default function Nav({ navigation, currentPage }: any) {
  const dispatch = useAppDispatch()
  const userWithFriends = useAppSelector((state) => state.friends)
  let userWithoutFriends = { ...userWithFriends } as UserWithoutFriends
  delete userWithoutFriends.friend_data

  // On Navigation to friends, fetch friends from the database
  useEffect(() => {
    dispatch(loadUserWithFriends(userWithoutFriends))
  }, [navigation])

  const handlePressPing = () => {
    navigation.navigate('Ping')
  }

  const handlePressFriends = () => {
    navigation.navigate('Friends')
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={handlePressPing}>
        {currentPage === 'Ping' && (
          <Image
            style={styles.beer}
            source={require('../assets/navBeerColour.png')}
          ></Image>
        )}
        {currentPage === 'Friends' && (
          <Image
            style={styles.beer}
            source={require('../assets/navBeer.png')}
          ></Image>
        )}
        {currentPage === 'AddFriend' && (
          <Image
            style={styles.beer}
            source={require('../assets/navBeer.png')}
          ></Image>
        )}
      </TouchableOpacity>
      <Text style={styles.lineText}>|</Text>
      <TouchableOpacity style={styles.button} onPress={handlePressFriends}>
        {currentPage === 'Ping' && (
          <Image
            style={styles.beer}
            source={require('../assets/friends.png')}
          ></Image>
        )}
        {currentPage === 'Friends' && (
          <Image
            style={styles.beer}
            source={require('../assets/friends (2).png')}
          ></Image>
        )}
        {currentPage === 'AddFriend' && (
          <Image
            style={styles.beer}
            source={require('../assets/friends.png')}
          ></Image>
        )}
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#FDF7ED', // Set background color of the navbar
    borderRadius: 50, // Set border radius to create a pill shape
    height: 60, // Set desired height of the navbar
    width: 350,
    // paddingHorizontal: 20, // Add horizontal padding to align content
    elevation: 5, // Add elevation for a floating effect on Android
    borderWidth: 3,
    borderColor: '#F79500',
    alignSelf: 'center',
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 50,
  },
  beer: { width: 40, height: 40 },
  lineText: {
    color: '#0E65A3',
    fontSize: 20,
    alignSelf: 'center',
  },
})
