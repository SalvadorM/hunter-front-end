import axios from 'axios'

const websiteURL = `https://hunter-app-api.herokuapp.com/`

// const devURL = `http://localhost:8000`
axios.defaults.withCredentials = true;


export default axios.create({
    baseURL: websiteURL,
    withCredentials: true,
  })