import React from 'react'
import classes from './TodoItem.module.css';

const TodoItem = ({ tasks, increaseTask, decreaseTask, deleteTask }) => {
    return (
        <div>
            {tasks.map((item, indx) => {
                return <div key={indx} className={classes['todo-item']}>
                    <div >{item}</div>

                    <div>
                        <button onClick={() => increaseTask(item)}>⬆</button>
                        <button onClick={() => decreaseTask(item)}>⬇</button>
                        <button onClick={() => deleteTask(item)}>X</button>
                    </div>
                </div>
            })}
        </div>
    )
}

export default TodoItem
