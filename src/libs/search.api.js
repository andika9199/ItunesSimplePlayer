import http from './axiosCall'

export async function searchMusic(term = 'john john john') {
  const final = term.replace(/\s/g, '+')
  const result = await http.get(`search?term=${final}`)
  return result.data
}
