import { useState } from 'react'
import { nanoid } from 'nanoid';
import './index.css'
import Header from "../Header";
import Tasks from "../Tasks";
import AddTask from "../AddTask";

const Todoist = () => {
  const [showAdd, setShowAdd] = useState(false)
  const [tasks, setTasks] = useState([])

  const loadAll = () => {
    let allTasks = [];
    for (let i = 0; i < localStorage.length; i++) {
      let key = localStorage.key(i);
      let oneTask = localStorage.getItem(key);
      allTasks = [...allTasks, JSON.parse(oneTask)]
    }
    setTasks(allTasks)
  }

  const addTask = (task) => {
    const id = nanoid()
    localStorage.setItem(id, JSON.stringify({
      id: id,
      text: task.text,
      day: task.day,
      important: false
    }))
    loadAll()
  }

  const deleteTask = (task) => {
    localStorage.removeItem(task.id);
    loadAll()
  }

  const toggleTask = (task) => {
    localStorage.setItem(task.id, JSON.stringify({
      id: task.id,
      text: task.text,
      day: task.day,
      important: !task.important
    }))
    loadAll()
  }

  window.onload = function() {
    loadAll()
  }

  return (
    <>
      <div className="container innerbox">
        <Header
          title="Todoist"
          onClick={() => { setShowAdd(!showAdd) }}
          cardName='Arrange'
        />
        {showAdd && <AddTask addTask={addTask} />}
        {tasks.length > 0 ?
          (<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleTask} />) :
          (!showAdd && <div style={{
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
