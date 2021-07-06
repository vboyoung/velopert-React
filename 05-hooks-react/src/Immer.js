import produce from 'immer';

const state = {
    number: 1,
    dontChangeMe: 2
  };
  
  const nextState = produce(state, draft => {
    draft.number += 1;
  });
  
  console.log(nextState);
  // { number: 2, dontChangeMe: 2 }


export default Immer