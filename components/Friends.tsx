import React, { useEffect, useState } from 'react'
import { Text, View, SectionList, Image, TouchableOpacity } from 'react-native'
import { useAppSelector } from '../hooks/redux'
import ActiveFriend from './ActiveFriend'
import BasicFriend from './BasicFriend'
import PendingFriend from './PendingFriend'
import Nav from './Nav'
import { UserData } from '../common/User'
import * as Font from 'expo-font'
import StyleSheet from '../styles/styles'

export default function Friends({ navigation }: any) {
  const userWithFriends = useAppSelector((state) => state.friends)
  const friends = userWithFriends.friend_data

  console.log('userwithfriends', userWithFriends)

  // const pingFriendList = friends.filter((friend) => friend.ping_active)
  // const otherFriendList = friends.filter((friend) => !friend.ping_active)

  // const friends = userWithFriends.friend_data
  // // Giving YOU some fake friends
  // friends.push(
  //   {
  //     id: 3,
  //     auth_id: 'google-oauth|123456789103',
  //     name: 'friend',
  //     surname: 't',
  //     username: 'mattmarano',
  //     birthday: '770904000000',
  //     ping_active: true,
  //     pending: false,
  //   },
  //   {
  //     id: 4,
  //     auth_id: 'google-oauth|123456789104',
  //     name: 'friend',
  //     surname: 'f',
  //     username: 'ryankendrick',
  //     birthday: '740491200000',
  //     ping_active: false,
  //     pending: false,
  //   },
  //   {
  //     id: 5,
  //     auth_id: 'google-oauth|123456789104',
  //     name: 'stalker',
  //     surname: 'f',
  //     username: 'ryankendrick',
  //     birthday: '740491200000',
  //     ping_active: false,
  //     pending: true,
  //   },
  //   {
  //     id: 6,
  //     auth_id: 'google-oauth|123456789104',
  //     name: 'stalker',
  //     surname: 't',
  //     username: 'ryankendrick',
  //     birthday: '740491200000',
  //     ping_active: true,
  //     pending: true,
  //   }
  // )

  const pendingFriendsList = friends.filter((friend) => friend.pending == true)
  const pingFriendList = friends.filter(
    (friend) => friend.ping_active && friend.pending == false
  )
  const otherFriendList = friends.filter(
    (friend) => !friend.ping_active && friend.pending == false
  )

  const renderFriends = (item: UserData) => {
    if (item.pending == true) {
      return <PendingFriend friend={item} />
    } else if (item.ping_active) {
      return <ActiveFriend friend={item} />
    } else {
      return <BasicFriend friend={item} />
    }
  }

  const currentPage = 'Friends'

  return (
    // one of these views should be scrollable
    <View style={StyleSheet.container}>
      <View style={StyleSheet.topBar}>
        <TouchableOpacity onPress={() => navigation.navigate('AddFriend')}>
          <Image
            style={StyleSheet.addFriend}
            source={require('../assets/addfriend.png')}
          ></Image>
        </TouchableOpacity>
      </View>
      {friends.length != 0 ? (
        <>
          <View style={StyleSheet.listContainer}>
            <SectionList
              sections={[
                {
                  title: ' F r i e n d    R e q u e s t s ',
                  data: pendingFriendsList,
                },
                { title: ' A c t i v e    P i n g s ', data: pingFriendList },
                { title: ' A l l    F r i e n d s ', data: otherFriendList },
              ]}
              renderItem={({ item }) => renderFriends(item)}
              renderSectionHeader={({ section }) => (
                <View>
                  <RegularText style={StyleSheet.sectionHeader}>
                    {section.title}
                  </RegularText>
                </View>
              )}
              keyExtractor={(item) => `basicListEntry-${item.id}`}
            />
          </View>
        </>
      ) : (
        <>
          <View style={StyleSheet.container}>
            <Image
              style={StyleSheet.beerImage}
              source={require('../assets/activities/beer.png')}
            ></Image>
            <Text style={StyleSheet.mainText}>Oh no! No Friends...</Text>
          </View>
        </>
      )}
      <View style={StyleSheet.navContainer}>
        <Nav navigation={navigation} currentPage={currentPage} />
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

// {
// 	"auth_id": "108267169986314483935",
// 	"name": "Olivia",
// 	"surname": "Clarke-Edwards",
// 	"username": "oliviaclarkeedwards",
// 	"birthday": "Mon Apr 17 2023",
// 	"ping_active": true,
// 	"ping_location": "Heyday NoMad, Broadway, New York, NY, USA"
// }
