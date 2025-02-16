import {FilterPropsType, TasksPropsType} from "./App.tsx";
import {Button} from "./Button.tsx";

type TodolistItemPropsType = {
    title: string
    tasks: TasksPropsType[]
    date?: string
    deleteTask: (taskId: number) => void
    changeFilter: (filterValue: FilterPropsType) => void
}

export const TodolistItem = ({title, tasks, date, deleteTask, changeFilter}: TodolistItemPropsType) => {
    return (
        <div>
            <h3>{title}</h3>
            <div>
                <input/>
                <button>+</button>
            </div>
            <ul>
                {tasks.length === 0 ? <p>Тасок нет</p> :
                    tasks.map(task => {
                        return (
                            <li key={task.id}>
                                <input type="checkbox" checked={task.isDone}/> <span>{task.title}</span>
                                <Button title={"x"} onClick={() => deleteTask(task.id)}/>
                            </li>
                        )
                    })}
            </ul>
            <div>
                <Button title="All" onClick={() => changeFilter('all')}/>
                <Button title="Completed" onClick={() => changeFilter('completed')}/>
                <Button title="Active" onClick={() => changeFilter('active')}/>
            </div>
            <div>{date}</div>
        </div>)
}