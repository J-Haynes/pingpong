import React, { useEffect, useState } from 'react'
import { Image, ScrollView, Text, View } from 'react-native'
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
    <View style={StyleSheet.size}>
      <ScrollView>
        {map_url ? (
          <View style={StyleSheet.friendbox}>
            <CondensedText style={StyleSheet.emoji}>{emoji}</CondensedText>
            <View>
              {/* <View style={StyleSheet.userName}> */}
              <Text style={StyleSheet.friendbox_title}>
                <CondensedText style={StyleSheet.name}>
                  {capitalise(friend.name)} {firstLetter(friend.surname)}
                </CondensedText>
              </Text>
              {/* </View> */}
              <CondensedText style={StyleSheet.address}>
                {location}
              </CondensedText>
            </View>
          </View>
        ) : (
          <View style={StyleSheet.friendbox}>
            <CondensedText style={StyleSheet.emoji}>{emoji}</CondensedText>
            <View style={StyleSheet.userName}>
              <Text style={StyleSheet.friendbox_title}>
                <CondensedText style={StyleSheet.name}>
                  {capitalise(friend.name)} {firstLetter(friend.surname)}
                </CondensedText>
              </Text>
            </View>
          </View>
        )}
      </ScrollView>
    </View>
  )
}
