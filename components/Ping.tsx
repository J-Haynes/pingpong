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
import StyleSheet, {
  CondensedText,
  ItalicText,
  RegText,
} from '../styles/styles'

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

  const currentPage = 'Ping'

  const userWithFriends = useAppSelector((state) => state.friends)
  console.log(userWithFriends)

  const [ping, setPing] = useState(userWithFriends.ping_active)

  return (
    <View style={StyleSheet.container}>
      <RegText style={StyleSheet.introText}>Hey {userWithFriends.name}</RegText>
      <View style={StyleSheet.containerContents}>
        <View style={StyleSheet.swipeContainer}>
          <Swiper
            controlsEnabled={false}
            loop={false}
            onIndexChanged={indexHandler}
          >
            <View style={StyleSheet.slide}>
              <RegText style={StyleSheet.slideText}>beer</RegText>
              <Image
                style={StyleSheet.slideImage}
                source={require('../assets/activities/beer.png')}
              />
            </View>
            <View style={StyleSheet.slide}>
              <RegText style={StyleSheet.slideText}>coffee</RegText>
              <Image
                style={StyleSheet.slideImage}
                source={require('../assets/activities/coffee.png')}
              />
            </View>
            <View style={StyleSheet.slide}>
              <RegText style={StyleSheet.slideText}>chat</RegText>
              <Image
                style={StyleSheet.slideImage}
                source={require('../assets/activities/talk.png')}
              />
            </View>
            <View style={StyleSheet.slide}>
              <RegText style={StyleSheet.slideText}>walk</RegText>
              <Image
                style={StyleSheet.slideImage}
                source={require('../assets/activities/walk.png')}
              />
            </View>
          </Swiper>
        </View>
        {!userWithFriends.ping_active ? (
          <>
            <SafeAreaView>
              <AutoComplete change={onChangeText} />
            </SafeAreaView>
            <View>
              <TouchableOpacity
                onPress={() => {
                  typeof location.map_url !== 'undefined' &&
                  location.description !== 'undefined'
                    ? dispatch(
                        changePing(
                          userId,
                          true,
                          `${location.map_url}☭${emoji}☭${location.description}`
                        )
                      )
                    : dispatch(changePing(userId, true, `${emoji}`))
                  setPing(!ping)
                }}
              >
                <Image
                  style={StyleSheet.submitButton}
                  source={require('../assets/ball.png')}
                ></Image>
              </TouchableOpacity>
            </View>
          </>
        ) : location.description ? (
          <>
            <SafeAreaView>
              <Text style={StyleSheet.input}>Pinging at {location?.name}</Text>
            </SafeAreaView>
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
          </>
        ) : (
          <>
            <SafeAreaView>
              <Text style={StyleSheet.input}>Currently pinging</Text>
            </SafeAreaView>
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
          </>
        )}
      </View>
      <View style={StyleSheet.navContainer}>
        <Nav navigation={navigation} currentPage={currentPage} />
      </View>
    </View>
  )
}
