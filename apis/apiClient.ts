import request from 'superagent'
import { User, UserData, UserWithFriends } from '../common/User'

const externalBaseUrl = 'https://pingpong-backend.devacademy.nz/api/v1'

// See routes for what each function returns - functions are presented in order
export function fetchFriends(userData: UserData): Promise<UserWithFriends> {
  console.log(userData)
  return request
    .post(`${externalBaseUrl}/userwithfriends`)
    .send(userData)
    .then((res) => {
      console.log(res.body)
      return res.body
    })
}

export function fetchUser(userId: string): Promise<User> {
  return request
    .post(`${externalBaseUrl}/getuser`)
    .send({ userId })
    .then((res) => res.body)
}

export function addUser(userData: UserData): Promise<User> {
  return request
    .post(`${externalBaseUrl}/add`)
    .send(userData)
    .then((res) => res.body)
}

export function sendFriendRequest(userId: string, friendId: string) {
  return request
    .post(`${externalBaseUrl}/addfriend`)
    .send({ userId, friendId })
    .then((res) => res.body)
}

export function confirmFriend(
  userId: string,
  friendId: string
): Promise<number> {
  return request
    .post(`${externalBaseUrl}/confirm`)
    .send({ userId, friendId })
    .then((res) => res.body)
}

export function changePingStatus(
  userId: string,
  setting: boolean,
  location?: string
): Promise<User> {
  return request
    .post(`${externalBaseUrl}/setping`)
    .send({ userId, setting, location })
    .then((res) => {
      console.log(res.body)
      return res.body
    })
}
