import React from 'react'
import { Button, Image, Text, View, StyleSheet } from 'react-native'

export default function Landing({ navigation }: any) {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/favicon.png')}></Image>
      <Text>PINGPONG</Text>
      <Text>taking the social out of social media</Text>
      <Button
        title="Log In / Sign Up"
        onPress={() => navigation.navigate('Ping')}
      ></Button>
    </View>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
})
