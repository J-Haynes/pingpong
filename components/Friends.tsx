import React from 'react'
import { Text, View, StyleSheet, SectionList } from 'react-native'
import { useAppSelector } from '../hooks/redux'
import ActiveFriend from './ActiveFriend'
import BasicFriend from './BasicFriend'
import Nav from './Nav'
import { UserData } from '../common/User'

export default function Friends() {
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
    <View style={styles.container}>
      <View style={styles.userContainer}>
        <SectionList
          sections={[
            { title: 'Active Pings', data: pingFriendList },
            { title: 'Inactive', data: otherFriendList },
          ]}
          renderItem={({ item }) => renderFriends(item)}
          renderSectionHeader={({ section }) => (
            <Text style={styles.sectionHeader}>{section.title}</Text>
          )}
          keyExtractor={(item) => `basicListEntry-${item.id}`}
        />
      </View>
      <View style={styles.nav}>
        <Nav />
      </View>
    </View>
  )
}

// renderItem={({ item }) => <ActiveFriend friend={item} />}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#dd571c',
  },
  userContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    backgroundColor: '#dd571c',
    paddingTop: 22,
  },
  friendsHeader: {
    backgroundColor: 'oldlace',
    padding: 30,
    width: '100%',
    alignContent: 'center',
    color: 'oldlace',
  },
  mainText: {
    color: 'black',
    fontSize: 20,
    alignSelf: 'center',
  },
  sectionHeader: {
    paddingTop: 2,
    paddingBottom: 2,
    paddingHorizontal: 10,
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: 'rgba(247,247,247,1.0)',
    textAlign: 'center',
  },
  nav: {
    backgroundColor: 'oldlace',
    padding: 30,
    width: '100%',
    alignContent: 'center',
  },
})
