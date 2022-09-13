import http from './axiosCall'

export async function searchMusic() {
  const result = await http.get(`search?term=John`)
  return result.data
}
