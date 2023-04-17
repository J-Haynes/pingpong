import React, { useEffect, useState } from 'react'
import { Text, View, Image, TouchableOpacity, SafeAreaView } from 'react-native'
import Nav from './Nav'
import * as Font from 'expo-font'
import AutoComplete from './Autocomplete'
import { useAppSelector, useAppDispatch } from '../hooks/redux'
import { changePing } from '../redux/actions/userActions'
import Swiper from 'react-native-swiper/src'
import LocationDetails from '../common/Location'
import StyleSheet from '../styles/styles'

export default function Ping({ navigation }: any) {
  const dispatch = useAppDispatch()

  const userId = useAppSelector((state) => state.friends.auth_id)
  const pingStatus = useAppSelector((state) => state.friends.ping_active)

  const [location, onChangeText] = useState({} as LocationDetails)

  const [ping, setPing] = useState(false)

  const currentPage = 'Ping'

  return (
    <View style={StyleSheet.container}>
      <View style={StyleSheet.headingContainer}>
        <MediumText style={StyleSheet.headerText}>SEND A </MediumText>
        <MediumText style={StyleSheet.blueText}>PING</MediumText>
        <MediumText style={StyleSheet.headerText}> TO YOUR FRIENDS</MediumText>
      </View>
      <View style={StyleSheet.ping}>
        <View style={StyleSheet.swipecontainer}>
          <Swiper
            style={StyleSheet.wrapper}
            showsButtons={false}
            showsPagination={false}
            loop={false}
          >
            <View style={StyleSheet.slide}>
              <RegularText style={StyleSheet.text}>b e e r</RegularText>
              <Image
                style={StyleSheet.img}
                source={require('../assets/activities/beer.png')}
              />
            </View>
            <View style={StyleSheet.slide}>
              <RegularText style={StyleSheet.text}>c o f f e e</RegularText>
              <Image
                style={StyleSheet.img}
                source={require('../assets/activities/coffee.png')}
              />
            </View>
            <View style={StyleSheet.slide}>
              <RegularText style={StyleSheet.text}>c h a t</RegularText>
              <Image
                style={StyleSheet.img}
                source={require('../assets/activities/talk.png')}
              />
            </View>
            <View style={StyleSheet.slide}>
              <RegularText style={StyleSheet.text}>w a l k</RegularText>
              <Image
                style={StyleSheet.img}
                source={require('../assets/activities/walk.png')}
              />
            </View>
          </Swiper>
        </View>
        {/* </View> */}
        {!ping ? (
          <SafeAreaView>
            <AutoComplete change={onChangeText} />
          </SafeAreaView>
        ) : location.description ? (
          <SafeAreaView>
            <Text style={StyleSheet.input}>pinging at {location?.name}</Text>
          </SafeAreaView>
        ) : (
          <SafeAreaView>
            <Text style={[StyleSheet.input]}>currently pinging</Text>
          </SafeAreaView>
        )}
        {ping ? (
          <View style={StyleSheet.button}>
            <TouchableOpacity
              onPress={() => {
                dispatch(changePing(userId, false, location.description))
                setPing(!ping)
                onChangeText({} as LocationDetails)
              }}
            >
              <Image
                style={StyleSheet.button}
                source={require('../assets/ball.png')}
              ></Image>
            </TouchableOpacity>
          </View>
        ) : (
          <View>
            <TouchableOpacity
              onPress={() => {
                dispatch(changePing(userId, true, location.description))
                setPing(!ping)
              }}
            >
              <Image
                style={StyleSheet.button}
                source={require('../assets/ball.png')}
              ></Image>
            </TouchableOpacity>
          </View>
        )}
      </View>
      <View style={StyleSheet.nav}>
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
