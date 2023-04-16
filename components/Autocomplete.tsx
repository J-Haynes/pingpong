import React from 'react'
import { View, ScrollView } from 'react-native'
import {
  GooglePlaceData,
  GooglePlacesAutocomplete,
} from 'react-native-google-places-autocomplete'
import { useRef } from 'react'

export default function AutoComplete() {
  const placesRef = useRef()

  const handlePress = (data: GooglePlaceData, details = null) => {
    console.log(data.description)
  }

  return (
    <View>
      <ScrollView>
        <GooglePlacesAutocomplete
          placeholder="Let's meet at..."
          onPress={() => handlePress}
          fetchDetails={true}
          onFail={(error) => console.error(error)}
          query={{
            language: 'en',
          }}
          requestUrl={{
            useOnPlatform: 'web',
            url: 'http://localhost:3000/google',
          }}
        />
      </ScrollView>
    </View>
  )
}
