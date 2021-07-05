import React, {useState, useRef} from 'react'

const InputTwo = () => {
    
    const [inputs, setInputs] = useState({
        name: '',
        nickname: ''
    })


    const nameInput = useRef() //dom에 직접 접근하기 
    
    const {name, nickname} = inputs //비구조화 할당을 통해 값 추출

   
    const onChange = (e) => {
      console.log(e.target.name) //input name
      console.log(e.target.value) //input value


      const { name, value } = e.target //e.tart.value 추출

      setInputs({
        ...inputs, // 기존 input 객체 복사
        [name]: value //name 키를 가진 값을 value로 설정
      })
  
    }

    
   const onReset = () => {
        setInputs({
            name: '',
            nickname: ''            
        })
        nameInput.current.focus() 
   }


    return (
        <>
        
        <input name="name" onChange={onChange} value={name} ref={nameInput} placeholder="이름" />
        <input name="nickname" onChange={onChange} value={nickname} placeholder="닉네임" />
        <button onClick={onReset}>초기화</button>
        
         <p>
            <b>값: </b>
            {name} ({nickname})
            <br />
            </p>           
        </>
    )

}

export default InputTwo