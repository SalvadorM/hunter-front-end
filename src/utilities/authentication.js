module.exports =   {
    /*
    aunthenticate user 
    @@Params
    @username
    @password
    @cd         callback functions
    */
   authenticate(username, password, cb){
    const user ={ username, password }
    //login user using functions
    //setting localstorage to inform  user is authenticated
    //set rest of info
    localStorage.setItem('isAuthenticated', 'true')
    localStorage.setItem('error', 'false')
    //callback 
    cb()
   },

   /*
    sign out user 
    @cd         callback functions ??
    */
   signOut(){
    localStorage.clear()
   }
}