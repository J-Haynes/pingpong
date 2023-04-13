import React from 'react'
import { Button, Image, Text, View, StyleSheet, Pressable } from 'react-native'

export default function Landing({ navigation }: any) {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require('../assets/ball.png')}
      ></Image>
      <View>
        <Text style={styles.title}>PINGPONG</Text>
        <Text style={styles.mainText}>
          taking the media out of social media
        </Text>
      </View>
      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate('Ping')}
      >
        <Text style={styles.buttonText}>LOG IN / SIGN UP</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: '#fde4cf',
  },
  title: { color: 'black', fontSize: 50, alignSelf: 'center' },
  mainText: { color: 'black', fontSize: 20, alignSelf: 'center' },
  buttonText: { color: 'black', fontSize: 30, alignSelf: 'center' },
  button: {
    backgroundColor: '#d0d9b3',
    padding: 10,
    borderRadius: 5,
  },
  image: { width: 100, height: 100 },
})

// champagne = #fde4cf
// yellow = #f8f8cc
// green = #fde4cf
