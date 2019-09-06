import React, {Component} from 'react'

//react router 
import {Redirect} from 'react-router-dom'

//images
// import classPictureBG from '../../../images/class-picture.jpeg'

class LandingMain extends Component {

    render(){
        // return(
        //     <div className="jumbo-container">

        //         <div className="img-container"><img src={classPictureBG} alt="class picture" /></div>
                
        //         <div className="info-section">
        //             <div className="jumbotron jumbotron-main">
        //                 <p className="display-6">Classhub</p>
        //             </div>
        //         </div>
                
        //     </div>
        // )
        return(<div><Redirect to="/home" /></div>)
    }
}

export default LandingMain