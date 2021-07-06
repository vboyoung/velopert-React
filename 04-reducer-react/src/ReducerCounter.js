import React, {useReducer} from 'react';


const reducer = (state, action) => {
    switch (action.type) {
        case 'INCREMENT' :
            return state + 1

        case 'DECREMENT' :
            return state -1

        default :
         throw new Error('Unhandled Action')
    }
}




function ReducerCounter() {

    const [number, dispatch] = useReducer(reducer, 0)


    const onIncrease = () => {
       dispatch({
        type: 'INCREMENT'
       })
    }
    const onDecrease = () => {
        dispatch({
            type: 'DECREMENT'
           })
    }


  return (
    <div>
      <h1>{number}</h1>
      <button onClick = {onIncrease}>+1</button>  {/* JSX는 함수를 넣어주는 것이지 함수를 호출해주는것이 아님  onIncrease() 쓰지말기 */}
      <button onClick = {onDecrease}>-1</button>
    </div>
  );
}

export default ReducerCounter