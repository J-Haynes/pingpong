import React from 'react'
import { Text, View, StyleSheet, SectionList } from 'react-native'
import ActiveFriend from './ActiveFriend'
import BasicFriend from './BasicFriend'
import Nav from './Nav'
import { UserData } from '../common/interfaces'
import { fetchAllFriends } from '../apis/apiClient'

export default function Friends() {
  const fakeFriends = fetchAllFriends() //add await when this becomes an api call

  const pingFriendList = fakeFriends.filter((friend) => friend.ping_active)
  const otherFriendList = fakeFriends.filter((friend) => !friend.ping_active)

  const renderFriends = (item: UserData) => {
    if (item.ping_active) {
      return <ActiveFriend friend={item} />
    } else {
      return <BasicFriend friend={item} />
    }
  }

  return (
    <View style={styles.container}>
      <SectionList
        sections={[
          { title: 'Active pings', data: pingFriendList },
          { title: 'Inactive', data: otherFriendList },
        ]}
        renderItem={({ item }) => renderFriends(item)}
        renderSectionHeader={({ section }) => (
          <Text style={styles.sectionHeader}>{section.title}</Text>
        )}
        keyExtractor={(item) => `basicListEntry-${item.id}`}
      />
      <Nav />
    </View>
  )
}

// renderItem={({ item }) => <ActiveFriend friend={item} />}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: '#fde4cf',
    paddingTop: 22,
  },
  mainText: { color: 'black', fontSize: 20, alignSelf: 'center' },
  image: { width: 100, height: 100 },
  sectionHeader: {
    paddingTop: 2,
    paddingBottom: 2,
    paddingHorizontal: 10,
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: 'rgba(247,247,247,1.0)',
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
})
