'use strict'
import { Dimensions, StyleSheet } from 'react-native'

const { width } = Dimensions.get('window')

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: '#E05A00',
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
  },
  blueText: {
    color: '#0E65A3',
    fontSize: 70,
    marginTop: 30,
  },
  headingContainer: {
    flexDirection: 'row',
  },
})
