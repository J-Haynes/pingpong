import React, { useEffect, useState } from 'react'
import {
  Image,
  Text,
  View,
  StyleSheet,
  Pressable,
  TouchableOpacity,
} from 'react-native'
import * as Font from 'expo-font'

export default function Landing({ navigation }: any) {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require('../assets/ball.png')}
      ></Image>
      <View>
        <MediumText style={styles.title}>P I N G P O N G</MediumText>
        <RegularText style={styles.mainText}>
          Taking the media out of social media.
        </RegularText>
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Ping')}
      >
        <RegularText style={styles.buttonText}>LOG IN</RegularText>
      </TouchableOpacity>
    </View>
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
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: '#dd571c',
  },
  title: {
    color: 'oldlace',
    fontSize: 150,
    paddingHorizontal: 20,
  },
  mainText: {
    color: 'oldlace',
    fontSize: 30,
    alignSelf: 'center',
    paddingHorizontal: 20,
  },
  buttonText: { color: 'oldlace', fontSize: 50, alignSelf: 'center' },
  button: {
    backgroundColor: '#161c20',
    padding: 10,
    borderRadius: 20,
    paddingHorizontal: 50,
  },
  image: { width: 100, height: 100, marginTop: 50 },
})
