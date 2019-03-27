import axios from 'axios'

const websiteURL = `https://hunter-app-api.herokuapp.com/`
const devURL = ``

export default axios.create({
    baseURL: websiteURL,
    withCredentials: true,
  })