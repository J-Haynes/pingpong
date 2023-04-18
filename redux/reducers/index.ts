import { combineReducers } from 'redux'
import friendReducer from '../reducers/withFriends'
import loadingReducer from './loading'

export default combineReducers({
  friends: friendReducer,
  loading: loadingReducer,
})
