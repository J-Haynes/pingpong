import React, { useEffect, useState } from 'react'
import {
  Image,
  Text,
  Touchable,
  TouchableOpacity,
  View,
  ScrollView,
} from 'react-native'
import { UserData } from '../common/User'
import { capitalise, firstLetter } from './helpers'
import * as Font from 'expo-font'
import { useAppDispatch, useAppSelector } from '../hooks/redux'
import { confirmFriend, denyFriend } from '../redux/actions/userActions'
import StyleSheet, {
  CondensedText,
  ItalicText,
  RegText,
} from '../styles/styles'

interface Props {
  friend: UserData
}

export default function PendingFriend({ friend }: Props) {
  const userId = useAppSelector((state) => state.friends.auth_id)

  const dispatch = useAppDispatch()

  const handleConfirm = () => {
    dispatch(confirmFriend(userId, friend.auth_id))
  }

  const handleCancel = () => {
    dispatch(denyFriend(userId, friend.auth_id))
  }

  return (
    <>
      <View style={StyleSheet.size}>
        <ScrollView>
          <View style={StyleSheet.friendbox}>
            <View style={StyleSheet.addfriend_title}>
              <Text style={StyleSheet.friendbox_title}>
                <CondensedText style={StyleSheet.name}>
                  {capitalise(friend.name)} {firstLetter(friend.surname)}
                </CondensedText>
              </Text>
            </View>
            <View style={StyleSheet.pendingContainer}>
              <TouchableOpacity onPress={handleConfirm}>
                <Image
                  style={StyleSheet.pendingIcons}
                  source={require('../assets/check.png')}
                ></Image>
              </TouchableOpacity>
              <TouchableOpacity onPress={handleCancel}>
                <Image
                  style={StyleSheet.pendingIcons}
                  source={require('../assets/cross.png')}
                ></Image>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
    </>
  )
}
