import React, { useEffect, useState } from 'react'
import {
  Text,
  View,
  StyleSheet,
  SectionList,
  Image,
  TouchableOpacity,
} from 'react-native'
import { useAppSelector } from '../hooks/redux'
import ActiveFriend from './ActiveFriend'
import BasicFriend from './BasicFriend'
import Nav from './Nav'
import { UserData } from '../common/User'
import * as Font from 'expo-font'

export default function Friends({ navigation }: any) {
  const userWithFriends = useAppSelector((state) => state.friends)
  // const friends = userWithFriends.friend_data

  // const pingFriendList = friends.filter((friend) => friend.ping_active)
  // const otherFriendList = friends.filter((friend) => !friend.ping_active)

  const friends = userWithFriends.friend_data
  // Giving YOU some fake friends
  friends.push(
    {
      id: 3,
      auth_id: 'google-oauth|123456789103',
      name: 'matt',
      surname: 'marano',
      username: 'mattmarano',
      birthday: '770904000000',
      ping_active: true,
    },
    {
      id: 4,
      auth_id: 'google-oauth|123456789104',
      name: 'ryan',
      surname: 'kendrick',
      username: 'ryankendrick',
      birthday: '740491200000',
      ping_active: false,
    }
  )

  const pingFriendList = friends.filter((friend) => friend.ping_active)
  const otherFriendList = friends.filter((friend) => !friend.ping_active)

  const renderFriends = (item: UserData) => {
    if (item.ping_active) {
      return <ActiveFriend friend={item} />
    } else {
      return <BasicFriend friend={item} />
    }
  }

  const currentPage = 'Friends'

  return (
    // one of these views should be scrollable
    <View style={styles.container}>
      <View style={styles.topbar}>
        <TouchableOpacity onPress={() => navigation.navigate('AddFriend')}>
          <Image
            style={styles.addfriend}
            source={require('../assets/addfriend.png')}
          ></Image>
        </TouchableOpacity>
      </View>
      {friends.length != 0 ? (
        <>
          <View style={styles.friends}>
            <SectionList
              sections={[
                { title: ' A c t i v e    P i n g s ', data: pingFriendList },
                { title: ' A l l    F r i e n d s ', data: otherFriendList },
              ]}
              renderItem={({ item }) => renderFriends(item)}
              renderSectionHeader={({ section }) => (
                <View>
                  <Text> </Text>
                  <MediumText style={styles.sectionHeader}>
                    {section.title}
                  </MediumText>
                  <Text> </Text>
                </View>
              )}
              keyExtractor={(item) => `basicListEntry-${item.id}`}
            />
          </View>
          <View style={styles.nav}>
            <Nav navigation={navigation} currentPage={currentPage} />
          </View>
        </>
      ) : (
        <>
          <View style={styles.container}>
            <View style={styles.ping}>
              <Image
                style={styles.image}
                source={require('../assets/activities/beer.png')}
              ></Image>
              <Text style={styles.mainText}>Oh no! No Friends...</Text>
            </View>
          </View>
          <View style={styles.nav}>
            <Nav navigation={navigation} currentPage={currentPage} />
          </View>
        </>
      )}
    </View>
  )
}

const MediumText = (props: any) => {
  const [fontLoaded, setFontLoaded] = useState(false)

  useEffect(() => {
    async function loadFont() {
      await Font.loadAsync({
        'medium-font': require('../assets/fonts/BlueScreens/Medium-Italic.ttf'),
      })

      setFontLoaded(true)
    }

    loadFont()
  }, [])

  if (!fontLoaded) {
    return <Text>Loading...</Text>
  }

  return (
    <Text style={{ ...props.style, fontFamily: 'medium-font' }}>
      {props.children}
    </Text>
  )
}

const RegularText = (props: any) => {
  const [fontLoaded, setFontLoaded] = useState(false)

  useEffect(() => {
    async function loadFont() {
      await Font.loadAsync({
        'reg-font': require('../assets/fonts/BlueScreens/Regular.ttf'),
      })

      setFontLoaded(true)
    }

    loadFont()
  }, [])

  if (!fontLoaded) {
    return <Text>Loading...</Text>
  }

  return (
    <Text style={{ ...props.style, fontFamily: 'reg-font' }}>
      {props.children}
    </Text>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: '#dd571c',
  },
  friendsHeader: {
    backgroundColor: 'oldlace',
    width: '100%',
    alignContent: 'center',
    color: 'oldlace',
  },
  sectionHeader: {
    fontSize: 50,
    backgroundColor: 'oldlace',
    textAlign: 'center',
    width: '100%',
    color: '#dd571c',
  },
  nav: {
    backgroundColor: '#dd571c',
    padding: 30,
    width: '100%',
    alignContent: 'center',
  },
  friends: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    width: '100%',
  },
  image: { width: 200, height: 200, opacity: 0.6 },
  mainText: {
    color: 'oldlace',
    fontSize: 30,
    alignSelf: 'center',
    paddingHorizontal: 20,
  },
  ping: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    backgroundColor: '#dd571c',
    paddingTop: 22,
  },
  topbar: {
    width: '100%',
    paddingTop: 5,
    // flex: 1,
    // alignItems: 'flex-end',
    // flexDirection: 'corightlumn',
  },
  addfriend: {
    width: 50,
    height: 50,
    position: 'relative',
    left: 10,
  },
})
