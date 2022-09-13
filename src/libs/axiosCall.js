import axios from 'axios'

const http = axios.create({
  baseURL: 'https://itunes.apple.com/'
})

export default http
