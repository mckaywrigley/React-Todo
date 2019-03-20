import React from 'react';
import './TodoForm.css';

const TodoForm = props => {
    return (
        <form className="todoForm" action="">
        <div className="addGroup">
            <input 
                type = "text"
                value = {props.inputText}
                placeholder = "Ex: Cook"
                onChange = {props.handleChange}
                name = "inputText"
            />
            <button className="add" onClick={props.addTodo}><p>Add Todo</p><i className="fas fa-plus"></i></button>
        </div>
            
            <button className="clear" onClick={props.clearCompleted}><p>Clear Completed</p><i className="fas fa-trash-alt"></i></button>
        </form>
    );
}

export default TodoForm;