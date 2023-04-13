import request from 'superagent'

const route = 'http://localhost:3000'

export function getAllUsers() {
  // return request
  //   .get(route)
  //   .then((res) => {
  // return res.body
  // //     })
  const arr = [
    {
      id: 1,
      auth_id: 'google-oauth|123456789101',
      name: 'jack',
      surname: 'haynes',
      username: 'jackhaynes',
      birthday: '826545600000',
      ping_active: false,
    },
    {
      id: 2,
      auth_id: 'google-oauth|123456789102',
      name: 'kerre ',
      surname: 'haynes',
      username: 'kerrehaynes',
      birthday: '847281600000',
      ping_active: false,
    },
  ]

  return arr
}
