import * as React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { View } from 'react-native'
import StyleSheet from '../styles/styles'

function icons() {
  return (
    <>
      <View style={StyleSheet.ico__row}>
        <View style={StyleSheet.ico__col}>
          <Ionicons name="arrow-back" size={50} color="#000000" />
          <Ionicons name="arrow-back" size={50} color="#2F2F23" />
          <Ionicons name="arrow-back" size={50} color="#FFFFFF" />
        </View>
        <View style={StyleSheet.ico__col}>
          <Ionicons name="search" size={50} color="#000000" />
          <Ionicons name="search" size={50} color="#2F2F23" />
          <Ionicons name="search" size={50} color="#FFFFFF" />
        </View>
        <View style={StyleSheet.ico__col}>
          <Ionicons name="arrow-forward" size={50} color="#000000" />
          <Ionicons name="arrow-forward" size={50} color="#2F2F23" />
          <Ionicons name="arrow-forward" size={50} color="#FFFFFF" />
        </View>
        <View style={StyleSheet.ico__col}>
          <Ionicons name="add" size={50} color="#000000" />
          <Ionicons name="add" size={50} color="#2F2F23" />
          <Ionicons name="add" size={50} color="#FFFFFF" />
        </View>
        <View style={StyleSheet.ico__col}>
          <Ionicons name="person-add" size={50} color="#000000" />
          <Ionicons name="person-add" size={50} color="#2F2F23" />
          <Ionicons name="person-add" size={50} color="#FFFFFF" />
        </View>
        <View style={StyleSheet.ico__col}>
          <Ionicons name="person-add-outline" size={50} color="#000000" />
          <Ionicons name="person-add-outline" size={50} color="#2F2F23" />
          <Ionicons name="person-add-outline" size={50} color="#FFFFFF" />
        </View>
      </View>
      <View style={StyleSheet.ico__row}>
        <View style={StyleSheet.ico__col}>
          <MaterialCommunityIcons name="beer" size={50} color="#000000" />
          <MaterialCommunityIcons name="beer" size={50} color="#2F2F23" />
          <MaterialCommunityIcons name="beer" size={50} color="#FFFFFF" />
        </View>
        <View style={StyleSheet.ico__col}>
          <MaterialCommunityIcons
            name="beer-outline"
            size={50}
            color="#000000"
          />
          <MaterialCommunityIcons
            name="beer-outline"
            size={50}
            color="#2F2F23"
          />
          <MaterialCommunityIcons
            name="beer-outline"
            size={50}
            color="#FFFFFF"
          />
        </View>
        <View style={StyleSheet.ico__col}>
          <Ionicons name="md-people" size={50} color="#000000" />
          <Ionicons name="md-people" size={50} color="#2F2F23" />
          <Ionicons name="md-people" size={50} color="#FFFFFF" />
        </View>
        <View style={StyleSheet.ico__col}>
          <Ionicons name="md-people-outline" size={50} color="#000000" />
          <Ionicons name="md-people-outline" size={50} color="#2F2F23" />
          <Ionicons name="md-people-outline" size={50} color="#FFFFFF" />
        </View>
        <View style={StyleSheet.ico__col}>
          <Ionicons name="settings" size={50} color="#000000" />
          <Ionicons name="settings" size={50} color="#2F2F23" />
          <Ionicons name="settings" size={50} color="#FFFFFF" />
        </View>
        <View style={StyleSheet.ico__col}>
          <Ionicons name="settings-outline" size={50} color="#000000" />
          <Ionicons name="settings-outline" size={50} color="#2F2F23" />
          <Ionicons name="settings-outline" size={50} color="#FFFFFF" />
        </View>
      </View>
    </>
  )
}
