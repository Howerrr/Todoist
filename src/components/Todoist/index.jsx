import { useState } from 'react'
import { nanoid } from 'nanoid';
import './index.css'
import Header from "../Header";
import Tasks from "../Tasks";
import AddTask from "../AddTask";


const Todoist = () => {
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
    const id = nanoid()
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
      <div className="container innerbox">
        <Header
          title="Todoist"
          onClick={() => setShowAdd(!showAdd)}
          cardName='Arrange'
        />
        {showAdd && <AddTask addTask={addTask} />}
        {tasks.length > 0 ?
          (<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleTask} />) :
          (<div style={{
            display: 'flex', height: '80%', fontSize: '28px',
            justifyContent: 'center', alignItems: 'center'
          }}>
            <div>
              No Tasks
            </div>
          </div>
          )}
      </div>
    </>
  );
}

export default Todoist;
