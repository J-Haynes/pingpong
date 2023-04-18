import { UserWithFriends } from '../../common/User'
import { Action } from '../actions/userActions'

const initialState = false

function reducer(state = initialState, action: Action): boolean {
  const { type, payload } = action

  switch (type) {
    case 'LOADING':
      return true
    case 'LOADING_DONE':
      return false
    default:
      return state
  }
}

export default reducer
