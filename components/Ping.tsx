import React from 'react'
import { Text, View, Pressable, StyleSheet, Button } from 'react-native'

export default function Ping({ navigation }: any) {
  const handlePress = () => {
    console.log('pressed')
    navigation.navigate('Friends')
  }
  return (
    <View>
      <View>
        <Text>Hello</Text>
      </View>

      <Pressable style={styles.button} onPress={handlePress}>
        <Text style={styles.buttonText}>GO TO FRIENDS</Text>
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
