import {
  Text,
  View,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from 'react-native'
import React from 'react'
import { useState } from 'react'
import Stylesheet from '../styles/styles'

import Nav from './Nav'
import { useAppSelector } from '../hooks/redux'
import { requestFriend } from '../apis/apiClient'

export default function AddFriend({ navigation }: any) {
  const userId = useAppSelector((state) => state.friends.auth_id)

  const [searchName, setSearchName] = useState('')
  const [requestReply, setRequestReply] = useState('Enter a username')

  const currentPage = 'AddFriend'

  const handlePress = () => {
    requestFriend(userId, searchName)
      .then((response) => setRequestReply('Friend request sent'))
      .catch((err) => {
        setRequestReply(err.message)
      })
  }

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
          <Text>{requestReply}</Text>
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
