import { combineReducers } from 'redux'
import userReducer from './user'
import friendReducer from './withFriends'

export default combineReducers({
  user: userReducer,
  friends: friendReducer,
})
