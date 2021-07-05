import React from 'react'
import MyComponet from './MyComponet';
import Say from './Say'
import Counter from './Counter'
import Input from './Input'
import InputTwo from './InputTwo';
import EventPractice from './EventPractice';

function App() {
  
  const name = '리액트'
  const name2 = '리액트'

  return (
    <>
      { name === '리액트' ? ( <h1>리액트입니다.</h1> ) : ( <h2>리액트가 아닙니다.</h2> ) }
      { name2 === '리액트' ? ( <h1>리액트입니다.</h1> ) : null }
      <MyComponet name="React" favoriteNumber={1}>리액트</MyComponet>

      <br />
      <br />
      <Say />

      <br />
      <br />
      <Counter />

      <br />
      <br />
      <Input />

      <br />
      <br />
      <InputTwo />

      <br />
      <br />
      <EventPractice />
    </>
  );
}

export default App;
