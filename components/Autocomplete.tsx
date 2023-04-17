import React, { useState } from 'react'
import { View, ScrollView, StyleSheet, Dimensions } from 'react-native'
import {
  GooglePlaceData,
  GooglePlaceDetail,
  GooglePlacesAutocomplete,
} from 'react-native-google-places-autocomplete'
import LocationDetails from '../common/Location'

const { width } = Dimensions.get('window')

interface Props {
  change: (location: LocationDetails) => any
}

export default function AutoComplete({ change }: Props) {
  const handlePress = async (
    data: GooglePlaceData,
    details: GooglePlaceDetail | null
  ) => {
    const description = data.description
    const address = details?.formatted_address
    const name = details?.name
    change({ description, name, address })
  }

  return (
    <View>
      <ScrollView>
        <GooglePlacesAutocomplete
          placeholder="Where to?"
          onPress={(data, details = null) => {
            handlePress(data, details)
          }}
          fetchDetails={true}
          onFail={(error) => console.error(error)}
          query={{
            language: 'en',
          }}
          requestUrl={{
            useOnPlatform: 'web',
            url: 'https://pingpong-backend.devacademy.nz/google',
          }}
          textInputProps={{
            style: styles.input,
            placeholderTextColor: '#FDF7ED',
            multiline: false,
            maxLength: 25,
            onChangeText(text) {
              console.log(text)
            },
          }}
        />
      </ScrollView>
    </View>
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
