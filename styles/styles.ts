'use strict'
import { Dimensions, StyleSheet } from 'react-native'

const { width } = Dimensions.get('window')

export default StyleSheet.create({
  // global

  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: '#E05A00',
  },
  navContainer: {
    backgroundColor: '#E05A00',
    padding: 20,
    width: '100%',
    alignContent: 'center',
  },

  // landing specific

  landingTitle: {
    color: '#FDF7ED',
    fontSize: 150,
    alignSelf: 'center',
    width: '100%',
  },
  tagline: {
    color: '#FDF7ED',
    fontSize: 50,
    textAlign: 'center',
    paddingHorizontal: 20,
    width: '100%',
  },
  logInButtonText: { color: '#FDF7ED', fontSize: 50 },
  logInButton: {
    backgroundColor: '#0E65A3',
    padding: 10,
    borderRadius: 50,
    paddingHorizontal: 50,
    textAlign: 'center',
    borderWidth: 2,
    borderColor: '#033B55',
    width: '50%',
  },
  ballImg: { width: 150, height: 150, marginTop: 50 },

  // ping specific

  headingContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
  },
  headerText: {
    marginTop: 30,
    color: '#FDF7ED',
    fontSize: 70,
    textAlign: 'center',
  },
  blueText: {
    color: '#0E65A3',
    fontSize: 70,
    marginTop: 30,
    textAlign: 'center',
  },
  containerContents: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    backgroundColor: '#E05A00',
  },
  swipeContainer: {
    flex: 1,
    width: width,
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: width,
    marginBottom: 0,
    paddingBottom: 0,
  },
  slideText: {
    color: '#FDF7ED',
    fontSize: 40,
    alignSelf: 'center',
    paddingBottom: 20,
  },
  slideImage: {
    width: 150,
    height: 150,
  },
  locationInput: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#0E65A3',
    width: 350,
    alignSelf: 'center',
    height: 50,
    marginBottom: 10,
    //border
    borderRadius: 50,
    borderWidth: 2,
    borderColor: '#033B55',
    //text
    fontSize: 20,
    textAlign: 'center',
    color: '#FDF7ED',
    letterSpacing: 2,
    fontWeight: 'normal',
  },
  pingButton: {
    // flex: 1,
    width: 150,
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 20,
  },
})
