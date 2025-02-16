import './App.css'
import {TodolistItem} from "./TodolistItem.tsx";
import {useState} from "react";

export type FilterPropsType = 'all' | 'active' |'completed'

export type TasksPropsType = {
    id: number,
    title: string,
    isDone: boolean
}

export const App = () => {

    const [filter, setFilter] = useState<FilterPropsType>("all")

    const [tasks, setTasks] = useState<TasksPropsType[]>(
        [
            {id: 1, title: 'HTML&CSS', isDone: true},
            {id: 2, title: 'JS', isDone: true},
            {id: 3, title: 'ReactJS', isDone: false},
            {id: 4, title: 'Redux', isDone: false},
            {id: 5, title: 'Typescript', isDone: false},
            {id: 6, title: 'RTK query', isDone: true}
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

    const deleteTask = (taskId: number) => {
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
                          changeFilter={changeFilter}/>
        </div>
    )
}
