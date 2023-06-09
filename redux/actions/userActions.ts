import { User, UserData, UserWithFriends } from '../../common/User'
import {
  fetchFriends,
  changePingStatus,
  sendFriendConfirm,
  sendFriendDeny,
} from '../../apis/apiClient'
import type { ThunkAction } from '../store'

export type Action =
  | { type: 'FETCH_USER'; payload: User }
  | { type: 'FETCH_FRIENDS'; payload: UserWithFriends }
  | { type: 'SET_PING'; payload: boolean }
  | { type: 'SET_LOCATION'; payload: string }
  | { type: 'CONFIRM_FRIEND'; payload: string }
  | { type: 'DENY_FRIEND'; payload: string }
  | { type: 'ADD_FRIEND'; payload: string }
  | { type: 'LOADING'; payload: null }
  | { type: 'LOADING_DONE'; payload: null }

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

export function denyFriendInState(friendId: string): Action {
  return {
    type: 'DENY_FRIEND',
    payload: friendId,
  }
}

export function loading(): Action {
  return {
    type: 'LOADING',
    payload: null,
  }
}

export function loadingDone(): Action {
  return {
    type: 'LOADING_DONE',
    payload: null,
  }
}

export function loadUserWithFriends(userData: UserData): ThunkAction {
  return async (dispatch) => {
    dispatch(loading())
    return fetchFriends(userData)
      .then((userWithFriends) => {
        dispatch(addUserWithFriendsToState(userWithFriends))
        dispatch(loadingDone())
      })
      .catch((err) => console.log(err))
  }
}

export function changePing(
  userId: string,
  setting: boolean,
  location: string
): ThunkAction {
  return (dispatch) => {
    return changePingStatus(userId, setting, location).then((user) => {
      dispatch(togglePingInState(Boolean(user.ping_active)))
      if (user.ping_location) {
        dispatch(addLocationToState(user.ping_location))
      } else dispatch(addLocationToState(''))
    })
  }
}

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

export function denyFriend(userId: string, friendId: string): ThunkAction {
  return (dispatch) => {
    return sendFriendDeny(userId, friendId).then((response: number) => {
      if (response > 0) {
        dispatch(denyFriendInState(friendId))
      } else {
        console.log(
          'Friendship not confirmed, unexpected response from database'
        )
      }
    })
  }
}

export function addFriends() {
  return {
    type: 'ADD_FRIEND',
    payload: null,
  }
}

// export function addFriendThunk(
//   userId: string,
//   searchName: string
// ): ThunkAction<boolean> {
//   return async (dispatch) => {
//     return requestFriend(userId, searchName)
//       .then(() => true)
//       .catch((err) => {
//         return false //send error back to frontend
//       })
//   }
// }
