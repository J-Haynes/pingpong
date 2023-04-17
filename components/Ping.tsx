import React, { useEffect, useState } from 'react'
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
  Dimensions,
} from 'react-native'
import Nav from './Nav'
import * as Font from 'expo-font'
import AutoComplete from './Autocomplete'
import { useAppSelector, useAppDispatch } from '../hooks/redux'
import { changePing } from '../redux/actions/userActions'
import Swiper from 'react-native-swiper/src'
import LocationDetails from '../common/Location'

const { width } = Dimensions.get('window')

export default function Ping({ navigation }: any) {
  const dispatch = useAppDispatch()

  const userId = useAppSelector((state) => state.friends.auth_id)
  const pingStatus = useAppSelector((state) => state.friends.ping_active)

  const [location, onChangeText] = useState({} as LocationDetails)

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
            showsButtons={false}
            showsPagination={false}
            loop={false}
            // nextButton={styles.swipeButton}
            // prevButton={styles.swipeButton}
          >
            <View style={styles.slide}>
              <RegularText style={styles.text}>b e e r</RegularText>
              <Image
                style={styles.img}
                source={require('../assets/activities/beer.png')}
              />
            </View>
            <View style={styles.slide}>
              <RegularText style={styles.text}>c o f f e e</RegularText>
              <Image
                style={styles.img}
                source={require('../assets/activities/coffee.png')}
              />
            </View>
            <View style={styles.slide}>
              <RegularText style={styles.text}>c h a t</RegularText>
              <Image
                style={styles.img}
                source={require('../assets/activities/talk.png')}
              />
            </View>
            <View style={styles.slide}>
              <RegularText style={styles.text}>w a l k</RegularText>
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
            <AutoComplete change={onChangeText} />
            {/* <TextInput
              style={styles.input}
              onChangeText={onChangeText}
              value={location}
              placeholder="where to?"
              placeholderTextColor={'#FDF7ED'}
              multiline={false}
              maxLength={25}
            /> */}
          </SafeAreaView>
        ) : location.description ? (
          <SafeAreaView>
            <Text style={styles.input}>pinging at {location?.name}</Text>
          </SafeAreaView>
        ) : (
          <SafeAreaView>
            <Text style={[styles.input]}>currently pinging</Text>
          </SafeAreaView>
        )}
        {ping ? (
          <View style={styles.button}>
            <TouchableOpacity
              onPress={() => {
                dispatch(changePing(userId, false, location.description))
                setPing(!ping)
                onChangeText({} as LocationDetails)
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
                dispatch(changePing(userId, true, location.description))
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
    backgroundColor: '#E05A00',
    // width: width,
  },
  ping: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    backgroundColor: '#E05A00',
  },
  nav: {
    backgroundColor: '#E05A00',
    padding: 20,
    width: '100%',
    alignContent: 'center',
  },
  text: {
    color: '#FDF7ED',
    fontSize: 40,
    alignSelf: 'center',
    paddingBottom: 20,
    textDecorationLine: 'underline',
    textDecorationColor: '#F79500',
    textDecorationStyle: 'solid',
  },
  button: {
    width: 150,
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 10,
  },
  input: {
    paddingVertical: 10,
    backgroundColor: '#0E65A3',
    borderRadius: 50,
    marginBottom: 20,
    fontSize: 20,
    textAlign: 'center',
    borderWidth: 2,
    borderColor: '#033B55',
    color: '#FDF7ED',
    width: 350,
    height: 50,
    alignSelf: 'center',
    letterSpacing: 2,
    fontWeight: 'normal',
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
    width: width,
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
  headerText: {
    marginTop: 30,
    color: '#FDF7ED',
    fontSize: 70,
    textDecorationLine: 'underline',
    textDecorationColor: '#0E65A3',
    textDecorationStyle: 'solid',
  },
})
