import React, { Component } from 'react'

function TodoItem(props){
    const completedStyle = {
        fontStyle: "italic",
        color: "#cdcdcd",
        textDecoration: "line-through",
        transition: "color 2s"
    }
    return(
    <div className="todo-item">
    <input type = "checkbox" 
           checked={props.item.completed}
           onChange={() => props.handleChange(props.item.id)}
           >
    </input>
    <p style = {props.item.completed ? completedStyle : null}>{props.item.text}</p>
    </div>
  )
}
  


export default TodoItem;
