import React, { useState } from 'react'
import TodoList from '../TodoList/TodoList';
import TodoInput from '../TodoInput/TodoInput';

const TodoApp = () => {

  const initialTask = ["Cricket", "Football", "Chess"];
  const [tasks, setTasks] = useState(initialTask);

  function addTask(newTask) {
    setTasks([newTask, ...tasks]);
  }

  function increaseTask(task) {
    const list = [...tasks];
    const indx = list.indexOf(task);

    if (indx > 0) {
      const temp = list[indx];
      list[indx] = list[indx - 1];
      list[indx - 1] = temp;
      setTasks(list);
    }
  }

  //  if(indx < list.length - 1) {

  function decreaseTask(task) {
    const list = [...tasks];
    const indx = list.indexOf(task);

    if (indx < list.length - 1) {
      const temp = list[indx];
      list[indx] = list[indx + 1];
      list[indx + 1] = temp;
      setTasks(list);
    }
  }

  function deleteTask(task) {
    const list = [...tasks];
    const deleteItem = list.filter(item => item !== task);

    setTasks(deleteItem);
  }

  return (
    <div>
      <h1>Todo Application</h1>
      <TodoInput addTask={addTask} />

      <TodoList tasks={tasks}
        increaseTask={increaseTask}
        decreaseTask={decreaseTask}
        deleteTask={deleteTask}
      />


    </div>
  )
}

export default TodoApp
