//import user functions 
import { userLogin, userLogOut } from '../scenes/Sign/functions/login'

module.exports = {
    /*
    aunthenticate user 
    @@Params
    @username
    @password
    @cd         callback functions
    */
   async authenticate(username, password, cb){
        const user ={ username, password }
        //login user using functions
        //setting localstorage to inform  user is authenticated
        //set rest of info
        try{
            const loggedUser = await userLogin(user)
            console.log(loggedUser)
            localStorage.setItem('isAuthenticated', 'true')
            localStorage.setItem('error', 'false')
            //callback 
            cb()
        }catch(err) {
            localStorage.setItem('isAuthenticated', 'false')
            localStorage.setItem('error', 'something happened')
            cb()
            console.log(err)
        }

 
   },
   /*
    sign out user 
    @cd         callback functions ??
    */
   async signOut(){
        try{
            const resLogOut = await userLogOut()
            console.log(resLogOut)
            localStorage.clear()
        }
        catch(err){
            console.log(err)

        }
   },

}