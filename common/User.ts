export interface UserData {
  auth_id: string
  name: string
  surname: string
  username: string
  birthday: string
  ping_active: boolean | number
}

export interface User extends UserData {
  id: number
}

export interface UserWithFriends extends UserData {
  friend_data: User[]
}
