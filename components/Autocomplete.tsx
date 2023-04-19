import React, { useState } from 'react'
import { View, ScrollView, Dimensions } from 'react-native'
import {
  GooglePlaceData,
  GooglePlaceDetail,
  GooglePlacesAutocomplete,
} from 'react-native-google-places-autocomplete'
import LocationDetails from '../common/Location'
import StyleSheet from '../styles/styles'
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
    const map_url = details?.url
    change({ description, name, address, map_url })
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
            style: StyleSheet.input,
            placeholderTextColor: '#2F2F23',
            multiline: true,
            onChangeText(text) {},
          }}
        />
      </ScrollView>
    </View>
  )
}
