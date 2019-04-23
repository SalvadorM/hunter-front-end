import React from 'react'

import { Link } from 'react-router-dom'

const UserInfoDisplay = (props) => {
    let user = props.student
    return(
        <div className="card">
            <div className="card-body">
            <h5 className="card-title">{user.username}</h5>
            <p className="card-text">name: {user.name}</p>
            <Link to="#" className="btn btn-primary"/>
            </div>
        </div>
    )
}

export default UserInfoDisplay