import { User, UserData, UserWithFriends } from '../../common/User'
import { fetchUser, fetchFriends, changePingStatus } from '../../apis/apiClient'
import type { ThunkAction } from '../store'

export type Action =
  | { type: 'FETCH_USER'; payload: User }
  | { type: 'FETCH_FRIENDS'; payload: UserWithFriends }
  | { type: 'SET_PING'; payload: boolean }
  | { type: 'SET_LOCATION'; payload: string }

export function addUserToState(user: User): Action {
  return {
    type: 'FETCH_USER',
    payload: user,
  }
}

export function addUserWithFriendsToState(
  userWithFriends: UserWithFriends
): Action {
  return {
    type: 'FETCH_FRIENDS',
    payload: userWithFriends,
  }
}

export function togglePingInState(setting: boolean): Action {
  return {
    type: 'SET_PING',
    payload: setting,
  }
}

export function addLocationToState(location: string): Action {
  return {
    type: 'SET_LOCATION',
    payload: location,
  }
}

// Takes a userId, calls fetchUser to get the user from the database, and then adds it to the store
// export function loadUser(userId: string): ThunkAction {
//   return (dispatch) => {
//     return fetchUser(userId)
//       .then((user: User) => {
//         dispatch(addUserToState(user))
//       })
//       .catch((err) => console.log(err))
//   }
// }

export function loadUserWithFriends(userData: UserData): ThunkAction {
  // console.log(userData)
  return async (dispatch) => {
    return fetchFriends(userData)
      .then((userWithFriends) => {
        dispatch(addUserWithFriendsToState(userWithFriends))
      })
      .catch((err) => console.log(err))
  }
}

// For the set ping thunk note that when false is given the route also sets the users location data to null - make sure that store location data is also wiped from the store

export function changePing(
  userId: string,
  setting: boolean,
  location: string
): ThunkAction {
  return (dispatch) => {
    return changePingStatus(userId, setting, location).then((user) => {
      if (user.ping_active) user.ping_active = true
      else user.ping_active = false
      dispatch(togglePingInState(user.ping_active))
      if (user.ping_location) {
        dispatch(addLocationToState(user.ping_location))
      }
    })
  }
}
