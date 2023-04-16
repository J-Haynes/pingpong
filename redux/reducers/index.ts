import { combineReducers } from 'redux'
import friendReducer from './withfriends'

export default combineReducers({
  friends: friendReducer,
})
