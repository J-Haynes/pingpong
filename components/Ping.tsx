import React, { useEffect, useState } from 'react'
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from 'react-native'
import Nav from './Nav'
import * as Font from 'expo-font'
import AutoComplete from './Autocomplete'
import { useAppSelector, useAppDispatch } from '../hooks/redux'
import { changePing } from '../redux/actions/userActions'
import Swiper from 'react-native-web-swiper'
import LocationDetails from '../common/Location'
import StyleSheet from '../styles/styles'

import * as Animatable from 'react-native-animatable'

export default function Ping({ navigation }: any) {
  const dispatch = useAppDispatch()

  const userId = useAppSelector((state) => state.friends.auth_id)
  const pingStatus = useAppSelector((state) => state.friends.ping_active)

  const [location, onChangeText] = useState({} as LocationDetails)
  const emojis = ['🍺', '☕', '💬', '🚶‍♀️']
  const [emoji, setEmoji] = useState(emojis[0])

  const indexHandler = (index: number) => {
    setEmoji(emojis[index])
  }

  const [ping, setPing] = useState(false)

  const currentPage = 'Ping'

  const userWithFriends = useAppSelector((state) => state.friends)

  return (
    <View style={StyleSheet.container}>
      <RegularText style={StyleSheet.introText}>
        Hey {userWithFriends.name}
      </RegularText>
      <ScrollView contentContainerStyle={StyleSheet.containerContents}>
        <View style={StyleSheet.swipeContainer}>
          <Swiper
            controlsEnabled={false}
            loop={false}
            onIndexChanged={indexHandler}
          >
            <View style={StyleSheet.slide}>
              <RegularText style={StyleSheet.slideText}>b e e r</RegularText>
              <Image
                style={StyleSheet.slideImage}
                source={require('../assets/activities/beer.png')}
              />
            </View>
            <View style={StyleSheet.slide}>
              <RegularText style={StyleSheet.slideText}>
                c o f f e e
              </RegularText>
              <Image
                style={StyleSheet.slideImage}
                source={require('../assets/activities/coffee.png')}
              />
            </View>
            <View style={StyleSheet.slide}>
              <RegularText style={StyleSheet.slideText}>c h a t</RegularText>
              <Image
                style={StyleSheet.slideImage}
                source={require('../assets/activities/talk.png')}
              />
            </View>
            <View style={StyleSheet.slide}>
              <RegularText style={StyleSheet.slideText}>w a l k</RegularText>
              <Image
                style={StyleSheet.slideImage}
                source={require('../assets/activities/walk.png')}
              />
            </View>
          </Swiper>
        </View>
        {!ping ? (
          <SafeAreaView>
            <AutoComplete change={onChangeText} />
          </SafeAreaView>
        ) : location.description ? (
          <SafeAreaView>
            <Text style={StyleSheet.input}>Pinging at {location?.name}</Text>
          </SafeAreaView>
        ) : (
          <SafeAreaView>
            <Text style={StyleSheet.input}>Currently pinging</Text>
          </SafeAreaView>
        )}
        {ping ? (
          <View style={StyleSheet.submitButton}>
            <TouchableOpacity
              onPress={() => {
                dispatch(
                  changePing(userId, false, emoji + location.description)
                )
                setPing(!ping)
                onChangeText({} as LocationDetails)
              }}
            >
              <Image
                style={StyleSheet.submitButton}
                source={require('../assets/ball.png')}
              ></Image>
              {/* <Animatable.Image
                source={require('../assets/ball.png')}
                animation="bounce"
                iterationCount={Infinity}
                direction="normal"
              ></Animatable.Image> */}
            </TouchableOpacity>
          </View>
        ) : (
          <View>
            <TouchableOpacity
              onPress={() => {
                dispatch(
                  changePing(
                    userId,
                    true,
                    `${location.map_url}*${emoji} ${location.description}`
                  )
                )
                setPing(!ping)
              }}
            >
              <Image
                style={StyleSheet.submitButton}
                source={require('../assets/ball.png')}
              ></Image>
            </TouchableOpacity>
          </View>
        )}
      </ScrollView>
      <View style={StyleSheet.navContainer}>
        <Nav navigation={navigation} currentPage={currentPage} />
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
