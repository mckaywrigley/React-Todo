import React from 'react';
import './App.css';
import TodoList from './components/TodoComponents/TodoList.js';
import TodoForm from './components/TodoComponents/TodoForm.js';
import SearchBar from './components/TodoComponents/SearchBar';

const todoData = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todos: [],
      inputText: '',
      searchText: '',
      filteredTodos: []
    };
  }

  componentDidMount() {
    this.setState({
      todos: todoData,
      filteredTodos: todoData
    });
  }

  searchHandler = e => {
    this.inputChange(e);
    const filteredTodos = this.state.todos.filter(todo => {
      if (todo.task.toLowerCase().includes(e.target.value.toLowerCase())) {
        return todo;
      }
    });
    this.setState({
      filteredTodos: filteredTodos
    });
  }

  inputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  addTodo = e => {
    e.preventDefault();
    this.setState({
        todos: [
          ...this.state.todos, {
            task: this.state.inputText,
            id: Date.now(),
            completed: false
          }
        ],
        inputText: ''
    });
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

  clearCompleted = e => {
    e.preventDefault();
    this.setState({
      todos: this.state.todos.filter(todo => !todo.completed)
    });
  }

  render() {
    return (
      <div className="todo-app">
        <h1>Todo App</h1>
        <SearchBar 
          searchText={this.state.searchText}
          handleChange= {this.inputChange}
          searchHandler={this.searchHandler}
        />
        <TodoList 
          todoList = {this.state.todos}
          toggleCompleted = {this.toggleCompleted}
          filteredTodos = {this.state.filteredTodos}
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

