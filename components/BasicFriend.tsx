import React from 'react'
import { Text, View } from 'react-native'
import { UserData } from '../common/Friendship'
import { capitalise } from './helpers'

interface Props {
  friend: UserData
}

export default function ActiveFriend({ friend }: Props) {
  console.log(friend)
  return (
    <View>
      <Text>
        {capitalise(friend.name)} {capitalise(friend.surname)}
      </Text>
    </View>
  )
}
