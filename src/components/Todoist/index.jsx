import { useState } from 'react'
import { nanoid } from 'nanoid';
import './index.css'
import Header from "../Header";
import Tasks from "../Tasks";
import AddTask from "../AddTask";

const Todoist = () => {
  const [showAdd, setShowAdd] = useState(false)
  const [tasks, setTasks] = useState([])
  const [fold, setFold] = useState(true)
 
  const loadAll = () => {
    let allTasks = [];
    for (let i = 0; i < localStorage.length; i++) {
      let key = localStorage.key(i);
      if (key.charAt(0) === '#') {
        let oneTask = localStorage.getItem(key);
        allTasks = [...allTasks, JSON.parse(oneTask)]
      }
    }
    setTasks(allTasks)
  }

  const addTask = (task) => {
    const id = nanoid()
    localStorage.setItem('#' + id, JSON.stringify({
      id: id,
      text: task.text,
      note: task.note,
      important: false
    }))
    if (task.fold) {
      setFold(!fold)
      setShowAdd(!showAdd)
    }
    loadAll()
  }

  const deleteTask = (task) => {
    localStorage.removeItem('#' + task.id);
    loadAll()
  }

  const toggleTask = (task) => {
    localStorage.setItem('#' + task.id, JSON.stringify({
      id: task.id,
      text: task.text,
      note: task.note,
      important: !task.important
    }))
    loadAll()
  }

  window.onload = function () {
    loadAll()
  }
  
  return (
    <div className="todoist innerbox" >
      <Header
        title="Todoist"
        onClick={() => { setShowAdd(!showAdd); setFold(!fold) }}
        cardName={fold ? 'Arrange' : 'Fold'}
      />
      {showAdd && !fold && <AddTask addTask={addTask} />}
      {tasks.length > 0 ?
        (<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleTask} />) :
        (!showAdd && <div style={{
          display: 'flex', height: '75%', fontSize: '100px', opacity: '0.05',
          justifyContent: 'center', alignItems: 'center', userSelect: 'none'
        }}>    
            No task
        </div>
        )}
    </div>
  );
}

export default Todoist;
