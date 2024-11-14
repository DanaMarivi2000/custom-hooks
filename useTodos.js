import { useEffect, useReducer } from 'react'
import {todoReducer} from './todoReducer'

const initialState=[]

const init=()=>{
    return JSON.parse(localStorage.getItem('todos'))||[];
}


const TodoReducer = () => {
  
    const [todos, dispatch]=useReducer(todoReducer, initialState, init)
  
    useEffect(()=>{
      localStorage.setItem('todos',JSON.stringify(todos))
    },[todos])
  
    
    
    const handleNewTodo=(todo)=>{
      const action={
          type:'[TODO] Add Todo',
          payload:todo
      }
      dispatch(action);
    }
  
    const handleDeleteTodo=(id)=>{
      dispatch({
        type:'[TODO] Remove Todo',
        payload:id
      })
    }
  
    const handleToggleTodo=(id)=>{
        dispatch({
          type:'[TODO] Toggle Todo',
          payload:id
        })
    }  
  
  const todosCount=todos.length;

    const pendingTodosCount=todos.filter(todo=>!todo.done).length; 
  
    return ({
      todos,
      handleDeleteTodo,
      handleNewTodo,
      handleToggleTodo,
      pendingTodosCount,
      todosCount,

 })
}

export default TodoReducer
