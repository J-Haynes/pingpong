import request from 'superagent'

const placesBaseUrl = 'https://localhost:3000/google/places'

export function fetchGoogleLocationSuggestions(input: string): Promise<any> {
  return request
    .get(placesBaseUrl)
    .query({ input: 'Wellington' })
    .set('Accept', 'application/json')
    .then((res) => {
      console.log(res.body)
    })
    .catch((err) => {
      console.log(err.message)
    })
}
