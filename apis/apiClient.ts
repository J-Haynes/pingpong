import request from 'superagent'

const route = 'http://localhost:3000'

export function fetchAllFriends() {
  // return request
  //   .get(route)
  //   .then((res) => {
  // return res.body.friend_data
  // //     })
  const arr = [
    {
      id: 2,
      auth_id: 'google-oauth|123456789102',
      name: 'kerre ',
      surname: 'haynes',
      username: 'kerrehaynes',
      birthday: '847281600000',
      ping_active: true,
    },
    {
      id: 3,
      auth_id: 'google-oauth|123456789103',
      name: 'matt',
      surname: 'marano',
      username: 'mattmarano',
      birthday: '770904000000',
      ping_active: false,
    },
    {
      id: 4,
      auth_id: 'google-oauth|123456789104',
      name: 'ryan',
      surname: 'kendrick',
      username: 'ryankendrick',
      birthday: '740491200000',
      ping_active: false,
    },
  ]

  return arr
}
