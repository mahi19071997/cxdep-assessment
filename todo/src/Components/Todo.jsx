import React from 'react'
import { Navbar } from './Navbar'
import { TodoInput } from './TodoInput'
import { TodoList } from './TodoList'
import { useDispatch, useSelector } from "react-redux";
import {getTodosData,addTodosdata, toggleTodo, deleteTodo} from "./../redux/appRedux/action.js";
import styled from "styled-components";
import axios from "axios";



const Cont= styled.div`
background-image: linear-gradient(#c6c5d6, #9b99bd, #3832a8);
min-height:100vh;
background-size:cover;
background-repeat:no-repeat;
font-family: 'Josefin Sans', sans-serif;`
export function Todo() {
  const dispatch = useDispatch();
  const { todos } = useSelector(state => ({ todos: state.app.todos, isloading: state.app.isLoading, isError: state.app.isError }));
  const handleToggle = (id,status) => {
    dispatch(toggleTodo(id,status))
  };
  const handleDelete = id => {
    dispatch(deleteTodo(id))
  };
  const onclick = (payload) => {
    dispatch(addTodosdata(payload))
  }
  React.useEffect(() => {
    dispatch(getTodosData())
  }, []);
  return (
    <Cont>
      <Navbar/>
      <TodoInput onclick={onclick}/>
      <div>
        {todos.map((el) => {
          return <TodoList handleToggle={handleToggle}  handleDelete={handleDelete} {...el} key={el.id} />;
        })}
      </div>      
    </Cont>
  )
}
