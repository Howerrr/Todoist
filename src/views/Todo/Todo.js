import Header from "../../components/basic/Header";
import Tasks from "../../components/todo/Tasks";
import AddTask from "../../components/todo/AddTask";
import './index.css'
import { useState } from 'react'

const Todo = () => {
  const [showAdd, setShowAdd] = useState(false)
  const [tasks, setTasks] = useState(
    [
      {
        id: 1,
        text: 'Learn React',
        day: '5.26 19:00'
      },
      {
        id: 2,
        text: 'Play LOL',
        day: '5.26 19:05'
      },
      {
        id: 3,
        text: 'Code on Leetcode',
        day: '5.26 22:25'
      },
      {
        id: 4,
        text: 'Play CS:GO',
        day: '5.26 22:30'
      }
    ]
  )

  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1
    const newTask = { id, ...task }
    setTasks([...tasks, newTask])
  }

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  const toggleTask = (id) => {
    setTasks(tasks.map((task) => task.id === id ?
      { ...task, reminder: !task.reminder } : task))
  }

  return (
    <>
      <Header
        title="Todoist"
        onClick={() => setShowAdd(!showAdd)}
        cardName='Arrange'
      />
      {showAdd && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ?
        (<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleTask} />) :
        ('No Tasks')}
    </>


  );
}

export default Todo;
