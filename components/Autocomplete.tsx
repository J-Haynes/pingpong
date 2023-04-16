import React from 'react'
import { View, ScrollView } from 'react-native'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'

export default function AutoComplete() {
  return (
    <View>
      <ScrollView>
        <GooglePlacesAutocomplete
          placeholder="Where?"
          onPress={(data, details = null) => {
            // 'details' is provided when fetchDetails = true
            console.log(data, details)
          }}
          fetchDetails={true}
          onFail={(error) => console.error(error)}
          query={{
            language: 'en',
          }}
          requestUrl={{
            useOnPlatform: 'web',
            url: 'http://localhost:3000/google/',
          }}
        />
      </ScrollView>
    </View>
  )
}
