import { createContext, useContext } from "react"

// context to handle the states globally for each todo object

export const TodoContext = createContext({
    todos: [
        {
            id: 1,
            todo: "Todo msg",
            completed: false,
        }
    ],

    // functions to add, update, delete and complete or not 

    addTodo: (todo) => { },
    updatedTodo: (id, todo) => { },
    deleteTodo: (id) => { },
    toggleComplete: (id) => { }
})

// created a new hook to render todocontext iinside of use context

export const useTodo = () => {
    return useContext(TodoContext)
}

// rendered the provider 

export const TodoProvider = TodoContext.Provider