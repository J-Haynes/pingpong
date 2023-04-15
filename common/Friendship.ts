export interface Friendships {
  id: number
  user_one_id: string
  user_two_id: string
  pending: boolean
}

export interface FriendDatum {
  id: number
  user_one_id: string
  user_two_id: string
  pending: number
  auth_id: string
  name: string
  surname: string
  username: string
  birthday: string
  ping_active: number
}
