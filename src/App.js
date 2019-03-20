import React from 'react';
import './App.css';
import TodoList from './components/TodoComponents/TodoList.js';
import TodoForm from './components/TodoComponents/TodoForm.js';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todos: todoData,
      inputText: ''
    };
  }

  inputChange = event => {
    this.setState(
      {
      inputText: event.target.value
      }
    );
  };

  addTodo = event => {
    event.preventDefault();
    this.setState(
      {
        todos: [
          ...this.state.todos, {
            task: this.state.inputText,
            id: Date.now(),
            completed: false
          }
        ],
        inputText: ''
      }
    );
  };

  toggleCompleted = id => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if(id === todo.id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      })
    });
  }

  clearCompleted = event => {
    event.preventDefault();
    this.setState({
      todos: this.state.todos.filter(todo => !todo.completed)
    });
  }

  render() {
    return (
      <div className="todo-app">
        <h1>Todo App</h1>
        <TodoList 
          todoList = {this.state.todos}
          toggleCompleted = {this.toggleCompleted}
        />
        <TodoForm 
          addTodo = {this.addTodo}
          handleChange = {this.inputChange}
          inputText = {this.state.inputText}
          clearCompleted = {this.clearCompleted}
        />
      </div>
    );
  }
}

export default App;

