import React from 'react'
import TodoItem from '../TodoItem/TodoItem'

const TodoList = ({ tasks, increaseTask, decreaseTask, deleteTask }) => {
    return (
        <div>
            <ul>
                <TodoItem tasks={tasks}
                    increaseTask={increaseTask}
                    decreaseTask={decreaseTask}
                    deleteTask={deleteTask}
                />
            </ul>
        </div>
    )
}

export default TodoList
