export interface UserData {
  auth_id: string
  name: string
  surname: string
  username: string
  birthday: string
  ping_active: boolean
}

export interface User extends UserData {
  id: number
}

export interface UserWithFriends extends User {
  friend_data: User[]
}
