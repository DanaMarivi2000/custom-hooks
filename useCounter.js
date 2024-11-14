import { useState } from "react"

export const useCounter=(initialValue=10)=>{

    const[counter,setCounter]=useState(initialValue)    

    const increment=()=>{
        setCounter((current)=>current+1)
    }

    const decrement=()=>{
        setCounter((current)=>current>0?current-1:0)
    }

    const reset=()=>{
        setCounter(initialValue)
    }
    return{

        counter,
        increment,
        decrement,
        reset,
    }
}