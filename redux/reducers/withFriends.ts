import { UserWithFriends } from '../../common/User'
import { Action } from '../actions/userActions'

const initialState = {} as UserWithFriends

function reducer(state = initialState, action: Action): UserWithFriends {
  const { type, payload } = action

  switch (type) {
    case 'FETCH_FRIENDS':
      return payload
    case 'SET_PING':
      return { ...state, ping_active: payload }
    case 'SET_LOCATION':
      return { ...state, ping_location: payload }
    case 'CONFIRM_FRIEND':
      const confirmedState = state.friend_data.map((friend) => {
        if (friend.auth_id === payload) {
          friend.pending = false
        }
        return friend
      })
      return { ...state, friend_data: confirmedState }
    case 'DENY_FRIEND':
      const deniedState = state.friend_data.filter(
        (friend) => friend.auth_id !== payload
      )
      return { ...state, friend_data: deniedState }
    case 'ADD_FRIEND':
      return { ...state, payload }
    default:
      return state
  }
}

export default reducer
