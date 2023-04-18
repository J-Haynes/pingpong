import React, { useEffect } from 'react'
import { Text, View, SectionList, TouchableOpacity, Image } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { useAppDispatch, useAppSelector } from '../hooks/redux'
import { UserWithoutFriends } from '../common/User'
import { loadUserWithFriends } from '../redux/actions/userActions'
import Stylesheet from '../styles/styles'

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
    <View style={Stylesheet.nav}>
      <TouchableOpacity style={Stylesheet.button} onPress={handlePressPing}>
        {currentPage === 'Ping' && (
          <Image
            style={Stylesheet.icon}
            source={require('../assets/navBeerColour.png')}
          ></Image>
        )}
        {currentPage === 'Friends' && (
          <Image
            style={Stylesheet.icon}
            source={require('../assets/navBeer.png')}
          ></Image>
        )}
        {currentPage === 'AddFriend' && (
          <Image
            style={Stylesheet.icon}
            source={require('../assets/navBeer.png')}
          ></Image>
        )}
      </TouchableOpacity>
      <Text style={Stylesheet.lineText}>|</Text>
      <TouchableOpacity style={Stylesheet.button} onPress={handlePressFriends}>
        {currentPage === 'Ping' && (
          <Image
            style={Stylesheet.icon}
            source={require('../assets/friends.png')}
          ></Image>
        )}
        {currentPage === 'Friends' && (
          <Image
            style={Stylesheet.icon}
            source={require('../assets/friends (2).png')}
          ></Image>
        )}
        {currentPage === 'AddFriend' && (
          <Image
            style={Stylesheet.icon}
            source={require('../assets/friends.png')}
          ></Image>
        )}
      </TouchableOpacity>
    </View>
  )
}
