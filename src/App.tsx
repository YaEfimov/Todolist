import './App.css'
import {TodolistItem} from "./TodolistItem.tsx";
import {useState} from "react";
import {v1} from 'uuid';

export type FilterPropsType = 'all' | 'active' |'completed'

export type TasksPropsType = {
    id: string,
    title: string,
    isDone: boolean
}

export const App = () => {

    const [filter, setFilter] = useState<FilterPropsType>("all")

    const [tasks, setTasks] = useState<TasksPropsType[]>(
        [
            {id: v1(), title: 'HTML&CSS', isDone: true},
            {id: v1(), title: 'JS', isDone: true},
            {id: v1(), title: 'ReactJS', isDone: false},
            {id: v1(), title: 'Redux', isDone: false},
            {id: v1(), title: 'Typescript', isDone: false},
            {id: v1(), title: 'RTK query', isDone: true}
        ]
    )

    let filtredTasked = tasks

    if (filter === "active") {
        filtredTasked = tasks.filter((task) => task.isDone)
    }
    if (filter === "completed") {
        filtredTasked = tasks.filter((task) => !task.isDone)
    }

    const changeFilter = (filterValue: FilterPropsType) => {
        setFilter(filterValue)
    }

    const createTask = (title: string) => {
        const newTask = {id: v1(), title: title, isDone: false}
        setTasks([newTask, ...tasks])
    }

    const deleteTask = (taskId: string) => {
        const filterTasks = tasks.filter((task) => {
            return task.id !== taskId
        })
        setTasks(filterTasks)
    }

    return (
        <div className="app">
            <TodolistItem title="What to learn"
                          tasks={filtredTasked}
                          date="15/02/2025"
                          deleteTask={deleteTask}
                          changeFilter={changeFilter}
                          createTask={createTask}/>
        </div>
    )
}
