import axios from 'axios'

// const websiteURL = `https://hunter-app-api.herokuapp.com/`
const devURL = `http://localhost:8000`
// manually set the cookie header for mobile
const Axios = axios.create({
    baseURL: devURL,
    withCredentials: true,
  })


  
Axios.defaults.withCredentials = true
 
export default Axios