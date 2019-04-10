import axios from 'axios'

const websiteURL = `https://classhub-hunter.herokuapp.com/ `
const devURL = ``

export default axios.create({
    baseURL: websiteURL,
    withCredentials: true,
  })