import React, { useEffect } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
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

      <TouchableOpacity onPress={handlePressFriends}>
        {currentPage === 'Friends' && (
          <Ionicons name="md-people" size={40} color="#093A5D" />
        )}
        {(currentPage === 'Ping' ||
          currentPage === 'AddFriend' ||
          currentPage === 'Tutorial' ||
          currentPage === 'Settings') && (
          <Ionicons name="md-people-outline" size={40} color="#093A5D" />
        )}
      </TouchableOpacity>

      <Text style={Stylesheet.lineText}>|</Text>

      {/* THIS IS THE FRIENDS // ADD FRIENDS PAGE */}

      <TouchableOpacity onPress={handlePressPing}>
        {currentPage === 'Ping' && (
          <MaterialCommunityIcons name="beer" size={40} color="#093A5D" />
        )}
        {(currentPage === 'Friends' ||
          currentPage === 'AddFriend' ||
          currentPage === 'Tutorial' ||
          currentPage === 'Settings') && (
          <MaterialCommunityIcons
            name="beer-outline"
            size={40}
            color="#093A5D"
          />
        )}
      </TouchableOpacity>

      <Text style={Stylesheet.lineText}>|</Text>

      {/* THIS IS THE FAKE SETTINGS PAGE */}

      <TouchableOpacity onPress={handlePressSettings}>
        {currentPage === 'Settings' && (
          <Ionicons name="settings" size={40} color="#093A5D" />
        )}
        {(currentPage === 'Ping' ||
          currentPage === 'AddFriend' ||
          currentPage === 'Tutorial' ||
          currentPage === 'Friends') && (
          <Ionicons name="settings-outline" size={40} color="#093A5D" />
        )}
      </TouchableOpacity>
    </View>
  )
}
