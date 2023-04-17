import React, { useEffect, useState } from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { UserData } from '../common/User'
import { capitalise, firstLetter } from './helpers'
import * as Font from 'expo-font'

interface Props {
  friend: UserData
}

export default function PendingFriend({ friend }: Props) {
  return (
    <>
      <View style={styles.user}>
        <RegularText style={styles.name}>
          {capitalise(friend.name)} {firstLetter(friend.surname)}
        </RegularText>
        <View style={styles.container}>
          <Image
            style={styles.image}
            source={require('../assets/check.png')}
          ></Image>
          <Image
            style={styles.image}
            source={require('../assets/cross.png')}
          ></Image>
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

const styles = StyleSheet.create({
  user: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    width: '100%',
    backgroundColor: '#b34e24',
    paddingVertical: 5,
    marginVertical: 1,
  },
  name: {
    alignSelf: 'center',
    fontSize: 30,
    color: 'oldlace',
  },
  image: {
    width: 20,
    height: 20,
    alignSelf: 'center',
    marginHorizontal: 6,
  },
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
})
