import React, { useEffect, useState } from 'react'

import { Image, Text, View, TouchableOpacity } from 'react-native'
import { useAppDispatch } from '../hooks/redux'
import { loadUserWithFriends } from '../redux/actions/userActions'
import StyleSheet, {
  CondensedText,
  ItalicText,
  RegText,
} from '../styles/styles'

import * as WebBrowser from 'expo-web-browser'
import * as Google from 'expo-auth-session/providers/google'
import AutoComplete from './Autocomplete'

import { translateToUserData } from './helpers'
import { GoogleData } from '../common/Google'
import { UserData } from '../common/User'

WebBrowser.maybeCompleteAuthSession()

export default function Landing({ navigation }: any) {
  const dispatch = useAppDispatch()

  //auth
  const [googleUser, setGoogleUser] = useState(null as GoogleData | null)
  const [accessToken, setAccessToken] = useState(null)
  const [request, response, promptAsync] = Google.useAuthRequest({
    clientId:
      '848389775127-sano44j1jrulqvrfav88g7tksok3149g.apps.googleusercontent.com',
    iosClientId:
      '848389775127-8t0qgj3jnm3n7fck9f0jq8a6okk410qk.apps.googleusercontent.com',
    // WAITING ON SHA-1 KEY
    androidClientId:
      '848389775127-3gtei0e57k9rbunl2nohkrbftese73mm.apps.googleusercontent.com',
  })

  // Thuncc state

  const [userData, setUserData] = useState({} as UserData)

  useEffect(() => {
    if (response?.type === 'success') {
      setAccessToken(response.authentication.accessToken)
      accessToken && fetchUserInfo()
    }

    async function fetchUserInfo() {
      let response = await fetch('https://www.googleapis.com/userinfo/v2/me', {
        headers: { Authorization: `Bearer ${accessToken}` },
      })
      const googleData = await response.json()
      setGoogleUser(googleData)
      setUserData(translateToUserData(googleData))
    }
  }, [response, accessToken])

  useEffect(() => {
    dispatch(loadUserWithFriends(userData))
  }, [userData])

  useEffect(() => {
    googleUser && navigation.navigate('Ping')
  }, [googleUser])

  return (
    <View style={StyleSheet.container}>
      {googleUser === null && (
        <>
          <Image
            style={StyleSheet.ballImg}
            source={require('../assets/ball.png')}
          ></Image>
          <View>
            <ItalicText style={StyleSheet.landingTitle}> PINGPONG </ItalicText>
            <RegText style={StyleSheet.tagline}>kill your groupchat</RegText>
          </View>
          <TouchableOpacity
            style={StyleSheet.logInButton}
            disabled={!request}
            onPress={() => {
              promptAsync()
            }}
          >
            <RegText style={StyleSheet.logInButtonText}>LOG IN</RegText>
          </TouchableOpacity>
        </>
      )}
    </View>
  )
}
