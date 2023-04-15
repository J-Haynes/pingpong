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
export function displayUser(userId: string): ThunkAction {
  return (dispatch) => {
    return fetchUser(userId)
      .then((user: User) => {
        dispatch(addUserToState(user))
      })
      .catch((err) => console.log(err))
  }
}

//
export function displayUserWithFriends(userId: string): ThunkAction {
  return (dispatch) => {
    return fetchFriends(userId)
      .then((userWithFriends) => {
        dispatch(addUserWithFriendsToState(userWithFriends))
      })
      .catch((err) => console.log(err))
  }
}
