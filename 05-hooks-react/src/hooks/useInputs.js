import {userState, useCallback } from 'react'

const useInputs = (initialForm) => {

    const [form, setForm] = userState(initialForm)


    const onchange = useCallback (e => {
        const {name, value} = e.target
        setForm (form => ({ ...form, [name]: value}))
    }, [])


    // 폼 초기화
    const reset = useCallback(() => setForm(initialForm), [initialForm])
    
    return [form, onchange, reset]
}


export default useInputs