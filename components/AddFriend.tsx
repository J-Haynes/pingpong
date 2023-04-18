import {
  Text,
  View,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native'
import React from 'react'
import { useState } from 'react'
import Stylesheet from '../styles/styles'

import Nav from './Nav'
import { useAppSelector } from '../hooks/redux'
import { requestFriend } from '../apis/apiClient'

export default function AddFriend({ navigation }: any) {
  const userId = useAppSelector((state) => state.friends.auth_id)
  const userWithFriends = useAppSelector((state) => state.friends)

  const [searchName, setSearchName] = useState('')
  const [requestReply, setRequestReply] = useState('')

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
      <View style={Stylesheet.smallContainer}>
        <SafeAreaView>
          <View style={Stylesheet.usernameContainer}>
            <Text style={Stylesheet.usernameText}>
              Your username to share with friends:
            </Text>
            <Text style={Stylesheet.usernameText}>
              {userWithFriends.username}
            </Text>
          </View>
          <TextInput
            style={Stylesheet.input}
            onChangeText={setSearchName}
            value={searchName}
            placeholder="Search for a username"
            placeholderTextColor={'#2F2F23'}
          />
          <Text style={Stylesheet.lineText}>{requestReply}</Text>
        </SafeAreaView>
        <View style={Stylesheet.buttonAdd}>
          <TouchableOpacity onPress={handlePress}>
            <Text style={Stylesheet.buttonAddText}>Press to add friend</Text>
          </TouchableOpacity>
        </View>
        <Image
          style={Stylesheet.friendsImg}
          source={require('../assets/friends-cartoon.png')}
        ></Image>
      </View>
      <View style={Stylesheet.navContainer}>
        <Nav navigation={navigation} currentPage={currentPage} />
      </View>
    </>
  )
}
