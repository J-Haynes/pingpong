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
    default:
      return state
  }
}

export default reducer
