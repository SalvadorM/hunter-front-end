//import user functions 
import { userLogin, userLogOut } from '../scenes/Sign/functions/login'


/*
aunthenticate user 
@@Params
@user schema
*/
export const authenticateUser = async (user) => {
    
    //login user using functions
    //setting localstorage to inform  user is authenticated
    //set rest of info
    try{
        const loggedUser = await userLogin(user)
        const userData = loggedUser.data

        //set info in localstorage 
        localStorage.setItem('userId', userData.id)
        localStorage.setItem('username', userData.username)
        localStorage.setItem('email',userData.email)
        localStorage.setItem('isAuthenticated', 'true')
        localStorage.setItem('error', 'false')
        
        return loggedUser
    }catch(err) {
        //return error
        localStorage.setItem('isAuthenticated', 'false')
        localStorage.setItem('error', 'something happened')
        throw err
    }

 
   }
/*
sign out user 
*/
export const signOut = async () => {
    try{
        const resLogOut = await userLogOut()
        return true            
        localStorage.clear()
    }
    catch(err){
        console.log(err)
        throw err
    }
}

export const isAuthenticated = () => {
    return (localStorage.getItem('isAuthenticated') === 'true')? true : false
}