import { useState } from "react"

export const useForm = (initialState={}) => {
    const [data,setData] =useState(initialState)

    const handleChange =(ev)=>{
        let target = ev.target
        const {name, type, checked, value} = target
        setData({
            ...data,
            [name]: (type=='checkbox'|| type=='radio') ? checked:value,
        })
    }

    return[
        data, //valores
        handleChange //el evento para obtener los valores
    ]
}