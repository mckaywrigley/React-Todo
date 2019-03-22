import React from 'react';
import './Todo.css';

const Todo = props => {
    return (
        <p 
            className = {props.todo.completed === false ? "todo-item" : "todo-item-completed" }
            onClick = {() => props.toggleCompleted(props.todo.id)}
        >
            {props.todo.task}
        </p>
    );
}

export default Todo;