import React, { Ref, useRef, useState } from 'react'
import { View, ScrollView, StyleSheet } from 'react-native'
import {
  GooglePlaceData,
  GooglePlaceDetail,
  GooglePlacesAutocomplete,
} from 'react-native-google-places-autocomplete'
import LocationDetails from '../common/Location'

interface Props {
  change: (location: LocationDetails) => any
}

export default function AutoComplete({ change }: Props) {
  const [locationDetails, setLocationDetails] = useState({} as LocationDetails)

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
          placeholder="Let's meet at..."
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
            url: 'http://localhost:3000/google',
          }}
          textInputProps={{
            style: [styles.input, styles.shadow],
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
    // width,
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
