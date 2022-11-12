import { useState } from "react"
import type { ITodo } from "../types/todoType"

export const useTodoStore = () => {
    const [newTask, setNewTask] = useState<string>("")
    
    const [newTaskValue, setNewTaskValue] = useState<string>("")
    
    const [todos, setTodos] = useState<ITodo[]>([
        {
            id:1,
            task:"badminton",
            isCompleted: false,
            isEditing: false
        },
        {
            id:2,
            task:"basketball",
            isCompleted: false,
            isEditing: false
        },
        {
            id:3,
            task:"football",
            isCompleted: false,
            isEditing: false
        },
    ])

    function addTodo(){
        setTodos([{id: Math.random(), task: newTask, isCompleted: false, isEditing: false}, ...todos]);
    }

    function removeTodo(id: number) {
        setTodos(todos.filter((item) => item.id !== id));
    }

    function toggleComplete(id: number) {
        const newTodos = todos.map((item) => {
            if (item.id === id) {
                return {...item, isCompleted: !item.isCompleted};
            }

            return item;
        })   

        setTodos(newTodos);
    }

    function toggleEdit(todo: ITodo) {
        const newTodos = todos.map((item) => {
            if (item.id === todo.id) {
                return {...item, isEditing: true};
            }

            return item;
        })

        setTodos(newTodos);
        setNewTaskValue(todo.task);
    }

    function handleDoneEdit(todo: ITodo, newTaskValue: string) {
        const newTodos = todos.map((item) => {
            if (item.id === todo.id) {
                item.task = newTaskValue;
                return {...item, isEditing: false};
            }

            return item;
        })

        setTodos(newTodos)
    }
    
    return {
        newTask,
        setNewTask,
        newTaskValue,
        setNewTaskValue,
        todos,
        addTodo,
        removeTodo,
        toggleComplete, 
        toggleEdit, 
        handleDoneEdit,
    }
}
