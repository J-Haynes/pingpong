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
import { once } from 'superagent'
import { useAppSelector, useAppDispatch } from '../hooks/redux'
import { changePing } from '../redux/actions/userActions'
// import ImageSwiper from './Swiper'
// import Swiper from 'react-native-swiper/src'

// const { width } = Dimensions.get('window')

export default function Ping({ navigation }: any) {
  const handlePress = () => {
    navigation.navigate('Friends')
  }
  const dispatch = useAppDispatch()

  const userId = useAppSelector((state) => state.friends.auth_id)

  const [location, onChangeText] = useState('')

  const [ping, changePing] = useState(pingStatus)

  const currentPage = 'Ping'

  return (
    <View style={styles.container}>
      <View style={styles.ping}>
        <Image
          style={styles.image}
          source={require('../assets/activities/beer.png')}
        ></Image>
        {/* <View style={styles.swipe}> */}

        {/* <View style={styles.swipecontainer}>
          <Swiper
            style={styles.wrapper}
            showsButtons={true}
            loop={true}
            height={1}
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
        </View> */}

        {/* </View> */}
        <SafeAreaView>
          <TextInput
            style={[styles.input, styles.shadow]}
            onChangeText={onChangeText}
            value={location}
            placeholder="Where to?"
            placeholderTextColor={'oldlace'}
          />
        </SafeAreaView>
        {ping ? (
          <View style={styles.button}>
            <TouchableOpacity
              onPress={() => {
                dispatch(changePing(userId, true, location))
                return navigation.navigate('Friends')
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
            <MediumText style={styles.text}>
              PRESS THE BALL TO SEND YOUR PING
            </MediumText>
            <TouchableOpacity
              onPress={() => {
                dispatch(changePing(userId, false, location))
                return navigation.navigate('Friends')
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
    flex: 2,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    backgroundColor: '#dd571c',
    paddingTop: 22,
  },
  image: { width: 200, height: 200 },
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
  },
  // wrapper: {},
  // swipecontainer: {
  //   flex: 1,
  //   width,
  // },
  // slide: {
  //   flex: 1,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  // },
  // img: {
  //   width: 150,
  //   height: 150,
  // },
})
