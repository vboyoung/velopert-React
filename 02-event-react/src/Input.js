import React, {useState} from 'react'

const Input = () => {
    
    const [text, setText] = useState('')
    
   
    const onChange = (e) => {
      console.log(e.target.value) //input value
      setText(e.target.value)
    }

    const onReset = () => {
        setText('')
    }

    return (
        <>
        
        <input onChange={onChange}  value={text} placeholder="이름" />
        <button onClick={onReset}>초기화</button>
        
         <p> <b>값: </b> <br /> {text}</p>           
        </>
    )

}

export default Input