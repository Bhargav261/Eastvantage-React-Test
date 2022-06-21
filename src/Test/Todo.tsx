import { type } from '@testing-library/user-event/dist/type';
import React, { useState } from 'react';
import { useRef } from 'react';

type profileProps = {
    todo: string,
    setTodo: React.Dispatch<React.SetStateAction<string>>,
    handleAdd: () => void;
}

const Todo = ({ todo, setTodo, handleAdd }: profileProps) => {

    const InputRef = useRef<null | HTMLInputElement>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        setTodo(value)
    }

    const onSubmit = (e: React.FormEvent) => {
        setTodo("");
        handleAdd();
        InputRef.current?.focus();
    }

    return (
        <>
            <input type="text" ref={InputRef} value={todo} onChange={handleChange} />
            <button onClick={onSubmit} >Add TODO</button>
        </>
    )
}

export default Todo;