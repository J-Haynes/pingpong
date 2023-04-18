import {
  Text,
  View,
  Image,
  SafeAreaView,
  TextInput,
  Touchable,
  TouchableOpacity,
  Button,
  Alert,
} from 'react-native'
import React from 'react'
import { useState } from 'react'
import Stylesheet from '../styles/styles'

import Nav from './Nav'
import { useAppDispatch, useAppSelector } from '../hooks/redux'

import { addFriendThunk } from '../redux/actions/userActions'

export default function AddFriend({ navigation }: any) {
  const dispatch = useAppDispatch()

  const currentPage = 'AddFriend'

  const [searchName, setSearchName] = useState('')

  const handlePress = () => {
    dispatch(addFriendThunk(userId, searchName))
  }

  const userId = useAppSelector((state) => state.friends.auth_id)

  return (
    <>
      <View style={Stylesheet.addContainer}>
        <SafeAreaView>
          <TextInput
            style={Stylesheet.input}
            onChangeText={setSearchName}
            value={searchName}
            placeholder="Search for a username"
            placeholderTextColor={'#FDF7ED'}
          />
        </SafeAreaView>
        <View style={Stylesheet.buttonAdd}>
          <TouchableOpacity onPress={handlePress}>
            <Text style={Stylesheet.buttonAddText}>press to add friend</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={Stylesheet.navContainer}>
        <Nav navigation={navigation} currentPage={currentPage} />
      </View>
    </>
  )
}
