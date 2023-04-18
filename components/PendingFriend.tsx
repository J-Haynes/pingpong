import React, { useEffect, useState } from 'react'
import { Image, Text, Touchable, TouchableOpacity, View } from 'react-native'
import { UserData } from '../common/User'
import { capitalise, firstLetter } from './helpers'
import * as Font from 'expo-font'
import { useAppDispatch, useAppSelector } from '../hooks/redux'
import { confirmFriend, denyFriend } from '../redux/actions/userActions'
import Stylesheet from '../styles/styles'

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
      <View style={Stylesheet.user}>
        <RegularText style={Stylesheet.name}>
          {capitalise(friend.name)} {firstLetter(friend.surname)}
        </RegularText>
        <View style={Stylesheet.pendingContainer}>
          <TouchableOpacity onPress={handleConfirm}>
            <Image
              style={Stylesheet.pendingIcons}
              source={require('../assets/check.png')}
            ></Image>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleCancel}>
            <Image
              style={Stylesheet.pendingIcons}
              source={require('../assets/cross.png')}
            ></Image>
          </TouchableOpacity>
        </View>
      </View>
    </>
  )
}

const MediumText = (props: any) => {
  const [fontLoaded, setFontLoaded] = useState(false)

  useEffect(() => {
    async function loadFont() {
      await Font.loadAsync({
        'medium-font': require('../assets/fonts/BlueScreens/Medium-Italic.ttf'),
      })

      setFontLoaded(true)
    }

    loadFont()
  }, [])

  if (!fontLoaded) {
    return <Text>Loading...</Text>
  }

  return (
    <Text style={{ ...props.style, fontFamily: 'medium-font' }}>
      {props.children}
    </Text>
  )
}

const RegularText = (props: any) => {
  const [fontLoaded, setFontLoaded] = useState(false)

  useEffect(() => {
    async function loadFont() {
      await Font.loadAsync({
        'reg-font': require('../assets/fonts/BlueScreens/Regular.ttf'),
      })

      setFontLoaded(true)
    }

    loadFont()
  }, [])

  if (!fontLoaded) {
    return <Text>Loading...</Text>
  }

  return (
    <Text style={{ ...props.style, fontFamily: 'reg-font' }}>
      {props.children}
    </Text>
  )
}
