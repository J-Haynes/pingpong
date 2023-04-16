import React, { useEffect, useState } from 'react'
import { Text, View, StyleSheet, SectionList } from 'react-native'
import { useAppSelector } from '../hooks/redux'
import ActiveFriend from './ActiveFriend'
import BasicFriend from './BasicFriend'
import Nav from './Nav'
import { UserData } from '../common/User'
import * as Font from 'expo-font'

export default function Friends({ navigation }: any) {
  const userWithFriends = useAppSelector((state) => state.friends)
  const friends = userWithFriends.friend_data

  const pingFriendList = friends.filter((friend) => friend.ping_active)
  const otherFriendList = friends.filter((friend) => !friend.ping_active)

  const renderFriends = (item: UserData) => {
    if (item.ping_active) {
      return <ActiveFriend friend={item} />
    } else {
      return <BasicFriend friend={item} />
    }
  }

  return (
    // one of these views should be scrollable
    <View style={styles.container}>
      <View style={styles.friends}>
        <SectionList
          sections={[
            { title: ' A c t i v e    P i n g s ', data: pingFriendList },
            { title: ' A l l    F r i e n d s ', data: otherFriendList },
          ]}
          renderItem={({ item }) => renderFriends(item)}
          renderSectionHeader={({ section }) => (
            <View>
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
        <Nav navigation={navigation} />
      </View>
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
    justifyContent: 'center',
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
})
