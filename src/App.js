import React, { Component } from 'react';
import './App.css';
import TodoItem from './components/ToDo';
import toDosData from "./components/toDosData";

class App extends React.Component {
  constructor() {
      super()
      this.state = {
          todos: toDosData
      }
  }
  
  handleChange = (id) => {
    this.setState(prevState => {
        const updatedTodos = prevState.todos.map(todo => {
            if (todo.id === id) {
                todo.completed = !todo.completed
            }
            return todo
        })
        return {
            todos: updatedTodos
        }
    })
}
  

  render() {
      const todoItems = this.state.todos.map(item => <TodoItem handleChange = {this.handleChange} key={item.id} item={item}/>)
      
      return (
          <div className="todo-list">
              {todoItems}
          </div>
      )    
  }
}

export default App
