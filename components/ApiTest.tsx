import React from 'react'
import { Button, Image, Text, View, StyleSheet } from 'react-native'
import { useState, useEffect } from 'react'

import { getAllUsers } from '../apis/apiClient'

interface Users {
  id: number
  auth_id: string
  name: string
  surname: string
  username: string
  birthday: string
  ping_active: boolean
}

export default function ApiTest({ navigation }: any) {
  const [data, setData] = useState([] as null | Users[])

  useEffect(() => {
    setData(getAllUsers())
  }, [])

  return (
    <View>
      {data
        ? data.map((e, i) => {
            return <Text>{e.name}</Text>
          })
        : null}
    </View>
  )
}
