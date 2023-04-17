import { User, UserData, UserWithFriends } from '../../common/User'
import {
  fetchFriends,
  changePingStatus,
  sendFriendConfirm,
} from '../../apis/apiClient'
import type { ThunkAction } from '../store'
import { resolveDiscoveryAsync } from 'expo-auth-session'

export type Action =
  | { type: 'FETCH_USER'; payload: User }
  | { type: 'FETCH_FRIENDS'; payload: UserWithFriends }
  | { type: 'SET_PING'; payload: boolean }
  | { type: 'SET_LOCATION'; payload: string }
  | { type: 'CONFIRM_FRIEND'; payload: string }

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

export function confirmFriendInState(friendId: string): Action {
  return {
    type: 'CONFIRM_FRIEND',
    payload: friendId,
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
  return async (dispatch) => {
    return fetchFriends(userData)
      .then((userWithFriends) => {
        dispatch(addUserWithFriendsToState(userWithFriends))
      })
      .catch((err) => console.log(err))
  }
}

// For the set ping thunk note that when false is given the route also sets the users location data to null - make sure that store location data is also wiped from the store

// export function changePing(
//   userId: string,
//   setting: boolean,
//   location: string
// ): ThunkAction {
//   return (dispatch) => {
//     return changePingStatus(userId, setting, location).then(([user]) => {
//       if (setting === false) {
//         user.ping_active = false
//       } else {
//         user.ping_active = true
//       }
//       console.log(user)
//       dispatch(togglePingInState(user.ping_active))
//       if (user.ping_location) {
//         dispatch(addLocationToState(user.ping_location))
//       }
//     })
//   }
// }

export function confirmFriend(userId: string, friendId: string): ThunkAction {
  return (dispatch) => {
    return sendFriendConfirm(userId, friendId).then((response: number) => {
      if (response > 0) {
        dispatch(confirmFriendInState(friendId))
      } else {
        console.log(
          'Friendship not confirmed, unexpected response from database'
        )
      }
    })
  }
}
