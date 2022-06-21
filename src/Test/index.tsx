import React, { useState } from 'react';
import Todo from './Todo';

const Main = () => {

    const [todo, setTodo] = useState<string>("");    
    const [todos, setTodos] = useState<string[]>([]);    

    const handleAdd = () => {
        setTodos([...todos, todo]);
        setTodo("");
    }

    console.log("todos :- ", todos);

    return (
        <>
           <Todo todo={todo} setTodo={setTodo} handleAdd={handleAdd}/>
        </>
    )
}

export default Main;