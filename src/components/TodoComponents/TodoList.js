// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './Todo.js';
import './TodoList.css';

const TodoList = props => {
    return (
        <div className="todoList">
        {props.searchText === ''
        ?   props.todoList.map(todo => {
                return <Todo 
                            todo = {todo}
                            key = {todo.id}
                            toggleCompleted = {props.toggleCompleted}
                        />;
            })
    :        props.filteredTodos.map(todo => {
                return <Todo 
                        todo = {todo}
                        key = {todo.id}
                        toggleCompleted = {props.toggleCompleted}
                        />;
            })
        }
        </div>
    );
}

export default TodoList;