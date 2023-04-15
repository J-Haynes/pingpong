import React, { useEffect, useState } from 'react'
import {
  Text,
  View,
  Pressable,
  StyleSheet,
  Button,
  Image,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
} from 'react-native'
import Nav from './Nav'
import * as Font from 'expo-font'
import { once } from 'superagent'

export default function Ping({ navigation }: any) {
  const handlePress = () => {
    navigation.navigate('Friends')
  }

  const [text, onChangeText] = useState('Where?')

  return (
    <View style={styles.container}>
      <View style={styles.ping}>
        <Image
          style={styles.image}
          source={require('../assets/beer.png')}
        ></Image>
        {/* <RegularText style={styles.buttonText}>where?</RegularText> */}
        <SafeAreaView>
          <TextInput
            style={styles.input}
            onChangeText={onChangeText}
            value={text}
          />
        </SafeAreaView>
        <TouchableOpacity
          style={[styles.button, styles.shadow]}
          onPress={() => navigation.navigate('Friends')}
        >
          <RegularText style={styles.buttonText}>PING</RegularText>
        </TouchableOpacity>
      </View>
      <View style={styles.nav}>
        <Nav />
      </View>
    </View>
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
  ping: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    backgroundColor: '#dd571c',
    paddingTop: 22,
  },
  image: { width: 200, height: 200 },
  nav: {
    backgroundColor: 'oldlace',
    padding: 30,
    width: '100%',
    alignContent: 'center',
  },
  buttonText: { color: 'oldlace', fontSize: 70, alignSelf: 'center' },
  button: {
    backgroundColor: '#161c20',
    borderRadius: 100,
    width: 200,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
  shadow: {
    shadowColor: 'black',
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 1,
    shadowRadius: 4,
  },
  input: {
    height: 40,
    // margin: 12,
    borderWidth: 1,
    paddingVertical: 10,
    paddingHorizontal: 70,
  },
})
