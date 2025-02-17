import {FilterPropsType, TasksPropsType} from './App.tsx';
import {Button} from './Button.tsx';
import {useRef} from 'react';

type TodolistItemPropsType = {
    title: string
    tasks: TasksPropsType[]
    date?: string
    deleteTask: (taskId: string) => void
    changeFilter: (filterValue: FilterPropsType) => void
    createTask: (title: string) => void
}

export const TodolistItem = ({title, tasks, date, deleteTask, changeFilter, createTask}: TodolistItemPropsType) => {

    const inputRef = useRef<HTMLInputElement>(null);

    return (
        <div>
            <h3>{title}</h3>
            <div>
                <input ref={inputRef}/>
                <Button title={'+'} onClick={() => {
                    if (inputRef.current) {
                        createTask(inputRef.current.value)
                        inputRef.current.value = ""
                    }
                }}/>
            </div>
            <ul>
                {tasks.length === 0 ? <p>Тасок нет</p> :
                    tasks.map(task => {
                        return (
                            <li key={task.id}>
                                <input type="checkbox" checked={task.isDone}/> <span>{task.title}</span>
                                <Button title={'x'} onClick={() => deleteTask(task.id)}/>
                            </li>
                        );
                    })}
            </ul>
            <div>
                <Button title="All" onClick={() => changeFilter('all')}/>
                <Button title="Completed" onClick={() => changeFilter('completed')}/>
                <Button title="Active" onClick={() => changeFilter('active')}/>
            </div>
            <div>{date}</div>
        </div>);
};