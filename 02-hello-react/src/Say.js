import React, {useState} from 'react'

const Say = () => {

    const [message, setMessage] = useState('');

    const onclickEnter = () => setMessage('안녕하세요')
    const onClickLeave = () => setMessage('안녕히가세요')


    const [color, setColor] = useState('black')

    return (
        <>

        {/* text */}
        <button onClick={onclickEnter}> 입장 </button>
        <button onClick={onClickLeave}> 퇴장</button>



        {/* Color */}
        <h1 style= { {color} }> {message} </h1>

        <button style = { {color: 'red'} } onClick={() => setColor('red')} > 빨간색 </button>
        <button style = { {color: 'green'} } onClick={() => setColor('green')} > 초록색 </button>
        <button style = { { color: 'blue' } } onClick={() => setColor('blue')} > 파란색 </button>

        </>

    )
}


export default Say
