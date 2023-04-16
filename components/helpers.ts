import { GoogleData } from '../common/Google'
import { UserData } from '../common/User'

export function capitalise(word: string): string {
  return word.substring(0, 1).toUpperCase() + word.substring(1)
}

export function createUsername(email: string): string {
  return email.split('@')[0]
}

export function addNewUser(googleData: GoogleData): UserData {
  return {
    auth_id: googleData.id,
    name: googleData.given_name,
    surname: googleData.family_name,
    username: createUsername(googleData.email),
    birthday: new Date().toDateString(),
    ping_active: false,
  }
}

export function firstLetter(word: string): string {
  return word.substring(0, 1).toUpperCase()
}
