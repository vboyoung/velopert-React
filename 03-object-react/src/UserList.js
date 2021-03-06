import React , { useEffect } from 'react'

const User = React.memo( ({ user, onRemove, onToggle }) => {

    const { username, email, id, active } = user

    return (
        <>          
           <p>
               <b style={{
                   color: active ? 'green' : 'black',
                   cursor: 'pointer'
               }}
                onClick={() => onToggle(id)}
                >

                {username}
               </b>
               &nbsp; 
               <span>({email}) <br /></span>
            </p> 
            
            <button onClick={ () => onRemove(id) }>삭제</button> {/* 꼭 함수를 넣어줘야 한다. */}
        </>
    )
} )


const UserList =  ({ users, onRemove, onToggle  }) => {
    
    const { username, email, id } = users
    return (
        <>
            {users.map(
                user => (
                    <User 
                        user={user} 
                        key={id} 
                        onRemove={onRemove} 
                        onToggle={onToggle}
                 />
                )
            )}
        </>
    )
}



export default React.memo(UserList, (preProps, nextProps) => nextProps === preProps.users)