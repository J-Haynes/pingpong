import { Text, View, Image, StyleSheet } from 'react-native'
import React from 'react'

import Nav from './Nav'

export default function AddFriend({ navigation }: any) {
  const currentPage = 'AddFriend'

  return (
    <>
      <View style={styles.container}>
        <View style={styles.ping}>
          <Image
            style={styles.image}
            source={require('../assets/activities/beer.png')}
          ></Image>
          <Text style={styles.mainText}>Add a friend page</Text>
        </View>
      </View>
      <View style={styles.nav}>
        <Nav navigation={navigation} currentPage={currentPage} />
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: '#dd571c',
  },
  nav: {
    backgroundColor: '#dd571c',
    padding: 30,
    width: '100%',
    alignContent: 'center',
  },
  mainText: {
    color: 'oldlace',
    fontSize: 30,
    alignSelf: 'center',
    paddingHorizontal: 20,
  },
  image: { width: 200, height: 200 },
  ping: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    backgroundColor: '#dd571c',
    paddingTop: 22,
  },
})
