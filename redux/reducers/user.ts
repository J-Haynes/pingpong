import { User } from '../../common/User'
import { Action } from '../actions/userActions'

const initialState: User = {
  id: 1,
  auth_id: 'google-oauth|123456789101',
  name: 'jack',
  surname: 'haynes',
  username: 'jackhaynes',
  birthday: '826545600000',
  ping_active: false,
}

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
