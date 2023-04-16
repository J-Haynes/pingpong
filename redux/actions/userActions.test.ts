import nock from 'nock'
import {
  addUserToState,
  addUserWithFriendsToState,
  loadUser,
  loadUserWithFriends,
} from './userActions'
import { User } from '../../common/User'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type SimpleThunk = (dispatch: any) => Promise<any>

describe('addUserToState', () => {
  it('returns the correct Action', () => {
    const user = {
      id: 1,
      auth_id: 'fake_auth_id',
      name: 'bianca',
      surname: 'patchett',
      username: 'beepatchett',
      birthday: '785481400000',
      ping_active: false,
    }

    const expected = {
      type: 'FETCH_USER',
      payload: user,
    }

    const actual = addUserToState(user)

    expect(actual).toEqual(expected)
  })

  it('Thunk dispatches Action on successful API call', async () => {
    const user = {
      id: 1,
      auth_id: 'fake_auth_id',
      name: 'bianca',
      surname: 'patchett',
      username: 'beepatchett',
      birthday: '785481400000',
      ping_active: false,
    }

    const scope = nock('https://pingpong-backend.devacademy.nz/api/v1')
      .get('/getuser')
      .reply(200, user)

    const expected = {
      type: 'FETCH_USER',
      payload: user,
    }

    const actual = addUserToState(user)

    const thunk = loadUser(user.auth_id) as SimpleThunk
    const dispatch = jest.fn()

    await thunk(dispatch)

    expect(dispatch).toHaveBeenCalledWith(expected)
    expect(scope.isDone()).toBe(true)
  })
})

describe('addUserWithFriendsToState', () => {
  it('returns the correct Action', () => {
    const userWithFriendsToAdd = {
      id: 1,
      auth_id: 'fake_auth_id',
      name: 'bianca',
      surname: 'patchett',
      username: 'beepatchett',
      birthday: '785481400000',
      ping_active: false,
      friend_data: [] as User[],
    }

    const expected = {
      type: 'FETCH_FRIENDS',
      payload: userWithFriendsToAdd,
    }

    const actual = addUserWithFriendsToState(userWithFriendsToAdd)

    expect(actual).toEqual(expected)
  })

  it.todo('Thunk dispatches Action on successful API call')
})

describe('loadUser', () => {
  it.todo('returns the correct Action')
  it.todo('Thunk dispatches Action on successful API call')
})

describe('loadUserWithFriends', () => {
  it.todo('returns the correct Action')
  it.todo('Thunk dispatches Action on successful API call')
})
