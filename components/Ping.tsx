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
  Dimensions,
} from 'react-native'
import Nav from './Nav'
import * as Font from 'expo-font'
// import { once } from 'superagent'
import { useAppSelector, useAppDispatch } from '../hooks/redux'
import { changePing } from '../redux/actions/userActions'
// import ImageSwiper from './Swiper'
import Swiper from 'react-native-swiper/src'

const { width } = Dimensions.get('window')

export default function Ping({ navigation }: any) {
  const dispatch = useAppDispatch()

  const userId = useAppSelector((state) => state.friends.auth_id)
  const pingStatus = useAppSelector((state) => state.friends.ping_active)

  const [location, onChangeText] = useState('')

  const [ping, setPing] = useState(false)

  const currentPage = 'Ping'

  return (
    <View style={styles.container}>
      <MediumText style={styles.headerText}>
        SEND A PING TO YOUR FRIENDS
      </MediumText>
      <View style={styles.ping}>
        <View style={styles.swipecontainer}>
          <Swiper
            style={styles.wrapper}
            showsButtons={true}
            loop={true}
            // nextButton={styles.swipeButton}
            // prevButton={styles.swipeButton}
          >
            <View style={styles.slide}>
              <Image
                style={styles.img}
                source={require('../assets/activities/beer.png')}
              />
            </View>
            <View style={styles.slide}>
              <Image
                style={styles.img}
                source={require('../assets/activities/coffee.png')}
              />
            </View>
            <View style={styles.slide}>
              <Image
                style={styles.img}
                source={require('../assets/activities/talk.png')}
              />
            </View>
            <View style={styles.slide}>
              <Image
                style={styles.img}
                source={require('../assets/activities/walk.png')}
              />
            </View>
          </Swiper>
        </View>
        {/* </View> */}
        {!ping ? (
          <SafeAreaView>
            <TextInput
              style={[styles.input, styles.shadow]}
              onChangeText={onChangeText}
              value={location}
              placeholder="Where to?"
              placeholderTextColor={'oldlace'}
            />
          </SafeAreaView>
        ) : location ? (
          <SafeAreaView>
            <Text style={[styles.input, styles.shadow]}>
              Currently pinging at {location}
            </Text>
          </SafeAreaView>
        ) : (
          <SafeAreaView>
            <Text style={[styles.input, styles.shadow]}>Currently pinging</Text>
          </SafeAreaView>
        )}
        {ping ? (
          <View style={styles.button}>
            <TouchableOpacity
              onPress={() => {
                dispatch(changePing(userId, false, location))
                setPing(!ping)
                onChangeText('')
              }}
            >
              <Image
                style={styles.button}
                source={require('../assets/ball.png')}
              ></Image>
            </TouchableOpacity>
          </View>
        ) : (
          <View>
            <TouchableOpacity
              onPress={() => {
                dispatch(changePing(userId, true, location))
                setPing(!ping)
              }}
            >
              <Image
                style={styles.button}
                source={require('../assets/ball.png')}
              ></Image>
            </TouchableOpacity>
          </View>
        )}
      </View>
      <View style={styles.nav}>
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
    // paddingTop: 22,
  },
  // image: { width: 200, height: 200 },
  nav: {
    backgroundColor: '#dd571c',
    padding: 30,
    width: '100%',
    alignContent: 'center',
  },
  text: { color: 'oldlace', fontSize: 60, alignSelf: 'center' },
  button: {
    width: 150,
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
  },
  shadow: {
    shadowColor: '#b34e24',
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 1,
    shadowRadius: 10,
  },
  input: {
    height: 50,
    paddingVertical: 10,
    paddingHorizontal: 70,
    backgroundColor: '#b34e24',
    borderRadius: 50,
    marginVertical: 20,
  },
  wrapper: {
    flex: 1,
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
  swipecontainer: {
    flex: 1,
    width,
    // height: 50,
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    width: 150,
    height: 150,
  },
  swipeButton: {
    color: 'oldlace',
  },
  headerText: {
    marginTop: 20,
    color: 'oldlace',
    fontSize: 50,
  },
})
