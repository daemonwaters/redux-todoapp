import { createSlice } from "@reduxjs/toolkit"
export const todosSlice = createSlice({
    name:'todos',
    initialState : [],
    reducers : {
      addTodo : (state,action)=>{
        return [...state,{
          text:action.payload.text,
          id:action.payload.id
        }]
      },
      removeTodo : (state,action)=>{
        return state.filter((item)=> item.id !== action.payload.id)
      }
    }
  })