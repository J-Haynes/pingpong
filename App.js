import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Landing from './components/Landing'
import Ping from './components/Ping'
import Friends from './components/Friends'
import AddFriend from './components/AddFriend'
import { Provider } from 'react-redux'
import store from './redux/store'

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Landing"
            component={Landing}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Ping"
            component={Ping}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Friends"
            component={Friends}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="AddFriend"
            component={AddFriend}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 50,
  },
})
