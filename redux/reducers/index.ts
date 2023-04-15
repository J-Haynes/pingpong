import { combineReducers } from 'redux'
import userReducer from './user'
import friendReducer from './withfriends'

export default combineReducers({
  user: userReducer,
  friends: friendReducer,
})
