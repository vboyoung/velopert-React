import React, { useRef, useState } from 'react'

import IterationArray from "./IterationArray";
import IterationObject from "./IterationObject";

import UserList from "./UserList";
import CreateUser from './CreateUser';


const App = () => {

    const [inputs, setInputs] = useState({
      username: '',
      email: ''
    }) 

    const {username, email} = inputs

    const onChange = e => {
      const {name, value} = e.target
      setInputs({
        ...inputs,
        [name] : value
      })
    }

  
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

    const onCreate = () => {

      const user = {
        id: nextId.current,
        username,
        email
      }

      // setUsers([...users, user])
      setUsers(users.concat(user));


      
      setInputs({
        username: '',
        email: ''
      })

      console.log(nextId.current) //4
      nextId.current += 1 

    }


    const onRemove = id => {
      //파라미터로 들어온 id가 기존 user.id와 일치 하지 않는 것들만 필터링 한뒤 새로운 배열로 만들어서 넣어 주겠다.
      setUsers(users.filter(user => user.id !== id))
    }


    const onToggle = id => {
      // id가 일치한다면 update, 아니면 기존에 값을 그대로 사용하겠다. 
      setUsers(users.map(
        user => user.id === id ? {...user, active: !user.active} : user

      ))
    }



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
    


    </>
  )
}

export default App;
