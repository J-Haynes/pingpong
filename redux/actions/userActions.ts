import { User, UserWithFriends } from '../../common/User'
import { fetchUser, fetchFriends } from '../../apis/apiClient'
import type { ThunkAction } from '../store'

export type Action =
  | { type: 'FETCH_USER'; payload: User }
  | { type: 'FETCH_FRIENDS'; payload: UserWithFriends }

export function addUserToState(user: User): Action {
  return {
    type: 'FETCH_USER',
    payload: user,
  }
}

export function addUserWithFriendsToState(userWithFriends: UserWithFriends) {
  return {
    type: 'FETCH_FRIENDS',
    payload: userWithFriends,
  }
}

// Takes a userId, calls fetchUser to get the user from the database, and then adds it to the store
export function loadUser(userId: string): ThunkAction {
  return (dispatch) => {
    return fetchUser(userId)
      .then((user: User) => {
        dispatch(addUserToState(user))
      })
      .catch((err) => console.log(err))
  }
}

export function loadUserWithFriends(userId: string): ThunkAction {
  return (dispatch) => {
    return fetchFriends(userId)
      .then((userWithFriends) => {
        dispatch(addUserWithFriendsToState(userWithFriends))
      })
      .catch((err) => console.log(err))
  }
}

// For the set ping thunk note that when false is given the route also sets the users location data to null - make sure that store location data is also wiped from the store
