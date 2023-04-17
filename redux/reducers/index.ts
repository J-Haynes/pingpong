import { combineReducers } from 'redux'
import friendReducer from '../reducers/withFriends'

export default combineReducers({
  friends: friendReducer,
})
