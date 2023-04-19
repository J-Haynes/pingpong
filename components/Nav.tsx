import React, { useEffect } from 'react'
import { Text, View, TouchableOpacity, Image } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { useAppDispatch, useAppSelector } from '../hooks/redux'
import { UserWithoutFriends } from '../common/User'
import { loadUserWithFriends } from '../redux/actions/userActions'
import Stylesheet from '../styles/styles'

import Ionicons from '@expo/vector-icons/Ionicons'
import { MaterialCommunityIcons } from '@expo/vector-icons'

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

  const handlePressSettings = () => {
    navigation.navigate('Settings')
  }

  return (
    <View style={Stylesheet.nav}>
      {/* THIS IS THE HOME / PING PAGE */}

      <TouchableOpacity style={Stylesheet.button} onPress={handlePressPing}>
        {currentPage === 'Ping' && (
          <MaterialCommunityIcons name="beer" size={50} color="#000000" />
        )}
        {(currentPage === 'Friends' ||
          currentPage === 'AddFriend' ||
          currentPage === 'Settings') && (
          <MaterialCommunityIcons
            name="beer-outline"
            size={50}
            color="#000000"
          />
        )}
      </TouchableOpacity>
      <Text style={Stylesheet.lineText}>|</Text>

      {/* THIS IS THE FRIENDS / ADD FRIENDS PAGE */}

      <TouchableOpacity style={Stylesheet.button} onPress={handlePressFriends}>
        {currentPage === 'Friends' && (
          <Ionicons name="md-people" size={50} color="#000000" />
        )}
        {(currentPage === 'Ping' ||
          currentPage === 'AddFriend' ||
          currentPage === 'Settings') && (
          <Ionicons name="md-people-outline" size={50} color="#000000" />
        )}
      </TouchableOpacity>

      <Text style={Stylesheet.lineText}>|</Text>

      {/* THIS IS THE FAKE SETTINGS PAGE */}

      <TouchableOpacity style={Stylesheet.button} onPress={handlePressSettings}>
        {currentPage === 'Settings' && (
          <Ionicons name="settings" size={50} color="#000000" />
        )}
        {(currentPage === 'Ping' ||
          currentPage === 'AddFriend' ||
          currentPage === 'Friends') && (
          <Ionicons name="settings-outline" size={50} color="#000000" />
        )}
      </TouchableOpacity>
    </View>
  )
}
