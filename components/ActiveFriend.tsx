import React, { useEffect, useState } from 'react'
import { Image, Text, View } from 'react-native'
import { UserData } from '../common/User'
import { capitalise, firstLetter } from './helpers'
import StyleSheet, { CondensedText } from '../styles/styles'

interface Props {
  friend: UserData
}

export default function ActiveFriend({ friend }: Props) {
  let map_url = ''
  let location = ''
  let emoji = ''

  if (friend.ping_location.includes('☭')) {
    const locationDeets = friend.ping_location.split('☭')
    map_url = locationDeets[0]
    emoji = locationDeets[1]
    location = locationDeets[2]
  } else {
    emoji = friend.ping_location
    emoji = emoji.replace('undefined', '')
  }
  return (
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
      {map_url ? (
        <CondensedText style={StyleSheet.name}>{location}</CondensedText> //map_url, emoji and location available
      ) : (
        <CondensedText style={StyleSheet.name}>{emoji}</CondensedText> //only emoji available
      )}
      <Image
        style={StyleSheet.image}
        source={require('../assets/ball.png')}
      ></Image>
    </View>
  )
}
