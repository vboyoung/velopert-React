import React from 'react'

const User = ({user}) => {

  //  if(!user) return null

    return (
        <>
            <div>
                <b>ID</b>: {user.id} 
            </div>
            <div>
                <b>Username</b> : {user.username}
            </div>


        </>
    )
}



export default User
