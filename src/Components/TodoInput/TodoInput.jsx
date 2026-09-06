import React, { useRef } from 'react'

const TodoInput = ({ addTask }) => {

  const taskName = useRef();

  function addToHandle() {

    addTask(taskName.current.value);

    taskName.current.value = "";
  }

  return (
    <div>

      <input ref={taskName} type='text' placeholder='Enter Task...' />
      <button onClick={addToHandle} >Add Task</button>
    </div>
  )
}

export default TodoInput
