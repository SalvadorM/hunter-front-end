import axios from 'axios'

const websiteURL = `https://hunter-app-api.herokuapp.com/`

export default axios.create({
    baseURL: websiteURL,
    withCredentials: true,
  })