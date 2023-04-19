import React, { useEffect, useState } from 'react'
import { Image, ScrollView, Text, View } from 'react-native'
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
        </View>
      </ScrollView>
    </View>
  )
}
