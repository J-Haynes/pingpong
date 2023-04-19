import React, { useEffect, useState } from 'react'
import { Image, Text, View } from 'react-native'
import { UserData } from '../common/User'
import { capitalise, firstLetter } from './helpers'
import * as Font from 'expo-font'
import StyleSheet, {
  CondensedText,
  ItalicText,
  RegText,
} from '../styles/styles'

interface Props {
  friend: UserData
}

export default function ActiveFriend({ friend }: Props) {
  return (
    // display red dot and friend.ping_location
    <View style={StyleSheet.user}>
      <View style={StyleSheet.userName}>
        <CondensedText style={StyleSheet.name}>
          {capitalise(friend.name)} {firstLetter(friend.surname)}
        </CondensedText>
        <Image
          style={StyleSheet.image}
          source={require('../assets/ball.png')}
        ></Image>
      </View>
      <CondensedText style={StyleSheet.name}>
        {friend.ping_location}
      </CondensedText>
    </View>
  )
}
