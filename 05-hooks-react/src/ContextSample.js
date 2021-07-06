import React, {createContext, useContext, useState } from 'react'

const MyContext = createContext('defaultValue')

const Child = () => {
    const text = useContext( MyContext )
    return <><p>안녕하세요? {text} </p></>
}

const Parent = ( {text} ) => {
    return <> <Child text = {text} /> </>
}

const GrandParent = ( {text} ) => {
    return <><Parent text = {text} /> </>
}

function ContextSample() {

    const [value, setValue] = useState(true)

    return ( 
    <>
     <MyContext.Provider value= {value ? 'GOOD' : 'BAD'}>
         <GrandParent /> 
         <button onClick = { () =>  setValue(!value)} > CLICK ME </button>
     </MyContext.Provider>
    </>
    )
}


export default ContextSample 