import React from 'react'
import { View, ScrollView } from 'react-native'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'

const GOOGLE_API_KEY = 'AIzaSyDdGqkQVGEoCiL5twm7dL4zisPGQwTJ0XA'

export default function AutoComplete() {
  return (
    <View>
      <ScrollView>
        <GooglePlacesAutocomplete
          placeholder="Where would you like to meet?"
          onPress={(data, details = null) => {
            // 'details' is provided when fetchDetails = true
            console.log(data, details)
          }}
          onFail={(error) => console.error(error)}
          query={{
            key: { GOOGLE_API_KEY },
            language: 'en',
          }}
          requestUrl={{
            useOnPlatform: 'web',
            url: 'https://maps.googleapis.com/maps/api',
          }}
        />
      </ScrollView>
    </View>
  )
}
