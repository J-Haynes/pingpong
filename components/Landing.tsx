import React, { useEffect, useState } from 'react'

import { Image, Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import * as Font from 'expo-font'
import { useAppDispatch } from '../hooks/redux'
import { loadUserWithFriends } from '../redux/actions/userActions'

import * as WebBrowser from 'expo-web-browser'
import * as Google from 'expo-auth-session/providers/google'

WebBrowser.maybeCompleteAuthSession()


export default function Landing({ navigation }: any) {
  const dispatch = useAppDispatch()
  const userId = useEffect(() => {
    dispatch(loadUserWithFriends('google-oauth|123456789101'))
  }, [])
  
  //auth 
  const [accessToken, setAccessToken] = useState(null)
  const [user, setUser] = useState(null)
  const [request, response, promptAsync] = Google.useAuthRequest({
    clientId:
      '848389775127-sano44j1jrulqvrfav88g7tksok3149g.apps.googleusercontent.com',
    iosClientId:
      '848389775127-8t0qgj3jnm3n7fck9f0jq8a6okk410qk.apps.googleusercontent.com',
    // WAITING ON SHA-1 KEY
    androidClientId:
      'replace this after you get SHA-1 key @ console.cloud.google.com',
  })

  useEffect(() => {
    if (response?.type === 'success') {
      setAccessToken(response.authentication.accessToken)
      accessToken && fetchUserInfo()
    }
  }, [response, accessToken])

  async function fetchUserInfo() {
    let response = await fetch('https://www.googleapis.com/userinfo/v2/me', {
      headers: { Authorization: `Bearer ${accessToken}` },
    })
    const useInfo = await response.json()
    setUser(useInfo)
  }

  const NavigatePing = () => {
    if (user) {
      navigation.navigate('Ping')
      return (
        <>
          <Text>Welcome</Text>
          <Text>{user.given_name}</Text>
        </>
      )
    }
  }
  return (
    <View style={styles.container}>
      {user && <NavigatePing />}
      {user === null && (
        <>
          <Image
            style={styles.image}
            source={require('../assets/ball.png')}
          ></Image>
          <View>
            <MediumText style={styles.title}> P I N G P O N G </MediumText>
            <RegularText style={styles.mainText}>
              Taking the media out of social media.
            </RegularText>
          </View>
          <TouchableOpacity
            style={styles.button}
            disabled={!request}
            onPress={() => {
              promptAsync()
            }}
          >
            <RegularText style={styles.buttonText}>LOG IN</RegularText>
          </TouchableOpacity>
        </>
      )}
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
