export interface UserData {
  auth_id: string
  name: string
  surname: string
  username: string
  birthday: string
  ping_active: boolean | number
  ping_location?: string | null
<<<<<<< HEAD
  pending?: boolean
=======
  pending?: boolean | number
>>>>>>> bbf8c0e29efc8d3146d44ecd7035f0f064dbbf99
}

export interface User extends UserData {
  id: number
}

export interface UserWithFriends extends UserData {
  friend_data: User[]
}
