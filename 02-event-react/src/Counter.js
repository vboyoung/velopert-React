import React, {useState} from 'react';

function Counter() {

    const [number, setNumber] = useState(0)

    const onIncrease = () => {
        setNumber(number + 1)
        
    }
    const onDecrease = () => {
        setNumber(number - 1)
    }


  return (
    <div>
      <h1>0</h1>
      <button onClick = {onIncrease}>+1</button>  {/* JSX는 함수를 넣어주는 것이지 함수를 호출해주는것이 아님  onIncrease() 쓰지말기 */}
      <button onclick = {onDecrease}>-1</button>
    </div>
  );
}

export default Counter;