import { User } from '../../common/User'
import { Action } from '../actions/userActions'

const initialState = {} as User

function reducer(state = initialState, action: Action): User {
  const { type, payload } = action

  switch (type) {
    case 'FETCH_USER':
      return payload
    default:
      return state
  }
}

export default reducer
