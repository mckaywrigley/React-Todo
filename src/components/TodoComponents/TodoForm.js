import React from 'react';
import './TodoForm.css';

const TodoForm = props => {
    return (
        <form action="">
            <input 
                type = "text"
                value = {props.inputText}
                placeholder = "Ex: Cook"
                onChange = {props.handleChange}
                name = "inputText"
            />
            <button onClick={props.addTodo}>Add Todo</button>
            <button onClick={props.clearCompleted}>Clear Completed</button>
        </form>
    );
}

export default TodoForm;