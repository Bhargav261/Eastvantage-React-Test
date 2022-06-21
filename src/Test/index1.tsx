import React, { useState } from 'react';
import { useRef } from 'react';

const Main = () => {
    const InputRef = useRef<HTMLInputElement | null>(null);

    const [todo, setTodo] = useState<string>("");
    const [todos, setTodos] = useState<string[]>([]);

    const handleChnage = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        setTodo(value)
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setTodo("");
        setTodos([...todos, todo]);
        InputRef.current?.focus();
    }

    return (
        <>

            <input type="text" ref={InputRef} value={todo} onChange={handleChnage} />
            <button onClick={handleSubmit}>Submit</button>

            <div>View Todos</div>
            {
                todos.map((item) => (
                    <div key={item}>{item}</div>
                ))
            }

        </>
    )
}

export default Main;