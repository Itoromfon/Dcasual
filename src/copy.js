import React from "react"
import TodoItem from "./TodoItem"
import todoData from "./todoData"

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            todos: todoData
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(id) {
       this.setState(preVstate => {
           const updatedTodos = preVstate.todos.map(function(todoitem) {
               if (todoitem.id === id) {
                   todoitem.completed = !todoitem.completed
               }
               return todoitem
           })
           return {
               todos: updatedTodos
           }
       })
    }
    render() {
        const todoItems = this.state.todos.map(item => {
            return (
                <TodoItem key={item.id} item={item} handleChange={this.handleChange} />
            )
        })
        return (
            <div className="todo-list">
            {todoItems}
            </div>
        )
    }
}

export default App