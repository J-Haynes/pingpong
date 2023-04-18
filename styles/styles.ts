'use strict'
import { Dimensions, StyleSheet } from 'react-native'

const { width } = Dimensions.get('window')

// colours:
// dark grey = #2F2F23
// blue = #0E65A3
// dark orange = #E05A00
// light orange = #F79500
// white-ish = #FDF7ED

export default StyleSheet.create({
  // global

  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: '#E05A00',
    width: width,
  },
  navContainer: {
    backgroundColor: '#E05A00',
    padding: 20,
    width: '100%',
    alignContent: 'center',
  },
  smallContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E05A00',
  },
  input: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#FDF7ED',
    width: 350,
    alignSelf: 'center',
    height: 50,
    marginBottom: 10,
    //border
    borderRadius: 50,
    //text
    fontSize: 20,
    textAlign: 'center',
    color: '#2F2F23',
    letterSpacing: 2,
    fontWeight: 'normal',
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
    borderColor: '#FDF7ED',
    width: '50%',
  },
  ballImg: { width: 150, height: 150, marginTop: 50 },

  // ping specific

  introText: {
    color: '#FDF7ED',
    marginTop: 30,
    fontSize: 40,
    textAlign: 'center',
  },
  headerText: {
    color: '#FDF7ED',
    fontSize: 70,
    textAlign: 'center',
  },
  blueText: {
    color: '#0E65A3',
    fontSize: 70,
    textAlign: 'center',
  },
  containerContents: {
    flex: 1,
    width: width,
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
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 50,
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 200,
    borderWidth: 2,
    borderColor: 'rgba(253, 247, 237, .2)',
    width: '70%',
    height: '70%',
    shadowColor: 'rgba(253, 247, 237, .2)',
    shadowRadius: 50,
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
    alignSelf: 'center',
  },
  submitButton: {
    width: 150,
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 20,
  },

  // friends specific

  listContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    width: '100%',
  },
  sectionHeader: {
    fontSize: 40,
    backgroundColor: '#E05A00',
    textAlign: 'center',
    width: '100%',
    color: '#FDF7ED',
    borderTopWidth: 2,
    borderColor: '#FDF7ED',
  },
  beerImage: { width: 200, height: 200, opacity: 0.6, marginBottom: 20 },
  mainText: {
    backgroundColor: '#E05A00',
    color: '#FDF7ED',
    fontSize: 30,
    alignSelf: 'center',
    paddingHorizontal: 20,
  },
  topBar: {
    width: '100%',
    paddingVertical: 10,
    backgroundColor: '#E05A00',
  },
  addFriend: {
    width: 40,
    height: 40,
    position: 'relative',
    left: 10,
  },
  user: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    width: '100%',
    backgroundColor: '#FDF7ED',
    paddingVertical: 5,
    marginVertical: 1,
    borderTopWidth: 2,
    borderBottomWidth: 2,
    borderColor: '#0E65A3',
  },
  name: {
    alignSelf: 'center',
    fontSize: 30,
    color: '#0E65A3',
    letterSpacing: 2,
  },
  image: {
    width: 20,
    height: 20,
    alignSelf: 'center',
  },

  // nav specific

  nav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#FDF7ED',
    borderRadius: 50,
    height: 50,
    width: 350,
    elevation: 5,
    borderWidth: 3,
    borderColor: '#F79500',
    alignSelf: 'center',
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 50,
  },
  icon: { width: 35, height: 35 },
  lineText: {
    color: '#0E65A3',
    fontSize: 20,
    alignSelf: 'center',
  },
  ico__col: {
    flex: 1,
    flexDirection: 'column',
  },
  ico__row: {
    paddingTop: 40,
    flex: 1,
    flexDirection: 'row',
  },

  // add friend specific

  buttonAdd: {
    backgroundColor: '#0E65A3',
    width: 350,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 20,
    borderRadius: 50,
  },
  buttonAddText: {
    color: '#FDF7ED',
    textAlign: 'center',
    fontSize: 20,
  },
  usernameContainer: {
    paddingBottom: 50,
  },
  usernameText: {
    fontSize: 20,
    alignSelf: 'center',
    color: '#FDF7ED',
    padding: 5,
  },
  friendsImg: {
    width: 300,
    height: 300,
    paddingTop: 20,
  },

  // pending friend specific

  pendingIcons: {
    width: 20,
    height: 20,
    alignSelf: 'center',
    marginHorizontal: 6,
  },
  pendingContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
})
