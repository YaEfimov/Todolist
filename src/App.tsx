import './App.css'
import {TodolistItem} from "./TodolistItem.tsx";

export type TasksPropsType = {
    id: number,
    title: string,
    isDone: boolean
}

export const App = () => {

    const tasks1: TasksPropsType[] = [
        {id: 1, title: 'HTML&CSS', isDone: true},
        {id: 2, title: 'JS', isDone: true},
        {id: 3, title: 'ReactJS', isDone: false},
        {id: 4, title: 'Redux', isDone: false},
        {id: 5, title: 'Typescript', isDone: false},
        {id: 6, title: 'RTK query', isDone: true}
    ]

    const tasks2: TasksPropsType[] = [
    ]

    return (
        <div className="app">
            <TodolistItem title="What to learn" tasks={tasks1} date="15/02/2025"/>
            <TodolistItem title="Songs" tasks={tasks2}/>
        </div>
    )
}
