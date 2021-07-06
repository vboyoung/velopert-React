import React, { useRef, useState, useMemo, useCallback } from 'react'

import IterationArray from "./IterationArray";
import IterationObject from "./IterationObject";

import UserList from "./UserList";
import CreateUser from './CreateUser';
import ReducerCounter from './ReducerCounter';

const countActiveUsers = (users) => {
  console.log('활성 사용자 수를 세는 중..')

  // user.active 한 값이 true 인 값들만 가져 오겠다.
  return users.filter(user => user.active).length
}


const App = () => {

    //inputs가 바뀔때만 Rerendering, 그렇지 않다면 기존에  로드된 함수를 재사용하게 된다.
    const [inputs, setInputs] = useState({
      username: '',
      email: ''
    }) 

    const {username, email} = inputs

    const onChange = useCallback(e => {
      const {name, value} = e.target
      setInputs({
        ...inputs,
        [name] : value
      })
    }, [inputs])

  
    const [users, setUsers] = useState([
      {
        id: 1,
        username: 'velopert',
        email: 'public.velopert@gmail.com',
        active: true
      },
      {
        id: 2,
        username: 'tester',
        email: 'tester@example.com',
        active: false
      },
      {
        id: 3,
        username: 'liz',
        email: 'liz@example.com',
        active: false
      }
    ])



    const nextId = useRef(4) //Rerendering 없이 값을 기억해서 사용하고 싶을때, 이 값이 바뀐다고 해서 component가 Rerendering되지 않는다.

    const onCreate = useCallback(() => {

      const user = {
        id: nextId.current,
        username,
        email
      }

      // setUsers([...users, user])
      setUsers(users => users.concat(user))


      
      setInputs({
        username: '',
        email: ''
      })

      console.log(nextId.current) //4
      nextId.current += 1 

    }, [username, email])


    const onRemove = useCallback(id => {
      //파라미터로 들어온 id가 기존 user.id와 일치 하지 않는 것들만 필터링 한뒤 새로운 배열로 만들어서 넣어 주겠다.
      setUsers(users => users.filter(user => user.id !== id))
    })


    const onToggle = useCallback( id => {
      // id가 일치한다면 update, 아니면 기존에 값을 그대로 사용하겠다. 
      setUsers(users => users.map(
        user => user.id === id ? {...user, active: !user.active} : user

      ))
    })

  const count = useMemo(() => countActiveUsers(users), [users])

  return (
    <> 
      <IterationArray />
      <IterationObject />

      <br />
      <br />
      <br />



      {/* 배열에 항목 추가하기 */} 
      <CreateUser
           username={username} 
           email={email} 
           onChange={onChange}
           onCreate={onCreate} />

      <UserList users={users} onRemove={onRemove} onToggle= {onToggle}/> 
      <div>활성 사용자 수 : {count} </div>



      <br />
      <br />
      <br />

      <ReducerCounter />
    </>
  )
}

export default App;
