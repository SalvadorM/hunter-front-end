import axios from 'axios'

// const websiteURL = `https://hunter-app-api.herokuapp.com/`

const devURL = `http://localhost:8000`


export default axios.create({
    baseURL: devURL,
    withCredentials: true,
  })