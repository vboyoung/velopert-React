import React , { useEffect } from 'react'

const User = React.memo( ({ user, onRemove, onToggle }) => {

    const { username, email, id, active } = user

    /*  
    //비어있는 배열 일때 
    useEffect(() => {
        console.log('컴포넌트가 화면에 나타남')
      
        // MOUNT 될때 사용할 수 있는 것들
        // UI가 화면에 나올때이므로 DOM에 접근 할수 있다.
    
        // props => state
        // REST API
        // Libray 사용할 때 
        // setInterval, setTimeOut

        return () => {

        // UNMOUNT 될때 사용할 수 있는 것들
        
        // setInterval, setTimeOut 제거
        // 라이브러리 인스턴스 제거 
           
        console.log('컴포넌트가 화면에서 사라짐')

        }

    }, []) 
    */
    
 
    //비어있지 않은 배열 일때 :  해당 값이 바뀔 때마다 값이 호출됨 
    useEffect(() => {
        console.log('user 값이 설정 됨')
        console.log(user)

        //close()
        return () => {     
            console.log('user 값이 바뀌기 전')
            console.log(user)
        }
    }, [user]) 
    

    /*
    //deps 배열을 생략하는 경우
    useEffect(() => {
        console.log(user)
    }) 
    */

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